const testimonials = [
  {
    name: "Alex Johnson",
    text: "This LMS has transformed the way I learn.",
    color: "blue",
  },
  {
    name: "Maria Gonzalez",
    text: "A seamless experience with great features.",
    color: "purple",
  },
  {
    name: "Priya Sharma",
    text: "The best platform for learning and growth.",
    color: "indigo",
  },
  {
    name: "John Doe",
    text: "A game-changer in online education.",
    color: "blue",
  },
  {
    name: "Emily Davis",
    text: "Tracking progress is so easy!",
    color: "purple",
  },
  { name: "Carlos Martinez", text: "Amazing support team!", color: "indigo" },
];

export default function Testimonials() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        What Our Learners Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br from-${t.color}-50 to-white p-4 rounded-lg shadow-md hover:shadow-lg transform transition-transform hover:scale-105`}
          >
            <p className="italic text-gray-700">&#39;{t.text}&#39;</p>
            <p className={`text-right font-semibold mt-2 text-${t.color}-600`}>
              - {t.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
