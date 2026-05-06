function Card({ title, amount, change, positive }: any) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <p className="text-gray-500">{title}</p>

      <h2 className="text-2xl font-bold mt-2">{amount}</h2>

      <p className={`mt-2 text-sm ${positive ? "text-green-600" : "text-red-500"}`}>
        {change} from last month
      </p>
    </div>
  );
}

export default Card;