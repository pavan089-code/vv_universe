import { useState, useEffect } from "react";

export default function Reviews() {
  const reviews = [
    {
      name: "Rahul Sharma",
      text: "Vishnu Teja captured our wedding beautifully. The photos felt natural and emotional.",
    },
    {
      name: "Anjali Verma",
      text: "Very professional and creative. The pre-wedding shoot was amazing.",
    },
    {
      name: "Kiran Reddy",
      text: "Highly recommend VV Productions. Every moment was captured perfectly.",
    },
    {
      name: "Sneha Patel",
      text: "The team was incredibly professional. The results were amazing.",
    },
    {
      name: "Arjun Mehta",
      text: "Amazing cinematic video and photography. The storytelling was outstanding.",
    },
    {
      name: "Priya Nair",
      text: "The photos looked magical. Vishnu Teja has a great eye for emotions.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [
    reviews[index],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length],
  ];

  return (
    <section id="reviews" className="py-28 bg-[#000F26] text-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Client Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {visibleReviews.map((review, i) => (
            <div
              key={i}
              className="p-10 bg-[#071B3A] border border-[#1B3B6F] rounded-2xl hover:border-[#C6A75E] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-[#C6A75E] mb-4 text-lg">★★★★★</div>

              <p className="text-[#B8C4D9] mb-6 leading-relaxed">
                "{review.text}"
              </p>

              <h4 className="font-semibold text-[#F5F7FA]">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
