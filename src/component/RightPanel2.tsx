'use client'

import { useState } from "react";

export function RightPanel2() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { emoji: "🏠", label: "Home" },
    { emoji: "📚", label: "Courses" },
    { emoji: "👨‍🏫", label: "Teachers" },
    { emoji: "📝", label: "Assignments" },
    { emoji: "⚙️", label: "Settings" },
  ];

  return (
    <div>
      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed top-3 left-3 text-2xl z-50  "
      >
        🍔
      </button>

      {/* SIDEBAR */}
      <aside
        className={`
          bg-white border-r shadow-sm
          fixed md:static h-full z-30
          flex flex-col items-center py-6
          transition-all duration-300
          ${mobileOpen ? "w-44" : "w-16"}
        `}
      >
        {/* Mobile (sm) → Expandable */}
        <div className="flex  flex-col md:hidden">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-4 py-4 w-full hover:bg-gray-100 cursor-pointer"
            >
              <span className="text-xl">{item.emoji}</span>
              {mobileOpen && (
                <span className="text-gray-700 font-medium">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
