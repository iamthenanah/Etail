import { features } from "@/constants/features";
export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-8 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Features</h2>
        <p className="text-gray-600 mt-2">
          Everything you need to grow your business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border rounded-xl text-left">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
