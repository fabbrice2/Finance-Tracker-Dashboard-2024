import React from 'react';

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 border-b border-gray-200">
            <h1 className="text-xl font-semibold text-gray-800">Finance Tracker</h1>

            <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">John Doe</span>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </div>
            </div>
        </header>
    );
}