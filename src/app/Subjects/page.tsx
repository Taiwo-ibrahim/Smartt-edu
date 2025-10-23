import React from 'react';
import { GoSearch } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';

// --- MOCK DATA ---
const navigationItems = [
  { name: 'Dashboard', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l7-7 7 7M19 10v10a1 1 0 01-1 1h-3m-7 0v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z" /></svg>
  )},
  { name: 'My Subjects', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.206 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.523 5.832 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.794 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.523 18.168 18 16.5 18s-3.332.477-4.5 1.253" /></svg>
  ), active: true },
  { name: 'My Assignments', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
  )},
  { name: 'CBT & Exams', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
  )},
  { name: 'Result Checker', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 2v-2m9-4a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h18a2 2 0 012 2v4zm-7 2h0l-2 2h2l-2 2h2l-2 2h2l-2 2h2" /></svg>
  )},
  { name: 'Notifications', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9" /></svg>
  ), notifications: 2 },
  { name: 'Settings', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  )},
  { name: 'My Profile', icon: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
  )},
];

const enrolledSubjectsData = [
    { sn: 1, subject: 'English Language', teacher: 'Mrs Titi Afolayan', schedule: 'Monday (10am-12pm), Thursday (8am-9:30am)' },
    { sn: 2, subject: 'Mathematics', teacher: 'Mr Stephen Ogulu', schedule: 'Monday (10am-12pm), Thursday (8am-9:30am)' },
    { sn: 3, subject: 'Chemistry', teacher: 'Mr Jide Akinfola', schedule: 'Monday (10am-12pm), Thursday (8am-9:30am)' },
    { sn: 4, subject: 'Physics', teacher: 'Mr John Okoli', schedule: 'Monday (10am-12pm), Thursday (8am-9:30am)' },
    { sn: 5, subject: 'Biology', teacher: 'Mrs Titi Afolayan', schedule: 'Monday (10am-12pm), Thursday (8am-9:30am)' },
    { sn: 6, subject: 'Civic Education', teacher: 'Mr Stephen Ogulu', schedule: 'Monday (10am-12pm), Thursday (8am-9:30am)' },
    { sn: 7, subject: 'Economics', teacher: 'Mr Jide Akinfola', schedule: 'Monday (10am-12pm), Thursday (8am-9:30am)' },
    { sn: 8, subject: 'Literature', teacher: 'Mrs Titi Afolayan', schedule: 'Tuesday (1pm-3pm), Friday (10am-11:30am)' },
    { sn: 9, subject: 'Government', teacher: 'Mr Stephen Ogulu', schedule: 'Tuesday (1pm-3pm), Friday (10am-11:30am)' },
    { sn: 10, subject: 'Geography', teacher: 'Mr Jide Akinfola', schedule: 'Tuesday (1pm-3pm), Friday (10am-11:30am)' },
];



// Main Content Header (Top Nav)
const MainContentHeader = () => {
  return (

    <nav className="border-l pt-[25px] pb-[25px] border-b border-r border-[#E4E7EC] bg-[#FFFFFF] flex items-center justify-between ">
        <h2 className="text-2xl font-bold text-gray-900 pl-6 pt-2 pb-1">My Subjects</h2>

    
        {/* Icons and Avatar */}
        <div className="flex items-center gap-[15px] mr-[20px]">
        <IoMdNotificationsOutline className="text-[30px]" />
        <IoSettingsOutline className="text-[25px]" />
        <span className="w-[30px] h-[30px] flex items-center justify-center bg-[#B44A05] border border-[#FB914C] rounded-[50%] text-[#FFFFFF] text-[15px]/[22px] font-[700]">
            AO
        </span>
        </div>
    </nav>

  );
};

