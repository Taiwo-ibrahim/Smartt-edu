import React from 'react';
import PunctualityGauge from './PunctualityGauge';

// --- MOCK DATA ---
const scheduleData = [
  { time: '10:30am - 11:30am', title: 'Differential Calculus Test', subject: 'Mathematics 5th period', isToday: true },
  { time: '12:30pm - 1:30pm', title: 'Atoms & Elements', subject: 'Chemistry 6th period', isToday: true },
];

const dates = [
  { day: 'Mon', date: 23, current: false },
  { day: 'Tue', date: 24, current: false },
  { day: 'Wed', date: 25, current: false },
  { day: 'Thu', date: 26, current: true }, // Today
  { day: 'Fri', date: 27, current: false },
  { day: 'Sat', date: 28, current: false },
  { day: 'Sun', date: 29, current: false },
];

// --- SUB COMPONENTS ---
const RadialProgressChart = ({
  percent,
  totalDays,
  presentDays,
  absentDays,
}: {
  percent: number;
  totalDays: number;
  presentDays: number;
  absentDays: number;
}) => {
  const R = 60;
  const C = 2 * Math.PI * R;
  const arcLength = 0.85 * C;
  const arcOffset = C * 0.5 + C * 0.075;
  const strokeDashArray = `${arcLength} ${C - arcLength}`;
  const progressArc = (percent / 100) * arcLength;
  const progressOffset = arcLength - progressArc;

  return (
    <div className="flex w-full flex-col items-center mt-[20px]">
      <svg width="400" height="100" viewBox="0 0 120 80" className="-mt-12">
        {/* Background Arc */}
        <circle
          cx="70" cy="60" r={R}
          fill="none" stroke="#E5E7EB" strokeWidth="10"
          strokeDasharray={strokeDashArray} strokeDashoffset={arcOffset}
          strokeLinecap="round"
        />
        {/* Base Arc */}
        <circle
          cx="50" cy="60" r={R}
          fill="none" stroke="#9333ea" strokeWidth="10"
          strokeDasharray={strokeDashArray} strokeDashoffset={arcOffset}
          strokeLinecap="round"
        />
        {/* Progress Arc */}
        <circle
          cx="60" cy="60" r={R}
          fill="none" stroke="#F97316" strokeWidth="10"
          strokeDasharray={strokeDashArray} strokeDashoffset={arcOffset + progressOffset}
          strokeLinecap="round" className="transition-all duration-1000"
        />
        {/* Labels */}
        <text x="60" y="55" textAnchor="middle" className="text-3xl font-bold fill-gray-900">
          {percent}%
        </text>
        <text x="60" y="68" textAnchor="middle" className="text-xs font-medium fill-gray-500">
          PUNCTUALITY
        </text>
      </svg>

      {/* Legend */}
      <div className="w-full mt-2 space-y-2 text-sm">
        <p className="text-gray-600">
          <span className="w-2.5 h-2.5 inline-block rounded-full bg-purple-600 mr-2"></span>
          Total No of School Days - <span className="font-semibold">{totalDays}</span>
        </p>
        <p className="flex justify-between w-full">
          <span className="text-gray-600">
            <span className="w-2.5 h-2.5 inline-block rounded-full bg-yellow-500 mr-2"></span>
            Days Present - <span className="font-semibold text-gray-800">{presentDays}</span>
          </span>
          <span className="text-gray-600">
            <span className="w-2.5 h-2.5 inline-block rounded-full bg-red-500 mr-2"></span>
            Days Absent - <span className="font-semibold text-gray-800">{absentDays}</span>
          </span>
        </p>
      </div>
    </div>
  );
};

// --- CARDS ---
const TermsAttendanceCard = () => {
  const attendance = { percent: 70, totalDays: 153, presentDays: 128, absentDays: 25 };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-3 border border-[#CCCCCC]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800 flex items-center">
          <svg className="w-5 h-5 mr-2 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Terms Attendance
        </h2>
        <span className="flex items-center text-xs font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          Punctual
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-6">
        This is an average percentage of all the days you've been to school this term
      </p>
      <div className='pt-[10px]'>
        {/* <PunctualityGauge /> */}
        <PunctualityGauge possibleDays={100} presentDays={70} absentDays={30} />
        {/* <RadialProgressChart {...attendance} /> */}
      </div>
    </div>
  );
};

const ClassScheduleCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-3 border border-[#CCCCCC] mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Class Schedule
        </h2>
        <div className="flex space-x-2">
          <button className="text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-200 transition">Sept</button>
          <button className="text-sm font-semibold bg-orange-500 text-white px-3 py-1 rounded-lg shadow-md hover:bg-orange-600 transition">2024</button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
        <div className="flex space-x-2 overflow-x-auto whitespace-nowrap">
          {dates.map((item, index) => (
            <div key={index}
              className={`flex flex-col items-center p-2 rounded-lg cursor-pointer transition duration-150 flex-shrink-0 ${
                item.current ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="text-xs font-medium">{item.day}</span>
              <span className="font-semibold text-lg">{item.date}</span>
            </div>
          ))}
        </div>
        <div className="flex space-x-2 flex-shrink-0 ml-4">
          <button className="p-1 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-1 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {scheduleData.map((item, index) => (
          <div key={index} className={`pl-4 ${item.isToday ? 'border-l-4 border-purple-500' : 'border-l-4 border-transparent'}`}>
            <p className="text-sm font-medium text-gray-700 flex justify-between items-center">
              <span>{item.time}</span>
              <span className="text-gray-400">--- --- --- ---</span>
            </p>
            <p className="font-semibold text-gray-900 mt-1">{item.title}</p>
            <p className="text-xs text-gray-500">{item.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const AnnouncementsCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-2 border border-[#CCCCCC] mt-8">
      <div className="flex items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800 flex items-center">
          <svg className="w-5 h-5 mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464l-4.5 4.5m0 0l-4.5-4.5m4.5 4.5v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Announcements
        </h2>
      </div>

      <div
        className="relative h-32 w-full rounded-xl overflow-hidden shadow-md"
        style={{ backgroundImage: 'linear-gradient(135deg, #4A5568, #2D3748)', backgroundSize: 'cover' }}
      >
        <div className="absolute inset-0 p-4 flex flex-col justify-end">
          <span className="text-white text-xs font-medium bg-blue-500 px-2 py-0.5 rounded-full inline-block mb-2 self-start flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></span>
            Coming Soon!
          </span>
          <p className="text-white text-xl font-bold leading-tight">
            First Term Exams Starts on 18th November 2024
          </p>
        </div>
        <svg className="absolute top-0 right-0 w-1/3 h-full opacity-30" viewBox="0 0 100 100" fill="none">
          <circle cx="80" cy="20" r="10" fill="#3B82F6" />
          <rect x="50" y="50" width="40" height="40" rx="5" fill="#10B981" />
        </svg>
      </div>
    </div>
  );
};

// --- MAIN PANEL EXPORT ---
const RightPanel = () => {
  return (
    <div className="max-w-sm w-full space-y-4">
      <TermsAttendanceCard />
      <ClassScheduleCard />
      <AnnouncementsCard />
    </div>
  );
};

export default RightPanel;
