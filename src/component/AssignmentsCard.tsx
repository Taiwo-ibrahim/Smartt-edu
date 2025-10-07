import React from "react";

// Mock data for assignments
const assignmentData = [
  {
    id: 1,
    subject: "Mathematics",
    title: "Differential Calculus",
    date: "23/09/24, 10:00am",
    progress: 90,
    completed: 8,
    total: 9,
  },
  {
    id: 2,
    subject: "English",
    title: "Grammar & Structure",
    date: "23/09/24, 10:00am",
    progress: 0,
    completed: 0,
    total: 12,
  },
  {
    id: 3,
    subject: "Chemistry",
    title: "Volumetric Analysis",
    date: "23/09/24, 10:00am",
    progress: 65,
    completed: 11,
    total: 16,
  },
];

// 🔷 Subject Icon Component
const SubjectIcon = ({ subject }: { subject: string }) => {
  let colorClass = "";
  let iconPath = "";

  switch (subject) {
    case "Mathematics":
      colorClass = "bg-orange-500/10 text-orange-500";
      iconPath = "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5";
      break;
    case "English":
      colorClass = "bg-pink-500/10 text-pink-500";
      iconPath =
        "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10v20H6.5a2.5 2.5 0 0 1-2.5-2.5zM14 3h4.5A2.5 2.5 0 0 1 21 5.5V10H14V3z";
      break;
    case "Chemistry":
    default:
      colorClass = "bg-blue-500/10 text-blue-500";
      iconPath =
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z";
      break;
  }

  return (
    <div className={`p-3 rounded-xl ${colorClass}`}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={iconPath} />
      </svg>
    </div>
  );
};

// 🔶 Assignment Item Component
const AssignmentItem = ({ assignment }: { assignment: any }) => {
  const progressBarWidth = `${assignment.progress}%`;

  return (
    <div className="flex flex-col md:flex-row md:items-center py-4 border-t border-gray-100 last:border-b-0">
      {/* Icon & Subject Info */}
      <div className="flex items-center w-full md:w-1/3 mb-3 md:mb-0">
        <SubjectIcon subject={assignment.subject} />
        <div className="ml-4">
          <p className="font-500 text-[14px]/[22px] text-gray-800">{assignment.title}</p>
          <p className="font-400 text-[14px]/[22px] text-gray-500">{assignment.subject}</p>
        </div>
      </div>

      {/* Submission Date */}
      <div className="hidden md:block w-40 text-sm text-gray-600">
        Submission Date
        <p className="font-medium text-gray-800">{assignment.date}</p>
      </div>

      {/* Progress Bar */}
      <div className="flex flex-col flex-grow mx-4">
        <div className="w-full bg-[#FBA43C29] rounded-full h-[4px]  overflow-hidden">
          <div
            className="h-full rounded-full bg-[#FBA43C] transition-all duration-500"
            style={{ width: progressBarWidth }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span className="text-gray-700 font-medium">
            {assignment.progress}%
          </span>
          <span>
            {assignment.completed}/{assignment.total}
          </span>
        </div>
      </div>

      {/* View Button */}
      <button className="mt-3 md:mt-0 md:ml-4 px-4 py-2 bg-[#FCB485] text-[#000000A3] border border-[#FB914C] font-medium rounded-lg transition duration-150 shadow-md">
        View
      </button>
    </div>
  );
};

// 🔸 Main Assignment Card
const AssignmentsCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      {/* Header */}
      <div className="flex items-center mb-4">
        <h2 className="text-[16px]/[24px] font-500 text-[#101828] flex items-center">
          <svg
            className="w-6 h-6 mr-2 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          My Assignments
        </h2>

        {/* Badge */}
        <span className="ml-4 flex items-center text-sm font-[500] text-[#F04438] bg-[#F0443814] px-3 py-1 rounded-full">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Due Soon
        </span>
      </div>

      {/* Assignment List */}
      <div className="divide-y divide-gray-100">
        {assignmentData.map((assignment) => (
          <AssignmentItem key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};

export default AssignmentsCard;
