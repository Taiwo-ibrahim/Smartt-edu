import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoSearch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

// Assuming you have @heroicons/react installed
// import { BellIcon, Cog6ToothIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';


// --- Reusable Components ---

// Header
const DashboardHeader: React.FC = () => (
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
      SO
    </span>
  </div>
</nav>
);

// Stat Card
interface StatCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, children, className }) => (
  <div className={`p-4 bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      {icon}
    </div>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
    {children && <div className="mt-3">{children}</div>}
  </div>
);

// Subject Tag
interface SubjectTagProps {
  name: string;
  color?: string;
}

const SubjectTag: React.FC<SubjectTagProps> = ({ name, color = 'bg-[#F5F5F5C2]' }) => (
  <span className={`${color}  text-gray-800 border border-[#D0D5DD] text-[14px]/[22px] font-medium px-[12px] py-[4px] text-[#344054] rounded-[4px]`}>
    {name}
  </span>
);

// Progress Bar
interface ProgressBarProps {
  label: string;
  percentage: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label, percentage, color = 'bg-purple-600' }) => (
  <div className="mb-2">
    <div className="flex justify-between text-sm text-gray-700 mb-1">
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div className={`${color} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);


// --- Main Dashboard Component ---

const StudentDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col ">
      <DashboardHeader />

      <main className="flex-1 p-6 bg-red">
        {/* Welcome Section */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl flex flex-col flex-end font-semibold text-gray-900 gap-[4px]">
            <p className='flex'><span className='text-[14px]/[22px] font-medium text-[#101828] mt-[7px]'>Hi,</span> Mr Ogulu 👋</p>
            <p className="text-[#101828] text-[16px]/[24px] font-normal mt-1">Have a look at the key metrics for First Term</p>
          </h1>
          <div className="flex items-center space-x-3">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm bg-white hover:bg-gray-50 gap-[4px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#101828C2" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              9th Sep 2024
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm bg-white hover:bg-gray-50 gap-[4px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#101828C2" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              8th Dec 2024
            </button>
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 text-sm bg-white hover:bg-gray-50 focus:outline-none">
              <option>11th Grade</option>
              <option className='border border-gray-300'>10th Grade</option>
            </select>
          </div>
        </div>

        {/* Top Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatCard title="Subjects Taken" value="3+" className="col-span-1">
            <p className="text-sm text-gray-500 mt-1">
              You are currently teaching 3 subjects this First term
            </p>
            <div className="flex flex-wrap gap-[10px] mt-3">
              <SubjectTag name="Mathematics" />
              <SubjectTag name="Civic Education" />
              <SubjectTag name="Physics" />
            </div>
          </StatCard>

          <StatCard title="Average Attendance" value="+64.8%" className="col-span-1">
            <p className="text-sm text-gray-500 mt-1">
              The average of your total attendance for each subject you taught this term
            </p>
            <div className="mt-4 space-y-2">
              <ProgressBar label="Mathematics" percentage={65} color="bg-purple-600" />
              <ProgressBar label="Civic Education" percentage={76} color="bg-orange-500" />
              <ProgressBar label="Physics" percentage={59} color="bg-blue-500" />
            </div>
          </StatCard>

          <StatCard title="Total Students" value="40+" className="col-span-1">
            <div className="flex items-center space-x-2 mb-2">
              <Image src="/icons/users.svg" alt="users icon" width={20} height={20} />
              <p className="text-sm text-gray-500">
                All of the students you are teaching for your 3 subjects
              </p>
            </div>
            {/* Placeholder for the sparkline chart */}
            <div className="h-24 w-full bg-gradient-to-r from-green-300 to-green-600 rounded-lg flex items-end justify-around p-2">
                <div className="w-1/4 h-3/4 bg-white/30 rounded-t-md" style={{height: '80%'}}></div>
                <div className="w-1/4 h-2/3 bg-white/30 rounded-t-md" style={{height: '60%'}}></div>
                <div className="w-1/4 h-full bg-white/30 rounded-t-md" style={{height: '90%'}}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>24</span>
                <span>40</span>
                <span>40</span>
            </div>
          </StatCard>
        </section>

        {/* Bottom Section: Assignments, Schedule, Class Performance */}
        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Student Assignments */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Student Assignments</h2>
              <Link href="#" className="text-green-600 text-sm font-medium hover:underline">
                View All
              </Link>
            </div>
            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2"> {/* Added overflow-y-auto */}
              {/* Mathematics Assignment */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-600 font-bold rounded-md">
                    M
                  </div>
                  <h3 className="font-semibold text-gray-900">Mathematics</h3>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>Submission Date: 23/09/24, 10:00AM</span>
                  <span className="flex items-center">
                    <Image src="/icons/users-group.svg" alt="students icon" width={14} height={14} className="mr-1" />
                    Submitted By: 12/24 Students
                  </span>
                </div>
                <p className="font-medium text-gray-800 text-sm mb-1">Differential Calculus</p>
                <p className="text-gray-600 text-sm mb-3">
                  This assignment is grouped into 2 sections. The first section is a sum of 6 objective questions, while the second section is a sum of 3 theory questions. Answer all questions.
                </p>
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <Image src="/icons/calendar.svg" alt="calendar icon" width={14} height={14} className="mr-1" />
                  Assigned Yesterday
                </div>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-green-600 text-sm bg-white hover:bg-gray-50">
                  View
                </button>
              </div>

              {/* Civic Education Assignment */}
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 font-bold rounded-md">
                    C
                  </div>
                  <h3 className="font-semibold text-gray-900">Civic Education</h3>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>Submission Date: 23/09/24, 10:00AM</span>
                  <span className="flex items-center">
                    {/* <Image src="/icons/users-group.svg" alt="students icon" width={14} height={14} className="mr-1" /> */}
                    Submitted By: 12/24 Students
                  </span>
                </div>
                <p className="font-medium text-gray-800 text-sm mb-1">Fundamental Human Rights</p>
                <p className="text-gray-600 text-sm mb-3">
                  You have been asked to answer all the questions in this assignment. A total of 10 questions, which question is 5 marks
                </p>
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <Image src="/icons/calendar.svg" alt="calendar icon" width={14} height={14} className="mr-1" />
                  Assigned 01/09/2024
                </div>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-green-600 text-sm bg-white hover:bg-gray-50">
                  View
                </button>
              </div>
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Today's Schedule</h2>
              <select className="px-3 py-1 border border-gray-300 rounded-lg text-gray-700 text-xs bg-white focus:outline-none">
                <option>11th Grade</option>
                <option>10th Grade</option>
              </select>
            </div>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2"> {/* Added overflow-y-auto */}
              {/* Schedule Item */}
              <div className="flex space-x-4">
                <span className="text-sm text-gray-500 min-w-[50px]">10AM</span>
                <div className="relative flex-1 p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-full border-2 border-white"></div>
                  <p className="font-semibold text-sm text-gray-900">Mathematics</p>
                  <p className="text-xs text-gray-600">11th Grade - A Class (1st & 2nd Period)</p>
                  <span className="absolute top-2 right-3 text-xs text-gray-500">10:00AM - 11:00AM</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <span className="text-sm text-gray-500 min-w-[50px]">11AM</span>
                <div className="relative flex-1 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></div>
                  <p className="text-xs text-gray-600">No scheduled class</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <span className="text-sm text-gray-500 min-w-[50px]">12PM</span>
                <div className="relative flex-1 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-2 border-white"></div>
                  <p className="font-semibold text-sm text-gray-900">Physics</p>
                  <p className="text-xs text-gray-600">11th Grade - B Class (5th Period)</p>
                  <span className="absolute top-2 right-3 text-xs text-gray-500">12:00PM - 12:30PM</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <span className="text-sm text-gray-500 min-w-[50px]">1PM</span>
                <div className="relative flex-1 p-3 bg-red-50 rounded-lg border border-red-200">
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full border-2 border-white"></div>
                  <p className="font-semibold text-sm text-gray-900">Civic Education</p>
                  <p className="text-xs text-gray-600">11th Grade - C Class (3rd & 4th Period)</p>
                  <span className="absolute top-2 right-3 text-xs text-gray-500">1:00PM - 2:00PM</span>
                </div>
              </div>
               {/* Additional dummy schedule items for scrollability */}
              <div className="flex space-x-4">
                <span className="text-sm text-gray-500 min-w-[50px]">2PM</span>
                <div className="relative flex-1 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-400 rounded-full border-2 border-white"></div>
                  <p className="text-xs text-gray-600">Break Time</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <span className="text-sm text-gray-500 min-w-[50px]">3PM</span>
                <div className="relative flex-1 p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-full border-2 border-white"></div>
                  <p className="font-semibold text-sm text-gray-900">Mathematics</p>
                  <p className="text-xs text-gray-600">11th Grade - A Class (Project work)</p>
                  <span className="absolute top-2 right-3 text-xs text-gray-500">3:00PM - 4:00PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Average Class Performance */}
          <div className="xl:col-span-1 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Average Class Performance</h2>
              <select className="px-3 py-1 border border-gray-300 rounded-lg text-gray-700 text-xs bg-white focus:outline-none">
                <option>Mathematics</option>
                <option>Physics</option>
              </select>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              This is an average performance report of your students this term
            </p>
            <div className="flex flex-col items-center justify-center h-48">
              {/* Placeholder for the pie chart */}
              <div className="relative w-36 h-36 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {/* Simplified pie chart using conic gradient */}
                <div
                  className="w-full h-full rounded-full absolute"
                  style={{
                    background: `conic-gradient(#8b5cf6 0% 70%, #f97316 70% 80%, #ef4444 80% 90%, #d1d5db 90% 100%)`,
                  }}
                ></div>
                <div className="absolute w-28 h-28 rounded-full bg-white flex items-center justify-center flex-col">
                  <span className="text-2xl font-bold text-gray-900">70%</span>
                  <span className="text-xs text-gray-500 text-center">Average for 12 Students</span>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex items-center text-sm text-gray-700">
                <span className="w-3 h-3 bg-purple-600 rounded-full mr-2"></span>
                Student Marks
              </div>
              <div className="flex items-center text-sm text-gray-700 ml-5">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                75% - 100%
              </div>
              <div className="flex items-center text-sm text-gray-700 ml-5">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                50% - 74%
              </div>
              <div className="flex items-center text-sm text-gray-700 ml-5">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                49% - 0%
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentDashboard;