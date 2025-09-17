import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { X } from "lucide-react";

function ProductDetails({ product, onClose }) {
  if (!product) return null; 

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-400" />);
      else if (rating >= i - 0.5) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
    return stars;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-3xl p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full md:w-1/2 h-64 md:h-80 object-contain"
          />

          <div className="flex-1 flex flex-col gap-3">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <div className="flex items-center gap-2">
              {renderStars(product.rating.rate)}
              <span className="text-gray-500 text-sm">({product.rating.count} reviews)</span>
            </div>
            <p className="text-xl font-semibold mt-2">${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
