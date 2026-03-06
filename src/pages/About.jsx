import aboutImage from "../assets/me1.jpeg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <div className="relative">
          <img
            src={aboutImage}
            alt="Vishnu Teja"
            className="rounded-xl w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">

          <h2 className="text-4xl md:text-5xl font-bold">
            About Vishnu Teja
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Vishnu Teja is a passionate photographer dedicated to capturing
            authentic emotions and timeless moments. From weddings to portraits,
            his work focuses on storytelling through elegant and natural imagery.
          </p>

          <p className="text-gray-400 leading-relaxed">
            With experience in event photography, traditional ceremonies, and
            creative model shoots, he combines artistic vision with technical
            expertise to deliver memorable photographs that clients cherish
            forever.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6">

            <div>
              <h3 className="text-3xl font-bold text-[#C6A75E]">50+</h3>
              <p className="text-gray-400 text-sm">Events Covered</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#C6A75E]">5+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#C6A75E]">100+</h3>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}