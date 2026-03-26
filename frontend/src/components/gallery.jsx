import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("All");

  const fetchImages = async () => {
    const res = await fetch("http://localhost:5000/api/portfolio");
    const data = await res.json();
    setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const filteredImages =
    category === "All"
      ? images
      : images.filter((img) => img.category === category);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="p-10">

      <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-10">
        {["All", "Wedding", "PreWedding", "Events"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded ${
              category === cat ? "bg-yellow-500" : "bg-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Gallery */}
      <PhotoProvider>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-6"
          columnClassName="space-y-6"
        >
          {filteredImages.map((img) => (
            <PhotoView key={img._id} src={img.imageUrl}>
              <img
                src={img.imageUrl}
                alt="portfolio"
                className="rounded-xl cursor-pointer hover:scale-105 transition duration-300"
              />
            </PhotoView>
          ))}
        </Masonry>
      </PhotoProvider>

    </div>
  );
};

export default Gallery;