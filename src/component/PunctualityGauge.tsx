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
  const radius = 100;
  const circumference = Math.PI * radius;
  const percent = Math.round((presentDays / possibleDays) * 100);

  // helper to get arc stroke offset
  const getOffset = (value: number) =>
    circumference - (value / possibleDays) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg
        viewBox="0 0 240 140"
        className="w-[250px] h-[150px] rotate-180"
      >
        {/* purple arc = total days */}
        <circle
          cx="120"
          cy="120"
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
          cx="120"
          cy="120"
          r={radius - 20}
          fill="none"
          stroke="#FFA726"
          strokeWidth="20"
          strokeDasharray={circumference}
          strokeDashoffset={getOffset(presentDays)}
          strokeLinecap="round"
        />

        {/* red arc = absent days */}
        <circle
          cx="120"
          cy="120"
          r={radius - 40}
          fill="none"
          stroke="#EF4444"
          strokeWidth="20"
          strokeDasharray={circumference}
          strokeDashoffset={getOffset(absentDays)}
          strokeLinecap="round"
        />
      </svg>

      {/* Center percentage */}
      <div className="-mt-10 text-center">
        <h2 className="text-green-700 text-4xl font-bold">{percent}%</h2>
        <p className="text-gray-900 font-semibold text-lg mt-1">PUNCTUALITY</p>
      </div>
    </div>
  );
};

export default PunctualityGauge;
