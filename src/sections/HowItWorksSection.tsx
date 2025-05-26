export default function HowItWorksSection() {
  return (
    <section className="py-20 px-8 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">How it works</h2>
      <div className="flex flex-col md:flex-row justify-center gap-12">
        {["Sign up", "Customize", "Launch"].map((step, idx) => (
          <div key={idx} className="flex flex-col items-center max-w-sm">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center rounded-full text-xl font-bold mb-4">
              {idx + 1}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step}</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
