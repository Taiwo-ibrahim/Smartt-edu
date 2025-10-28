import React from "react";

interface PunctualityGaugeProps {
  possibleDays: number;
  presentDays: number;
  absentDays: number;
}

const PunctualityGauge: React.FC<PunctualityGaugeProps> = ({
  possibleDays,
  presentDays,
  absentDays,
}) => {
  const radius = 150;
  const circumference = Math.PI * radius;
  const percent = Math.round((presentDays / possibleDays) * 100);

  // helper to get arc stroke offset
  const getOffset = (value: number) =>
    circumference - (value / possibleDays) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        viewBox="0 0 340 240"
        className="w-[250px] h-[150px] rotate-180 m-x-auto flex gap-[10px]"
      >
        {/* purple arc = total days */}
        <circle
          cx="180"
          cy="80"
          r={radius}
          fill="none"
          stroke="#6A00FF"
          strokeWidth="20"
          strokeDasharray={circumference}
          strokeDashoffset="0"
          strokeLinecap="round"
          
        />

        {/* yellow arc = present days */}
        <circle
          cx="180"
          cy="80"
          r={radius - 25}
          fill="none"
          stroke="#FFA726"
          strokeWidth="20"
          strokeDasharray={circumference}
          strokeDashoffset={getOffset(presentDays)}
          strokeLinecap="round"
        />

        {/* red arc = absent days */}
        <circle
          cx="180"
          cy="80"
          r={radius - 50}
          fill="none"
          stroke="#EF4444"
          strokeWidth="20"
          strokeDasharray={circumference}
          strokeDashoffset={getOffset(absentDays)}
          strokeLinecap="round"
        />
      </svg>

      {/* Center percentage */}
      <div className="-mt-16 text-center">
        <h2 className="text-green-700 text-4xl font-bold">{percent}%</h2>
        <p className="text-gray-900 font-semibold text-lg mt-1">PUNCTUALITY</p>
      </div>

      <div className="w-full mt-2 space-y-2 text-sm">
        <p className="text-gray-600">
          <span className="w-2.5 h-2.5 inline-block rounded-full bg-purple-600 mr-2"></span>
          Total No of School Days - <span className="font-semibold">153</span>
        </p>
        <p className="flex justify-between w-full">
          <span className="text-gray-600">
            <span className="w-2.5 h-2.5 inline-block rounded-full bg-yellow-500 mr-2"></span>
            Days Present - <span className="font-semibold text-gray-800">128</span>
          </span>
          <span className="text-gray-600">
            <span className="w-2.5 h-2.5 inline-block rounded-full bg-red-500 mr-2"></span>
            Days Absent - <span className="font-semibold text-gray-800">25</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default PunctualityGauge;
