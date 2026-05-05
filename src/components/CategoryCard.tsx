export default function CategoryCard({ title, allocated, spent, iconColor, icon }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg">{title}</h3>
        <div className={`p-2 rounded-lg ${iconColor} text-white`}>{icon}</div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between text-gray-600">
          <span>Allocated</span>
          <span className="font-medium text-gray-900">${allocated}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Spent</span>
          <span className="font-medium text-gray-900">${spent}</span>
        </div>
      </div>
    </div>
  );
}