import Card from './Card';
import Category from './Category';
import RecentExpenses from './RecentExpenses';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      
      {/* Top cards */}
      <div className="grid grid-cols-3 gap-6">
        <Card title="Total Income" amount="$8,450.00" change="+12.3%" positive />
        <Card title="Total Expenses" amount="$6,230.50" change="+8.1%" />
        <Card title="Remaining Budget" amount="$2,219.50" change="26.3%" positive />
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Budget Categories</h2>

        <div className="grid grid-cols-4 gap-6">
          <Category name="Food" allocated={800} spent={650} />
          <Category name="Rent" allocated={2500} spent={2500} />
          <Category name="Travel" allocated={600} spent={430} />
          <Category name="Others" allocated={1200} spent={890} />
        </div>
      </div>

      <RecentExpenses />
    </div>
  );
}