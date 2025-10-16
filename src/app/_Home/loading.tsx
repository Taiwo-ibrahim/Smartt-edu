// app/loading.tsx
"use client";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-[#F9FAFB]">
      <div className="flex flex-col items-center gap-4">
        {/* App Logo / Title */}
        <h1 className="text-2xl font-bold text-[#257117]">Smartt</h1>

        {/* Spinner */}
        <AiOutlineLoading3Quarters className="animate-spin text-[#B44A05] w-10 h-10" />

        {/* Message */}
        <p className="text-[#344054] text-[16px]/[24px] font-medium">
          Loading your dashboard...
        </p>
      </div>
    </div>
  );
}
