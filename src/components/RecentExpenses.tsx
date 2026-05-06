import React from 'react';

const expenses = [
  {
    date: "Jan 15",
    category: "Food",
    amount: "$45.50",
    note: "Lunch at downtown café"
  },
  {
    date: "Jan 14",
    category: "Travel",
    amount: "$120.00",
    note: "Gas and parking"
  },
  {
    date: "Jan 13",
    category: "Food",
    amount: "$78.25",
    note: "Grocery shopping"
  },
  {
    date: "Jan 12",
    category: "Others",
    amount: "$25.99",
    note: "Monthly subscription"
  },
  {
    date: "Jan 11",
    category: "Food",
    amount: "$32.75",
    note: "Coffee and breakfast"
  }
];

export default function RecentExpenses() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h2 className="text-xl font-semibold mb-6">Recent Expenses</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 text-sm border-b">
            <th className="pb-3">Date</th>
            <th className="pb-3">Category</th>
            <th className="pb-3">Amount</th>
            <th className="pb-3">Notes</th>
            <th className="pb-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((exp, i) => (
            <tr key={i} className="border-b last:border-none">
              <td className="py-4">{exp.date}</td>

              <td>
                <span className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                  {exp.category}
                </span>
              </td>

              <td className="font-medium">{exp.amount}</td>

              <td className="text-gray-600">{exp.note}</td>

              <td className="text-right">•••</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}