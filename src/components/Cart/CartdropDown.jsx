import React from "react";
import { useCartStore } from "../CartContext/cartContext";
import { NavLink } from "react-router-dom";

function MiniCartDropdown() {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="w-64 bg-white shadow-lg rounded-lg p-3">
      <div className="max-h-60 overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-sm text-gray-500">Your cart is empty</p>
        ) : (
          cart.map((item, i) => (
            <div key={i} className="flex items-center gap-3 mb-3 border-b pb-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-12 h-12 object-contain rounded"
              />
              <div>
                <p className="text-sm font-medium text-black">{item.title}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="flex flex-col gap-2 mt-2">
          <NavLink
            to="/cart"
            className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
          >
            View Cart
          </NavLink>
          <NavLink
            to="/orders"
            className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded"
          >
            Checkout
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default MiniCartDropdown;
