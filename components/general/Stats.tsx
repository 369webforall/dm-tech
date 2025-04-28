const stats = [
  {
    label: "Active Learners",
    value: "10,000+",
    note: "Growing daily",
    color: "blue",
  },
  {
    label: "Expert Courses",
    value: "500+",
    note: "Across 20+ categories",
    color: "purple",
  },
  {
    label: "Success Rate",
    value: "95%",
    note: "Student satisfaction",
    color: "indigo",
  },
  {
    label: "Expert Support",
    value: "24/7",
    note: "Always available",
    color: "blue",
  },
];

export default function Stats() {
  return (
    <section className="bg-white rounded-2xl p-8 md:p-12 mb-12 shadow-sm border">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Impact in Numbers
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`text-center bg-gradient-to-br from-${stat.color}-50 to-white p-6 rounded-xl transition-transform transform hover:scale-110`}
          >
            <div className="text-4xl font-bold text-gray-800 mb-2">
              {stat.value}
            </div>
            <p className="text-gray-600">{stat.label}</p>
            <div className="mt-2 text-sm text-gray-500">{stat.note}</div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-xl text-gray-700 mb-6">
          Join our growing community of successful learners
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 rounded-lg text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200">
          Start Learning Today
        </button>
      </div>
    </section>
  );
}
