export default function Services() {

  const services = [
    {
      title: "Wedding Photography",
      desc: "Capturing beautiful and emotional wedding moments with cinematic storytelling.",
      icon: "📸"
    },
    {
      title: "Pre-Wedding Shoots",
      desc: "Creative pre-wedding shoots that tell your love story in a unique way.",
      icon: "💍"
    },
    {
      title: "Event Photography",
      desc: "Professional coverage for birthdays, corporate events, and celebrations.",
      icon: "🎉"
    },
    {
      title: "Model / Portrait Shoots",
      desc: "Professional portrait and model photography for portfolios and brands.",
      icon: "🧑‍🎤"
    },
    {
      title: "Social Media Marketing",
      desc: "Helping businesses grow with strategic content and social media management.",
      icon: "📱"
    },
    {
      title: "Website Development",
      desc: "Modern websites to help businesses establish a strong digital presence.",
      icon: "💻"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0f0f0f] text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, i) => (

            <div
              key={i}
              className="p-8 rounded-xl border border-white/10 hover:border-[#C6A75E] transition duration-300"
            >

              <div className="text-3xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}