"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import {doc, getDoc, setDoc } from "firebase/firestore"
import { auth, db } from "@/lib/firebase"; // your firebase setup file


type UserRole = "student" | "parent" | "teacher";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  role: string | null; 
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  role: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);


    // Create a minimal user document if it doesn't exist (for existing users)
    const createMinimalUserDocument = async (uid: string, email: string | null, displayName: string | null) => {
      try {
        const userDoc = doc(db, "users", uid);
        await setDoc(userDoc, {
          email: email || "",
          fullName: displayName || "",
          role: "student", // Default role for existing users
          createdAt: new Date().toISOString(),
          migrated: true, // Flag to indicate this was auto-created
        }, { merge: true }); // Use merge to not overwrite if document exists
        console.log(`✅ Created minimal user document for existing user: ${uid}`);
      } catch (error) {
        console.error("Failed to create minimal user document:", error);
      }
    };

    // Fetch role from Firestore
    const fetchUserRole = async (uid: string, userEmail?: string | null, userDisplayName?: string | null): Promise<string | null> => {
      try {
        if (!uid) {
          console.warn("fetchUserRole called without uid");
          return null;
        }

        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          const role = data.role;
          
          if (role && typeof role === 'string') {
            return role;
          } else {
            console.warn(`User ${uid} document exists but has no valid role field`);
            return null;
          }
        } else {
          console.warn(`User document not found for uid: ${uid}. Creating minimal document...`);
          // Create a minimal document for existing users who don't have one
          if (userEmail !== undefined || userDisplayName !== undefined) {
            await createMinimalUserDocument(uid, userEmail || null, userDisplayName || null);
            // Try fetching again after creating
            const retrySnap = await getDoc(docRef);
            if (retrySnap.exists()) {
              const data = retrySnap.data();
              return data.role || "student";
            }
          }
          return null;
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching role from Firestore:", error.message);
          
          // Check if it's a Firestore-specific error
          if ((error as any).code) {
            console.error("Firestore error code:", (error as any).code);
          }
        } else {
          console.error("Unknown error fetching role:", error);
        }
        return null;
      }
    };


    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
        setLoading(true);
        try {
          if (firebaseUser) {
            setUser(firebaseUser);
            // Pass email and displayName for creating missing documents
            const userRole = await fetchUserRole(
              firebaseUser.uid, 
              firebaseUser.email, 
              firebaseUser.displayName
            );
            setRole(userRole);
          } else {
            setUser(null);
            setRole(null);
          }
        } catch (error) {
          console.error("Error in auth state change handler:", error);
          setUser(null);
          setRole(null);
        } finally {
          setLoading(false);
        }
      });
  
      return unsubscribe;
    }, []);


  return (
    <AuthContext.Provider value={{ user, loading, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
