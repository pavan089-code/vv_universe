import { motion as Motion } from "framer-motion";

import portrait from "../../assets/me1.jpeg";

export default function BehindTheLens() {
  return (
    <section className="bg-[#0D1728] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <Motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[20px] border border-white/10 shadow-2xl shadow-black/30"
        >
          <img
            src={portrait}
            alt="VV Productions photographer"
            loading="lazy"
            decoding="async"
            sizes="(max-width: 768px) 100vw, 45vw"
            className="aspect-[4/5] h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040B17]/70 to-transparent" />
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C6A46C]">
            Behind The Lens
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
            Behind Every Frame
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#A9B4C6]">
            VV Productions approaches every shoot like a film still waiting to happen. We look for the quiet glance, the ceremonial detail, the movement between poses, and the light that makes a memory feel alive again. The result is photography with polish, feeling, and a story that belongs only to you.
          </p>
          <p className="mt-8 font-serif text-3xl italic text-[#C6A46C]">VV Productions</p>
        </Motion.div>
      </div>
    </section>
  );
}
