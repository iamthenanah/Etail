import { pricing } from "@/constants/pricing";
export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-8 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {pricing.map((plan, idx) => (
          <div key={idx} className="border rounded-xl p-6">
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <p className="text-4xl font-extrabold mb-4">{plan.price}</p>
            <ul className="text-left text-gray-600 space-y-2 mb-6">
              {plan.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
            <button className="bg-black text-white px-4 py-2 rounded-full font-semibold">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
