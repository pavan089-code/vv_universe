export default function Blog() {

  const blogs = [
    {
      title: "Best Locations for Pre-Wedding Shoots",
      desc: "Discover beautiful locations perfect for cinematic pre-wedding photography.",
    },
    {
      title: "5 Tips for Perfect Wedding Photos",
      desc: "Simple tips that help couples get natural and memorable wedding photographs.",
    },
    {
      title: "How Businesses Can Use Photography for Marketing",
      desc: "Professional photos can transform a brand’s online presence and social media.",
    },
  ];

  return (
    <section id="blog" className="py-24 bg-[#0f0f0f] text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Blog & Insights
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {blogs.map((blog, i) => (

            <div
              key={i}
              className="p-8 border border-white/10 rounded-xl hover:border-[#C6A75E] transition duration-300"
            >

              <h3 className="text-xl font-semibold mb-4">
                {blog.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {blog.desc}
              </p>

              <button className="text-[#C6A75E] font-medium">
                Read More →
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}