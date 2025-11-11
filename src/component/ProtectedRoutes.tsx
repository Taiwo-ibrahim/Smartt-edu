"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/Context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[]; // Optional: specify which roles can access
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const { user, loading, role } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/SignIn");
      return;
    }

    // If specific roles are required, check if user has one of them
    if (!loading && user && allowedRoles && allowedRoles.length > 0) {
      if (!role || !allowedRoles.includes(role)) {
        // Redirect to unauthorized page or home
        router.push("/SignIn");
      }
    }
  }, [user, loading, role, allowedRoles, router]);

  if (loading) {
    return <p className="text-center mt-10">Confirming authentication...</p>;
  }

  if (!user) {
    return null; 
  }

  // If roles are specified, check if user has required role
  if (allowedRoles && allowedRoles.length > 0) {
    if (!role || !allowedRoles.includes(role)) {
      return (
        <div className="text-center mt-10">
          <p className="text-red-500">Access Denied</p>
          <p className="text-gray-600">You don&apos;t have permission to access this page.</p>
        </div>
      );
    }
  }

  return <>{children}</>;
}