// Subject Overview Card
const SubjectOverviewCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 relative">
            {/* User image/icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gray-200 border-4 border-white flex items-center justify-center">
               
                <span className="text-xl font-bold text-gray-600">AO</span>
            </div>

            <div className="mt-8 text-center text-sm mb-6">
                <p className="font-semibold text-gray-800">Sub-Class: <span className="font-normal">Eleventh Grade-A (SS2-A)</span></p>
            </div>

            <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm text-gray-600">
                <div className="flex justify-between items-center pr-2 border-r border-gray-200">
                    <span className="font-medium">No of Enrolled Courses</span>
                    <span className="font-semibold text-gray-800">Eight</span>
                </div>
                <div className="flex justify-between items-center pl-2">
                    <span className="font-medium">Current Class</span>
                    <span className="font-semibold text-gray-800">Eleventh Grade (SS2)</span>
                </div>
                <div className="col-span-2 flex justify-between items-center pt-4 border-t border-gray-200">
                    <span className="font-medium">Current Academic Year</span>
                    <span className="font-semibold text-gray-800">2024/2025</span>
                </div>
            </div>
        </div>
    );
};

// Enrolled Subjects Table
const EnrolledSubjectsTable = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm mt-8 overflow-hidden">
            <div className=" py-4 border-b border-gray-200">
                <h3 className="text-[16px]/[24px] font-medium text-gray-900 flex items-center">
                    First Term (2024/2025) Enrolled Subjects 
                    <span className="ml-2 bg-gray-200 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">8</span>
                </h3>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-[14px]/[22px] font-[500] font-medium text-gray-900">
                                S/N
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-[14px]/[22px] font-[500] font-medium text-gray-900 ">
                                Enrolled Subjects
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-[14px]/[22px] font-[500] font-medium text-gray-900">
                                Subject Teachers
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-[14px]/[22px] font-[500] font-medium text-gray-900">
                                Class Schedules
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-[14px]/[22px] font-[500] font-medium text-gray-900">
                                Topics/Outline
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {enrolledSubjectsData.map((subject, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap font-500 text-[14px]/[22px] text-[#000000]">
                                    {subject.sn}.
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap font-400 text-[14px]/[22px] text-[#101828]">
                                    {subject.subject}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap font-400 text-[14px]/[22px] text-[#101828]">
                                    {subject.teacher}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap font-400 text-[14px]/[22px] text-[#101828]">
                                    {subject.schedule}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap font-400 text-right text-[14px]/[22px] font-medium">
                                    <button className="text-[#257117] underline">View Outline</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Main MySubjects Page Component
export default function MySubjectsPage() {
  return (
    <div className="flex min-h-screen " >
      

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <MainContentHeader />

        {/* Page Specific Content */}
        <div className="p-6 md:p-8 flex-1 overflow-auto bg-[#FFFFFF] mt-2 border border-[#E4E7EC]">
           

            {/* Subject Overview Card */}
            <SubjectOverviewCard />

            {/* Term Selection and Filter */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-8 mb-6 gap-4">
                <div className="relative w-full sm:w-64 p-1 rounded  border border-[#D0D5DD] cursor-pointer">
                    <label htmlFor="term-select" className="sr-only">Select Term</label>
                    <select 
                        id="term-select" 
                        className="block w-full pl-3 pr-10 py-2 text-base border-[#D0D5DD] focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm rounded-md shadow-sm"
                    >
                        <option className='p-1'>First Term (2024/2025)</option>
                        <option>Second Term (2024/2025)</option>
                        <option>Third Term (2024/2025)</option>
                    </select>
                    
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    {/* Date Pickers (mocked for visual only) */}
                    <div className="flex items-center space-x-2 border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 bg-white shadow-sm w-full sm:w-auto">

                        <div className='flex gap-[4px] border-r pr-2'>
                            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <span>8th Oct 2024</span>
                        </div>
                        
                        <div className='flex gap-[4px]'>
                            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <span>8th Oct 2025</span>
                        </div>
                    </div>

                    
                    <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition w-full sm:w-auto justify-center">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
                        Filter
                    </button>
                </div>
            </div>

            {/* Enrolled Subjects Table */}
            <EnrolledSubjectsTable />
        </div>
      </div>
    </div>
  );
}
