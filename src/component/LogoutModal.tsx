"use client";

import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase"; // adjust path if needed
import { AiOutlineLogout } from "react-icons/ai";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LogoutModal({ isOpen, onClose }: LogoutModalProps) {
  if (!isOpen) return null;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      onClose(); 
      window.location.href = "/SignIn"; 
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#101828B2] backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-[12px] p-6 w-[90%] max-w-[400px] shadow-lg">
        <AiOutlineLogout className="text-[44px] text-[#F04438] bg-[#FEE4E2] rounded-[50%] p-[4px] mb-[20px] border border-[8px] border-[#FEF3F2]"/>
        <h2 className="text-[20px]/[28px] font-[700] text-[#101828] mb-2">Logout</h2>
        <p className="text-[14px]/[22px] font-[400] text-[#475467] mb-6">You are about to log out from your account, are you sure you want to continue?</p>

        <div className="flex w-full justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border w-1/2 border-gray-300 text-[#344054] text-[14px]/[22px] hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="px-4 w-1/2 py-2 rounded-md bg-[#D92D207A] border border-[#D92D207A] text-[#000000A3] text-[14px]/[22px] hover:scale-[1.05]"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
