import { testimonials } from "@/constants/testimonials";
export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-8 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">What our users say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border shadow-sm">
            <p className="text-gray-700 mb-4">“{t.content}”</p>
            <div className="font-bold text-black">{t.name}</div>
            <div className="text-sm text-gray-500">{t.content}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
