function Category({ name, allocated, spent }: any) {
  const percent = Math.round((spent / allocated) * 100);
  const remaining = allocated - spent;

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="font-semibold mb-4">{name}</h3>

      <div className="text-sm text-gray-600">
        <p className="flex justify-between">
          Allocated <span>${allocated}</span>
        </p>
        <p className="flex justify-between">
          Spent <span>${spent}</span>
        </p>
      </div>

      <div className="mt-3 text-xs text-gray-500 flex justify-between">
        <span>{percent}% used</span>
        <span>${remaining} left</span>
      </div>

      <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
        <div
          className="bg-black h-2 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export default Category;