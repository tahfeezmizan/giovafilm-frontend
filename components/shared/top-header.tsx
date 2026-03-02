import React from "react";

export default function TopHeader() {
  return (
    <div>
      <header className="px-5 pt-6 pb-4 sticky top-0  z-20">
        <div className="flex items-center rounded-full px-4 py-2 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H20M4 6H20M4 18H12"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="text-gray-400 text-sm font-medium">
              Search digital maps, cities...
            </span>
          </div>
          <div
            className="w-10 h-10 rounded-full border-2 border-[#FFC107] p-0.5 overflow-hidden cursor-pointer"
            // onClick={() => onNavigate("login")}
          >
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
              alt="Profile"
              className="w-full h-full rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
