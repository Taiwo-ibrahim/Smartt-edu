"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome } from 'react-icons/go';
import { PiBookOpenTextThin } from 'react-icons/pi';
import { MdOutlineAssignment } from 'react-icons/md';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { IoReaderOutline } from 'react-icons/io5';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineLogout } from 'react-icons/ai';
import { LogoutModal } from "./LogoutModal";



const links = [
    { href: "/Home", label: "Dashboard", icon: GoHome },
    { href: "/Subjects", label: "My Subjects", icon: PiBookOpenTextThin },
    { href: "/dashboard/Home", label: "CBT & Exams ", icon: HiOutlineComputerDesktop },
    { href: "/dashboard/Home", label: "My Assignment", icon: MdOutlineAssignment },
    { href: "/dashboard/Home", label: "Results Checker", icon: IoReaderOutline },
    { href: "/dashboard/Home", label: "Notifications", icon: IoMdNotificationsOutline },
    { href: "/dashboard/Home", label: "Profile", icon: CgProfile },
    { href: "/dashboard/Home", label: "Settings", icon: IoSettingsOutline },
  ] as const;

  
export function Sidebar() {
  const pathname = usePathname()
  const [showLogout, setShowLogout] = useState(false);



  return (
    <aside className="flex h-full flex-col max-w-[350px] w-[25%] border mi-h-[1025px] min-w-[280px] bg-[#FFFFFF] border-t border-l border-[#E4E7EC] text-black gap-y-[35px]">
        <div className="border-[#D0D5DD] w-full max-h-[92px] border-b border-[#D0D5DD]">
            <h2 className="py-[26px] pl-[37px] text-[28px]/[40px] font-bold text-[#257117]">
            Smartt
            </h2>
        </div>

        <nav className="w-[90%] flex flex-col gap-[30px]">
            {links.map((link) => {
            const Icon = link.icon; 
            const isActive = pathname === link.href;
            return (
                <Link
                key={link.label}
                href={link.href}
                className={`group pl-[35px] flex items-center gap-3 text-[18px]/[26px] w-full rounded-r-[8px] p-2
                    ${
                    isActive
                        ? "bg-[#FCB4857A] border-l-[5px] border-[#B44A05] text-[#000000A3] font-[700]"
                        : "text-[#101828] font-[500] hover:bg-[#FCB4857A] hover:border-l-[5px] hover:border-[#B44A05] hover:text-[#000000A3] hover:font-[700]"
                    }`}
                //   className=" group pl-[35px] flex items-center gap-3 text-[18px]/[26px] text-[#101828] font-[500] w-[100%] hover:bg-[#FCB4857A] hover:border hover:border-l-[5px] hover:border-[#B44A05] hover:text-[#000000A3] hover:font-[700]  rounded-r-[8px] p-2 active:bg-[#FCB4857A] active:border active:border-l-[5px] active:border-[#B44A05] active:text-[#000000A3] active:font-[700]"
                >
                <Icon className={`" text-[32px] group-hover:text-[#B44A05] w-[32px] h-[32px]" ${
                    isActive ? "text-[#B44A05]" : "group-hover:text-[#B44A05]"}
                    `} /> 
                {link.label}
                </Link>
            );
            })}
        </nav>

        <div className="mt-[70px] flex flex-col w-[90%] mx-auto max-w-[240px] rounded-[16px] border border-[#D0D5DD]">
            <div className="flex items-center gap-[8px] p-[11px]">
                <span className="w-[40px] h-[40px] flex items-center justify-center bg-[#B44A05] border border-[#FB914C] rounded-[50%] text-[#FFFFFF] text-[18px]/[26px] font-[700] ">AO</span>
                <div className="flex flex-col">
                    <h2 className="text-[#101828] font-[500] text-[16px]/[24px]">Aihsosa Obas</h2>
                    <p className="text-[#667085] font-[400] text-[14px]/[22px]">student</p>
                </div>
            </div>
            <div onClick={() => setShowLogout(true)} className="mt-[18px] hover:underline hover:underline-offset-4 flex bg-[#F9FAFB] border-t rounded-b-[16px] cursor-pointer text-[#F04438] items-center gap-2 border-t-[#D0D5DD] p-[11px] w-full">
                <AiOutlineLogout/>
                <p>Log Out</p>
            </div>
        </div>

        <LogoutModal 
            isOpen={showLogout}
            onClose={() => setShowLogout(false)}
        />
    </aside>
  );
}