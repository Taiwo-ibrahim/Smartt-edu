"use client";

import { GoSearch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import PerformanceCard from "@/component/PerformanceCard";
import AssignmentsCard from "@/component/AssignmentsCard";
import RightPanel from "@/component/RightPanel";
import ProtectedRoute from "@/component/ProtectedRoutes";



export default function ParentDashboard() {
  return (
    <ProtectedRoute>
      <div className="flex flex-col w-full gap-[10px] min-h-screen bg-[#F9FAFB] text-[#101828]">
        {/* ===== NAVBAR ===== */}
        <nav className="flex items-center justify-between w-full bg-white border-b border-[#E4E7EC] pt-[25px] pb-[25px] sm:p-5">
            {/* This is an empty div just made invisible for the sake of styling  */}
            <div className="invisible">
                <h2>Empty</h2>
            </div>
          {/* Search Bar */}
          <div className="hidden sm:flex gap-2 items-center w-full max-w-[350px] border border-[#E4E7EC] rounded-[8px] bg-[#F9FAFB] p-2">
            <GoSearch className="text-[22px] text-[#98A2B3]" />
            <input
              className="flex-1 text-sm placeholder:text-[#98A2B3] bg-transparent focus:outline-none"
              placeholder="Search"
              type="search"
            />
          </div>

          {/* Icons and Avatar */}
          <div className="flex items-center gap-3 sm:gap-4">
            <IoMdNotificationsOutline className="text-[26px]" />
            <IoSettingsOutline className="text-[24px]" />
            <span className="w-[30px] h-[30px] flex items-center justify-center bg-[#B44A05] border border-[#FB914C] rounded-full text-white text-sm font-bold">
              AO
            </span>
          </div>
        </nav>

        {/* ===== MAIN CONTENT ===== */}
        <div className="flex flex-col lg:flex-row w-full h-full border-t border-[#E4E7EC] bg-white">
          {/* LEFT / MAIN SECTION */}
          <section className="flex-1 flex flex-col p-4 sm:p-4 gap-6">
            {/* Welcome Section */}
                <div className="flex flex-col w-full max-w-[240px] gap-[8px]">
                    <p className="text-[14px]/[22px] font-medium text-500 ">Select Profile</p>
                    <select className="focus:outline-0 cursor-pointer text-[#000000] text-[14px]/[24px] font-regular border p-[10px] rounded-[8px] border-[#D0D5DD] " defaultValue={`Aihsosa Jeremiah Obas`}>
                        <option className="text-[#000000] text-[14px]/[24px] font-regular">Aihsosa Jeremiah Obas</option>
                        <option>Aihsosa Jeremiah Obas</option>
                        <option>Aihsosa Jeremiah Obas</option>
                    </select>
                </div>
            <div className="w-full bg-[#F5F5F5C2] border border-[#CCCCCC] rounded-[16px] p-1 sm:p-3 shadow-sm">
              <p className="text-sm sm:text-base font-medium">
                Welcome,
                <span className="font-bold text-xl sm:text-2xl">Aihsosa</span>{" "}
                <span role="img" aria-label="wave">
                  👋🏼
                </span>
              </p>

              {/* Profile Cards */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                {/* Student Profile */}
                <div className="flex-1 border border-[#E4E7EC] rounded-[12px] p-4 bg-white shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <FaRegAddressCard className="text-[22px] bg-[#F5F5F5] p-1 rounded-md" />
                    <p className="font-medium text-base">Student Profile</p>
                  </div>

                  <div className="flex flex-col gap-2 bg-[#F5F5F5C2] p-3 rounded-[12px] text-sm">
                    <div className="flex flex-wrap gap-2">
                      <h4 className="font-semibold">Full Name:</h4>
                      <p>Aihsosa Jeremiah Obas</p>
                    </div>
                    <div className="flex flex-wrap gap-2 border-t border-[#CCCCCC] pt-2">
                      <h4 className="font-semibold">Email:</h4>
                      <p>aihsosa@email.com</p>
                    </div>
                    <div className="flex flex-wrap gap-2 border-t border-[#CCCCCC] pt-2">
                      <h4 className="font-semibold">ID No:</h4>
                      <p>0012/EDU/2022</p>
                    </div>
                  </div>
                </div>

                {/* Session Info */}
                <div className="flex-1 border border-[#E4E7EC] rounded-[12px] p-4 bg-white shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <FaRegAddressCard className="text-[22px] bg-[#F5F5F5] p-1.5 rounded-md" />
                    <p className="font-medium text-base">Session Info</p>
                  </div>

                  <div className="flex flex-col gap-2 bg-[#F5F5F5C2] p-3 rounded-[12px] text-sm">
                    <div className="flex flex-wrap gap-2">
                      <h4 className="font-semibold">Year/Session:</h4>
                      <p>2024/2025</p>
                    </div>
                    <div className="flex flex-wrap gap-2 border-t border-[#CCCCCC] pt-2">
                      <h4 className="font-semibold">Current Term:</h4>
                      <p>First Term</p>
                    </div>
                    <div className="flex flex-wrap gap-2 border-t border-[#CCCCCC] pt-2">
                      <h4 className="font-semibold">Class/Grade:</h4>
                      <p>11TH Grade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance & Assignments */}
            <div className="flex flex-col gap-4">
              <PerformanceCard />
              <AssignmentsCard />
            </div>

            {/* RIGHT PANEL UNDER MAIN CONTENT FOR MOBILE */}
            <div className="block lg:hidden mt-6">
              <RightPanel />
            </div>
          </section>

          {/* RIGHT PANEL (SIDE ON DESKTOP) */}
          <aside className="hidden lg:block lg:w-[35%] xl:w-[35%] mt-[25px] bg-[#FFFFFF]">
            <RightPanel />
          </aside>
        </div>
      </div>
    </ProtectedRoute>
  );
}

