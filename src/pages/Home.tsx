import StatCard from '../components/StatCard';
import CategoryCard from '../components/CategoryCard';

export default function Home() {
  return (
    <div className="p-8">
      {/* Statistiques */}
      <div className="grid grid-cols-3 gap-6 mb-10">
        <StatCard title="Total Income" amount="$8,450.00" percentage="+12.3%" color="teal" icon="↗" />
        <StatCard title="Total Expenses" amount="$6,230.50" percentage="+8.1%" color="red" icon="↘" />
        <StatCard title="Remaining Budget" amount="$2,219.50" percentage="26.3%" color="teal" icon="💰" />
      </div>

      {/* Catégories */}
      <h2 className="text-xl font-bold mb-6">Budget Categories</h2>
      <div className="grid grid-cols-2 gap-6">
        <CategoryCard title="Food" allocated="800" spent="650" iconColor="bg-orange-500" icon="🍴" />
        <CategoryCard title="Rent" allocated="2500" spent="2500" iconColor="bg-blue-600" icon="🏠" />
      </div>
    </div>
  );
}