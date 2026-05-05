export default function StatCard({ title, amount, percentage, color, icon }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-600">{title}</h3>
        <div className={`p-2 rounded-lg bg-${color}-50 text-${color}-600`}>
          {icon}
        </div>
      </div>
      <p className="text-3xl font-bold text-gray-900">{amount}</p>
      <p className={`text-sm ${color === 'red' ? 'text-red-500' : 'text-teal-500'}`}>
        {percentage} from last month
      </p>
    </div>
  );
}