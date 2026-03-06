import img1 from "../assets/model/image1.jpg";
import img2 from "../assets/model/image2.jpeg";
import img3 from "../assets/model/image3.jpg";
import img4 from "../assets/model/image5.jpg";

export default function Portfolio() {

  const photos = [img1, img2, img3, img4];

  return (
    <section id="portfolio" className="py-24 bg-black text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Portfolio
        </h2>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">

          {photos.map((photo, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl group cursor-pointer"
            >

              <img
                src={photo}
                alt="portfolio"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}