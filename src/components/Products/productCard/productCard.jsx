import React from "react";
import AddToCartBtn from "../../addToCart/addToCart";
import { useWishlistStore } from "../../wishlist/wishlistStore/wishliststore";
import { Heart } from "lucide-react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";


function ProductCard({ product, setmsg, onClick }) {
  const addWishlist = useWishlistStore((state) => state.addWishlist);
  const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);
  const wishlist = useWishlistStore((state) => state.wishlist);



  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) stars.push(<FaStar key={i} className="text-yellow-400" />);
      else if (rating >= i - 0.5) stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      else stars.push(<FaRegStar key={i} className="text-yellow-400" />);
    }
    return stars;
  };

  const handleWishlist = (e, product) => {
    e.stopPropagation();
    addWishlist(product);
  }

  return (
    <div className="border cursor-pointer bg-slate-100 rounded-lg shadow p-4 hover:scale-105 transition duration-200 ease-linear hover:shadow-xl flex flex-col justify-between"
      onClick={onclick}
    >
      <div className="flex justify-end">
        <button
          onClick={(e) => {
            if (isInWishlist(product.id)) removeFromWishlist(product.id);
            else handleWishlist(e,product);
          }}
          className="text-red-500 hover:scale-110 transition duration-200 ease-in-out"
        >
          <Heart size={22} fill={isInWishlist(product.id) ? "red" : "none"} />
        </button>
      </div>

      <img
        src={product.image}
        alt={product.title}
        className="w-full h-56 sm:h-64 object-contain"
      />

      <h3 className="mt-2 font-semibold line-clamp-1">{product.title}</h3>
      <p className="text-gray-700">${product.price}</p>

      <div className="flex mt-1">{renderStars(product.rating.rate)}</div>
      <p className="text-sm text-gray-500">({product.rating.count} reviews)</p>

      <div className="mt-4">
        <AddToCartBtn product={product} setmsg={setmsg} />
      </div>
    </div>
  );
}

export default ProductCard;
