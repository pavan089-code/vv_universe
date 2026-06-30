import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function PortfolioLightbox({ photos, activeIndex, onClose, onChange }) {
  const [touchStart, setTouchStart] = useState(null);
  const isOpen = activeIndex !== null && photos.length > 0;
  const activePhoto = isOpen ? photos[activeIndex] : null;

  const actions = useMemo(
    () => ({
      next: () => onChange((activeIndex + 1) % photos.length),
      previous: () => onChange((activeIndex - 1 + photos.length) % photos.length),
    }),
    [activeIndex, onChange, photos.length]
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") actions.next();
      if (event.key === "ArrowLeft") actions.previous();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [actions, isOpen, onClose]);

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;
    const delta = event.changedTouches[0].clientX - touchStart;

    if (Math.abs(delta) > 45) {
      if (delta < 0) actions.next();
      else actions.previous();
    }

    setTouchStart(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          className="fixed inset-0 z-[80] bg-[#02050B]/92 p-3 text-white backdrop-blur-xl sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Portfolio image viewer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition hover:border-[#C6A46C] hover:text-[#C6A46C] focus:outline-none focus:ring-2 focus:ring-[#C6A46C]"
            aria-label="Close gallery"
          >
            <X size={22} aria-hidden="true" />
          </button>

          <div className="flex h-full flex-col">
            <div
              className="relative flex min-h-0 flex-1 items-center justify-center"
              onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
              onTouchEnd={handleTouchEnd}
            >
              <button
                type="button"
                onClick={actions.previous}
                className="absolute left-0 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md transition hover:border-[#C6A46C] hover:text-[#C6A46C] focus:outline-none focus:ring-2 focus:ring-[#C6A46C] sm:flex"
                aria-label="Previous image"
              >
                <ChevronLeft size={26} aria-hidden="true" />
              </button>

              <AnimatePresence mode="wait">
                <Motion.figure
                  key={activePhoto.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-full w-full max-w-6xl flex-col items-center justify-center"
                >
                  <img
                    src={activePhoto.src}
                    alt={activePhoto.title}
                    className="max-h-[72vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl shadow-black/60"
                    decoding="async"
                  />
                  <figcaption className="mt-4 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A46C]">
                      {activePhoto.category}
                    </p>
                    <h2 className="mt-1 text-xl font-semibold text-white">{activePhoto.title}</h2>
                    <p className="mt-2 text-sm text-[#A9B4C6]">
                      {activeIndex + 1} / {photos.length}
                    </p>
                  </figcaption>
                </Motion.figure>
              </AnimatePresence>

              <button
                type="button"
                onClick={actions.next}
                className="absolute right-0 z-20 hidden h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md transition hover:border-[#C6A46C] hover:text-[#C6A46C] focus:outline-none focus:ring-2 focus:ring-[#C6A46C] sm:flex"
                aria-label="Next image"
              >
                <ChevronRight size={26} aria-hidden="true" />
              </button>
            </div>

            <div className="mx-auto flex max-w-full gap-2 overflow-x-auto py-3">
              {photos.map((photo, index) => (
                <button
                  type="button"
                  key={photo.id}
                  onClick={() => onChange(index)}
                  className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl border transition focus:outline-none focus:ring-2 focus:ring-[#C6A46C] ${
                    index === activeIndex ? "border-[#C6A46C]" : "border-white/15 opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`View ${photo.title}`}
                >
                  <img src={photo.src} alt="" className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}
