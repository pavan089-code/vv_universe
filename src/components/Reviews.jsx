export default function Reviews() {

  const reviews = [
    {
      name: "Rahul Sharma",
      text: "Vishnu Teja captured our wedding beautifully. The photos felt natural and emotional, and we couldn't have asked for a better photographer.",
    },
    {
      name: "Anjali Verma",
      text: "Very professional and creative. The pre-wedding shoot was amazing and the pictures turned out stunning.",
    },
    {
      name: "Kiran Reddy",
      text: "Highly recommend VV Productions. The entire event was covered perfectly and the memories were captured beautifully.",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-[#0f0f0f] text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Client Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, i) => (

            <div
              key={i}
              className="p-8 rounded-xl border border-white/10 hover:border-[#C6A75E] transition duration-300"
            >

              <p className="text-gray-300 mb-6">
                "{review.text}"
              </p>

              <h4 className="font-semibold text-[#C6A75E]">
                {review.name}
              </h4>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}