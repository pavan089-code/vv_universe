import { useEffect, useState } from "react";

const AdminPortfolio = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState("All");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const fetchImages = async () => {
    const res = await fetch(`${API_URL}/api/portfolio`);
    const data = await res.json();

    setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };
  const handleUpload = async () => {
    const formData = new FormData();

    formData.append("image", file);
    formData.append("category", category);

    await fetch(`${API_URL}/api/portfolio`, {
      method: "POST",
      body: formData,
    });

    fetchImages();
  };

  const deleteImage = async (id) => {
    await fetch(`${API_URL}/api/portfolio/${id}`, {
      method: "DELETE",
    });

    fetchImages();
  };

  const filteredImages =
    category === "All"
      ? images
      : images.filter((img) => img.category === category);
  return (
    <div className="p-0 sm:p-4 lg:p-6">
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">Portfolio Manager</h1>

      {/* Upload Section */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
      <input type="file" accept="image/*" onChange={handleImageChange} />

      <button
        onClick={handleUpload}
        className="min-h-11 rounded bg-blue-600 px-4 py-2"
      >
        Upload
      </button>
      </div>

      {/* Category Filters */}
      <div className="mb-6 flex flex-wrap gap-4">
        <button
          onClick={() => setCategory("All")}
          className="bg-gray-800 px-4 py-2 rounded"
        >
          All
        </button>

        <button
          onClick={() => setCategory("Wedding")}
          className={`px-4 py-2 rounded ${
            category === "Wedding" ? "bg-yellow-500" : "bg-gray-800"
          }`}
        >
          Wedding
        </button>

        <button
          onClick={() => setCategory("PreWedding")}
          className="bg-gray-800 px-4 py-2 rounded"
        >
          PreWedding
        </button>

        <button
          onClick={() => setCategory("Events")}
          className="bg-gray-800 px-4 py-2 rounded"
        >
          Events
        </button>
      </div>
      {preview && (
        <div className="mt-4">
          <p className="text-sm text-gray-400 mb-2">Preview</p>

          <img
            src={preview}
            alt="preview"
            className="w-40 rounded-lg border border-gray-700"
          />
        </div>
      )}
      {/* Gallery */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredImages.map((img) => (
          <div key={img._id} className="bg-gray-900 rounded-xl p-4 shadow">
            <img
              src={img.imageUrl}
              alt="portfolio"
              className="mb-3 aspect-square w-full rounded object-cover"
            />

            <button
              onClick={() => deleteImage(img._id)}
              className="bg-red-600 px-3 py-1 rounded w-full"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPortfolio;
