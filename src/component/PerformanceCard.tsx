import React from "react";

const performanceData = [
  { year: "2021/2022", current: 35, lastTerm: 88, lastTwo: 62, isCurrent: false },
  { year: "2022/2023", current: 33, lastTerm: 90, lastTwo: 60, isCurrent: false },
  { year: "2023/2024", current: 34, lastTerm: 89, lastTwo: 62, isCurrent: false },
  { year: "2024/2025", current: 77, lastTerm: 55, lastTwo: 95, isCurrent: true },
];

const GrowthCurve = () => {
  const linePath = "M0 50 Q 25 20, 50 35 T 100 20";
  return (
    <div className="flex flex-col gap-4 p-4 border-l border-gray-100 md:w-1/3 lg:w-1/4">
      <h3 className="text-[10px]/[14px]  font-[500] text-[#344054]">
        Your growth curve over the last 3 terms
      </h3>
      <div className="relative h-24 w-full">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <line x1="0" y1="50" x2="100" y2="50" stroke="#E5E7EB" strokeDasharray="2 2" strokeWidth="0.5" />
          <path d={linePath} fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
          <circle cx="95" cy="25" r="3" fill="#10B981" />
        </svg>
        <div className="absolute bottom-2 right-2 flex items-center text-sm font-bold text-green-600">
          96%
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col space-y-2 text-sm">
        <LegendItem color="bg-purple-600" text="Current term average grade" />
        <LegendItem color="bg-orange-500" text="Last term's average grade" />
        <LegendItem color="bg-blue-500" text="Last two term's average grade" />
      </div>
    </div>
  );
};

const LegendItem = ({ color, text }: { color: string; text: string }) => (
  <div className="flex gap-[4px] items-flex-start">
    <div className={`w-[10px] h-[8px] rounded-[2px] ${color} `}></div>
    <span className="text-[#202020D6] text-[12px]/[18px] font-[400]">{text}</span>
  </div>
);

const PerformanceCard = () => {
  const MAX_GRADE = 100;
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      <h2 className="text-[16px]/[24px] font-[500] text-gray-800 mb-6">Current Term Performance</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 lg:w-3/4 flex flex-col">
          <div className="flex justify-between items-end h-72">
            <div className="w-10 flex flex-col justify-between h-full text-xs text-gray-500 pt-1">
              <span>Average Grade</span>
              <span>100%</span>
              <span>80%</span>
              <span>60%</span>
              <span>40%</span>
              <span>20%</span>
              <span>0%</span>
            </div>
            <div className="flex flex-1 justify-around h-full border-b border-l rounded-[8px] border-[#CCCCCC] pl-4">
              {performanceData.map((data, index) => (
                <div key={index} className="flex flex-col items-center justify-end w-1/5 h-full relative">
                  {data.isCurrent && (
                    <>
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#792E0D] text-xs font-semibold px-2 py-0.5 rounded-md text-[#F1F1F1] text-[10px]/[18px] shadow-md whitespace-nowrap">
                        You're Here
                      </div>
                      <div className="absolute top-0 bottom-0 left-0 right-0 border-2 border-dashed border-green-400 rounded-lg -mx-1 -mb-1 bg-[#3BAD2614]"></div>
                    </>
                  )}
                  <div className="flex justify-center h-full items-end gap-1.5 w-full z-10">
                    <div className="w-4 bg-purple-600 rounded-t-[4px]" style={{ height: `${(data.current / MAX_GRADE) * 100}%` }}></div>
                    <div className="w-4 bg-orange-500 rounded-t-[4px]" style={{ height: `${(data.lastTerm / MAX_GRADE) * 100}%` }}></div>
                    <div className="w-4 bg-blue-500 rounded-t-[4px]" style={{ height: `${(data.lastTwo / MAX_GRADE) * 100}%` }}></div>
                  </div>
                  <span className="text-xs text-gray-600 mt-2 whitespace-nowrap">{data.year}</span>
                </div>
              ))}
            </div>
          </div>
          <span className="text-sm text-center text-gray-500 mt-2">Session/Year</span>
        </div>
        <GrowthCurve />
      </div>
    </div>
  );
};

export default PerformanceCard;
