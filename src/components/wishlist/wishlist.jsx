import React from "react";
import { useWishlistStore } from "./wishlistStore/wishliststore";
import AddToCartBtn from "../addToCart/addToCart";
import { useState } from "react";


function Wishlist() {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);
  const clearWishlist = useWishlistStore((state) => state.clearWishlist);
  const [msg, setmsg] = useState(false);

  if (wishlist.length === 0) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-xl font-semibold text-gray-600">Your wishlist is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-14 py-10">
      {msg && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded shadow-md z-50">
          {msg}
        </div>
      )}
      <h1 className="text-4xl font-semibold text-center mb-8">My Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow p-4 flex flex-col justify-between bg-white hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-bold line-clamp-2">{item.title}</h2>
            <p className="text-gray-700 mt-1 text-lg">${item.price}</p>
            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={() => removeFromWishlist(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
              <span className="text-sm text-gray-500">Qty: {item.qty}</span>
            </div>
            <div className="mt-4">
              <AddToCartBtn product={item} setmsg={setmsg} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={clearWishlist}
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
        >
          Clear Wishlist
        </button>
      </div>
    </div>
  );
}

export default Wishlist;
