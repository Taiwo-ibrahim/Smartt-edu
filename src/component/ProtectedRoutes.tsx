"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/Context/AuthContext";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/SignIn");
    }
  }, [user, loading, router]);

  if (loading) {
    return <p className="text-center mt-10">Confirming authentication...</p>;
  }

  if (!user) {
    return null; 
  }

  return <>{children}</>;
}
