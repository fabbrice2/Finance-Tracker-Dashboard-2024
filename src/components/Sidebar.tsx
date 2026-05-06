import React from 'react';

export default function Sidebar() {
  const menu = [
    "Dashboard",
    "Budgets",
    "Expenses",
    "Insights",
    "Settings"
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <h2 className="text-lg font-bold mb-6">Finance Tracker</h2>

      <nav className="flex flex-col gap-2">
        {menu.map((item, index) => (
          <button
            key={index}
            className={`text-left px-4 py-2 rounded-lg ${
              index === 0
                ? "bg-teal-100 text-teal-700 font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}