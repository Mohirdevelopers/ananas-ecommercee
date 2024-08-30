const categories = [
  {
    label: "CHEGIRMALAR",
  },
  {
    label: "YANGILIKLAR",
  },
  {
    label: "APPLE IPHONE",
  },
  {
    label: "APPLE IPAD",
  },
  {
    label: "APPLE AIRPODS",
  },
  {
    label: "AKSESSUARLAR",
  },
];

const Categories = () => {
  return (
    <div className="bg-yellow-400">
      <div className="container-xl px-4 py-2 sm:py-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
          {categories.map((category) => (
            <div
              key={category.label}
              className="text-center text-sm sm:text-base font-medium hover:bg-yellow-300 py-2 px-1 rounded transition-colors"
            >
              {category.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
