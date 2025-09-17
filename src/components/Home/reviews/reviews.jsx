import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Verified Buyer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Amazing experience! The quality of the products is top-notch and delivery was super fast.",
  },
  {
    id: 2,
    name: "Michael Smith",
    role: "Frequent Shopper",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    review:
      "I love shopping here. The customer service is outstanding and the products are always as described.",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Happy Customer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "This is my go-to store now. Great discounts and very reliable service every single time!",
  },
];

function Review() {
  return (
    <div className="bg-gray-100 py-14">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Reviews.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-200"
            >
              <FaQuoteLeft className="text-blue-600 text-3xl mb-4" />
              <p className="text-gray-700 italic mb-6">"{t.review}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
