import img1 from "../assets/model/image1.jpg";
import img2 from "../assets/model/image2.jpeg";
import img3 from "../assets/model/image3.jpg";

export default function Blog() {

  const blogs = [
    {
      title: "Best Locations for Pre-Wedding Shoots",
      desc: "Discover beautiful locations perfect for cinematic pre-wedding photography.",
      img: img1,
    },
    {
      title: "5 Tips for Perfect Wedding Photos",
      desc: "Simple tips that help couples get natural and memorable wedding photographs.",
      img: img2,
    },
    {
      title: "How Businesses Can Use Photography for Marketing",
      desc: "Professional photos can transform a brand’s online presence and social media.",
      img: img3,
    },
  ];

  return (
    <section id="blog" className="py-28 bg-[#000F26] text-[#F5F7FA]">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Blog & Insights
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {blogs.map((blog, i) => (

            <div
              key={i}
              className="bg-[#071B3A] border border-[#1B3B6F] rounded-2xl overflow-hidden hover:border-[#C6A75E] hover:-translate-y-2 transition-all duration-300"
            >

              {/* Blog Image */}
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />

              {/* Blog Content */}
              <div className="p-8">

                <h3 className="text-xl font-semibold mb-4">
                  {blog.title}
                </h3>

                <p className="text-[#B8C4D9] mb-6">
                  {blog.desc}
                </p>

                <button className="text-[#C6A75E] font-medium hover:underline">
                  Read More →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}