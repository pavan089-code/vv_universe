import { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const res = await fetch("https://vv-universe.onrender.com/api/reviews");
    const data = await res.json();

    setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">
        Client Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review._id} className="bg-gray-900 p-6 rounded-xl">

            <div className="text-yellow-400 mb-2">
              {"⭐".repeat(review.rating)}
            </div>

            <p className="mb-4">{review.message}</p>

            <h4 className="font-semibold">{review.name}</h4>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;