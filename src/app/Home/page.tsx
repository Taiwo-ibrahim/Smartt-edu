"use client";

import { GoSearch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import PerformanceCard from "@/component/PerformanceCard";
import AssignmentsCard from "@/component/AssignmentsCard";
import RightPanel from "@/component/RightPanel";
import ProtectedRoute from "@/component/ProtectedRoutes";

export default function Home() {
  return (
    <ProtectedRoute>
      <div className="flex flex-col w-full min-h-screen bg-[#F9FAFB] text-[#101828]">
        {/* ===== NAVBAR ===== */}
        <nav className="flex items-center justify-between w-full bg-white border-b border-[#E4E7EC] pt-[25px] pb-[25px] sm:p-5">
            <div className="invisible">
                <h2>Empt</h2>
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
          <section className="flex-1 flex flex-col p-4 sm:p-6 gap-6">
            {/* Welcome Section */}
            <div className="w-full bg-[#F5F5F5C2] border border-[#CCCCCC] rounded-[16px] p-4 sm:p-6 shadow-sm">
              <p className="text-sm sm:text-base font-medium">
                Welcome,{" "}
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
                    <FaRegAddressCard className="text-[22px] bg-[#F5F5F5] p-1.5 rounded-md" />
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



// "use client";

// import { GoSearch } from "react-icons/go";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { IoSettingsOutline } from "react-icons/io5";
// import { FaRegAddressCard } from "react-icons/fa";
// import { RiHandbagLine } from "react-icons/ri";
// import { BiChart } from "react-icons/bi";
// import PerformanceCard from "@/component/PerformanceCard";
// import AssignmentsCard from "@/component/AssignmentsCard";
// import RightPanel from "@/component/RightPanel";
// import ProtectedRoute from "@/component/ProtectedRoutes";

// export default function Home() {
//   return (
//     <ProtectedRoute>

//         <div className="flex flex-col mb-[40px] w-full h-full min-h-[935px] bg-[#F9FAFB] by-[#FFFFFF] gap-[10px]">
//         {/* ===== NAVBAR ===== */}
//         <nav className="border-l pt-[25px] pb-[25px] border-b border-r border-[#E4E7EC] bg-[#FFFFFF] flex items-center justify-between ">
//             <div className="invisible">empty</div>

//             {/* Search Bar */}
//             <div className="flex gap-[10px] items-center w-[30%] max-w-[350px] border border-[#E4E7EC] rounded-[8px] bg-[#F9FAFB] p-[8px]">
//             <GoSearch className="text-[24px] text-[#98A2B3]" />
//             <input
//                 className="flex-1 text-[14px]/[22px] placeholder:text-[#98A2B3] bg-transparent focus:outline-none"
//                 placeholder="Search"
//                 type="search"
//             />
//             </div>

//             {/* Icons and Avatar */}
//             <div className="flex items-center gap-[15px] mr-[20px]">
//             <IoMdNotificationsOutline className="text-[30px]" />
//             <IoSettingsOutline className="text-[25px]" />
//             <span className="w-[30px] h-[30px] flex items-center justify-center bg-[#B44A05] border border-[#FB914C] rounded-[50%] text-[#FFFFFF] text-[15px]/[22px] font-[700]">
//                 AO
//             </span>
//             </div>
//         </nav>

//         {/* ===== MAIN CONTENT ===== */}
//         <div className="w-full h-full flex-col md:flex-row md:flex border-t border-l border-r border-[#E4E7EC] min-h-[935px] bg-[#FFFFFF] items-start gap-[24px]">

//             <section className="w-[70%] md:w-[75%] flex flex-col ">
//                 <div className="border border-[#CCCCCC] max-w-[850px] w-full ml-[15px] bg-[#F5F5F5C2] p-[17px] rounded-[16px] flex flex-col mt-[25px]">
//                 <div>
//                     <p className="text-[14px]/[22px] font-[500] text-[#101828]">
//                     Welcome, <span className="font-[700] text-[24px]/[32px]">Aihsosa</span>{" "}
//                     <span role="img" aria-label="wave">
//                         👋🏼
//                     </span>
//                     </p>

//                     {/* ===== STUDENT PROFILE CARDS ===== */}
//                     <div className="flex gap-[10px] w-full ">

//                         <div className="border mt-[25px] border border-[#E4E7EC] rounded-[12px] p-[10px] bg-[#FFFFFF] shadow-sm ma-w-[300px] w-[50%]">
//                         <div className="flex items-center gap-[10px] mb-[15px]">
//                             <FaRegAddressCard className="text-[] text-[25px] p-[5px] border bg-[#F5F5F5] rounded-[8px]" />
//                             <p className="font-[500] text-[#101828] text-[16px]/[24px]">Student Profile</p>
//                         </div>

//                         <div className="flex gap-[5px] flex-col bg-[#F5F5F5C2] p-[8px] rounded-[12px]">
//                             <div className="flex gap-[8px]">
//                             <h4 className="font-[600]  text-[#101828] text-[14px]/[22px] ">
//                                 Full Name:
//                             </h4>
//                             <p className=" font-[400] text-[#101828] text-[14px]/[22px]">
//                                 Aihsosa Jeremiah Obas
//                             </p>
//                             </div>

//                             <div className="flex gap-[8px] border-t border-[#CCCCCC]">
//                             <h4 className="font-[600] text-[#101828] text-[14px]/[22px]">
//                                 Email:
//                             </h4>
//                             <p className="font-[400] text-[#101828] text-[14px]/[22px]">
//                                 aihsosa@email.com
//                             </p>
//                             </div>

//                             <div className="flex gap-[8px] border-t border-[#CCCCCC]">
//                             <h4 className="font-[600] text-[#101828] text-[14px]/[22px]">
//                                 ID No:
//                             </h4>
//                             <p className="font-[400] text-[#101828] text-[14px]/[22px]">0012/EDU/2022</p>
//                             </div>
//                         </div>
//                         </div>

//                         <div className="mt-[25px] border border-[#E4E7EC] rounded-[12px] p-[10px] bg-[#FFFFFF] shadow-sm ma-w-[300px] w-[50%]">
//                         <div className="flex items-center gap-[10px] mb-[15px]">
//                             <FaRegAddressCard className="text-[] text-[25px] p-[5px] border bg-[#F5F5F5] rounded-[8px]" />
//                             <p className="font-[500] text-[#101828] text-[16px]/[24px]">Session Info</p>
//                         </div>

//                         <div className="flex gap-[5px] flex-col bg-[#F5F5F5C2] p-[8px] rounded-[12px]">
//                             <div className="flex gap-[8px]">
//                             <h4 className="font-[600] text-[#101828] text-[14px]/[22px] ">
//                                 Year/Session: 
//                             </h4>
//                             <p className=" font-[400] text-[#101828] text-[14px]/[22px]">
//                                 2024/2025
//                             </p>
//                             </div>

//                             <div className="flex gap-[8px] border-t border-[#CCCCCC]">
//                             <h4 className="font-[600] text-[#101828] text-[14px]/[22px]">
//                                 Current Term: 
//                             </h4>
//                             <p className="font-[400] text-[#101828] text-[14px]/[22px]">
//                                 First Term 
//                             </p>
//                             </div>

//                             <div className="flex gap-[8px] border-t border-[#CCCCCC]">
//                             <h4 className="font-[600] text-[#101828] text-[14px]/[22px]">
//                                 Class/Grade:
//                             </h4>
//                             <p className="font-[400] text-[#101828] text-[14px]/[22px]">11TH Grade</p>
//                             </div>
//                         </div>
//                         </div>
//                     </div>

//                 </div>

//                 {/* You can later add other sections like dashboard cards, analytics, etc */}
                
//                 </div>
//                 <div className=" flex flex-col gap-[12px] mt-[15px] ml-[10px] w-full">
//                     <PerformanceCard />
//                     <AssignmentsCard />
//                 </div>
//             </section>
//             <div className="mt-[25px]">
//                 <RightPanel />
//             </div>
//         </div>

//         </div>
//     </ProtectedRoute>

//   );
// }

