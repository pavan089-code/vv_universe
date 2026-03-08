import aboutImage from "../assets/me1.jpeg";

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#000F26] text-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center bg-[#071B3A] p-12 rounded-2xl">
        {/* Image */}
        <div className="relative">
          <img
            src={aboutImage}
            alt="Vishnu Teja"
            className="rounded-xl w-full object-cover border border-[#1B3B6F] shadow-[0_0_40px_rgba(15,42,82,0.5)]"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">About Vishnu Teja</h2>

          <p className="text-[#B8C4D9] leading-relaxed">
            Vishnu Teja is a passionate photographer dedicated to capturing
            authentic emotions and timeless moments. From weddings to portraits,
            his work focuses on storytelling through elegant and natural
            imagery.
          </p>

          <p className="text-[#B8C4D9] leading-relaxed">
            With experience in event photography, traditional ceremonies, and
            creative model shoots, he combines artistic vision with technical
            expertise to deliver memorable photographs that clients cherish
            forever.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-6">
            <div>
              <h3 className="text-3xl font-bold text-gold">50+</h3>
              <p className="text-[#B8C4D9] text-sm">Events Covered</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gold">5+</h3>
              <p className="text-[#B8C4D9] text-sm">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gold">100+</h3>
              <p className="text-[#B8C4D9] text-sm">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
