const features = [
  {
    title: "Interactive Learning",
    desc: "Engage with dynamic content and real-time feedback",
  },
  {
    title: "Progress Tracking",
    desc: "Monitor your journey with detailed analytics",
  },
  { title: "Expert Support", desc: "Get help from industry professionals" },
];

export default function Features() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {features.map((f, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-xl text-gray-800 shadow-sm border hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold mb-4">{f.title}</h3>
          <p className="text-gray-600">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
