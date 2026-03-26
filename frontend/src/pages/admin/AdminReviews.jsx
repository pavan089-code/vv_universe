import { useEffect, useState } from "react";

const AdminReviews = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const res = await fetch(`${API_URL}/api/reviews/all`);
    const data = await res.json();

    setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const approveReview = async (id) => {
    await fetch(`${API_URL}/api/reviews/${id}`, {
      method: "PATCH",
    });

    fetchReviews();
  };

  const deleteReview = async (id) => {
    await fetch(`${API_URL}/api/reviews/${id}`, {
      method: "DELETE",
    });

    fetchReviews();
  };

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Manage Reviews
      </h1>

      {reviews.map((review) => (
        <div
          key={review._id}
          className="bg-gray-900 p-4 rounded mb-4"
        >

          <p>{review.message}</p>

          <h4 className="font-bold">{review.name}</h4>

          <div className="flex gap-4 mt-2">

            {!review.approved && (
              <button
                onClick={() => approveReview(review._id)}
                className="bg-green-600 px-3 py-1 rounded"
              >
                Approve
              </button>
            )}

            <button
              onClick={() => deleteReview(review._id)}
              className="bg-red-600 px-3 py-1 rounded"
            >
              Delete
            </button>

          </div>

        </div>
      ))}
    </div>
  );
};

export default AdminReviews;