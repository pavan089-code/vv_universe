export default function Services() {

  const services = [
    {
      title: "Photography",
      desc: "Professional photography for weddings, events, portraits, and creative visual storytelling.",
      icon: "📸",
      features: [
        "Wedding Stories",
        "Event Coverage",
        "Drone Photography",
        "Creative Visual Content"
      ]
    },
    {
      title: "Cinematic Films",
      desc: "High-quality cinematic films crafted for weddings, brands, and storytelling projects.",
      icon: "🎬",
      features: [
        "Music Videos",
        "Short Films",
        "Corporate Films",
        "Documentaries"
      ]
    },
    {
      title: "Creative Production",
      desc: "Complete production workflow from idea to final delivery with professional editing.",
      icon: "🚀",
      features: [
        "Social Media Reels",
        "Content Creation",
        "Creative Direction",
        "Editing & Color Grading"
      ]
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#000F26] text-[#F5F7FA]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-12">

          {services.map((service, i) => (

            <div
              key={i}
              className="p-10 rounded-2xl bg-[#071B3A] border border-[#1B3B6F] hover:border-[#C6A75E] transition-all duration-300 hover:-translate-y-2"
            >

              <div className="text-4xl mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-[#B8C4D9] mb-6">
                {service.desc}
              </p>

              <ul className="space-y-2 text-sm text-[#B8C4D9]">

                {service.features.map((item, index) => (
                  <li key={index} className="flex gap-2 items-center">

                    <span className="text-[#C6A75E]">•</span>

                    {item}

                  </li>
                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}