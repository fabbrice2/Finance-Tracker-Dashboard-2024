// src/pages/Home.tsx
import StatCard from '../components/StatCard';
// import CategoryCard from '../components/CategoryCard';

function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Income" amount="$8,450.00" trend="+12.3%" />
        {/* Ajoutez vos autres StatCards ici */}
      </div>
      
      <h2 className="text-xl font-bold mt-8 mb-4">Budget Categories</h2>
      {/* Grille des catégories ici */}
    </div>
  )
}

export default Home;