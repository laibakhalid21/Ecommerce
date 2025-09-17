import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart, Heart, Package, User, Menu, X, Search } from "lucide-react";
import { useCartStore } from "../CartContext/cartContext";
import SearchBox from "./search/search";
import MiniCartDropdown from "../Cart/CartdropDown";
import { useWishlistStore } from "../wishlist/wishlistStore/wishliststore";

function Navbar({ searchQuery, setSearchQuery }) {
  const cart = useCartStore((state) => state.cart);
  const wishlist = useWishlistStore((state) => state.wishlist)

  const totalItems = cart.length;
  const totalWishlist = wishlist.length

  const [isOpen, setIsOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);



  const nav1 = [
    { name: "Home", path: "/Home" },
    { name: "Products", path: "/Products" },
    { name: "Account/Login", path: "/login", icon: <User size={18} /> },
    { name: "Cart", path: "/cart", icon: <ShoppingCart size={18} />, count: totalItems, dropdown: true },
    { name: "Wishlist", path: "/wishlist", icon: <Heart size={18} />, count: totalWishlist },
    { name: "Orders", path: "/orders", icon: <Package size={18} /> },
  ];

  const linkClasses = ({ isActive }) =>
    `relative transition-colors duration-200 ${isActive ? "text-red-500 font-bold" : "hover:text-gray-100"
    } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <nav className="w-full sticky top-0 z-50">
      <div className="bg-blue-950 text-white">
        <div className="w-full max-w-[1980px] mx-auto flex items-center px-4 gap-4">
          <img src="logos.png" alt="logo" className="h-24 w-24" />

          <div className="hidden md:flex flex-1 relative lg:ml-10">
            <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <Search
              className="absolute right-3 top-1/2 cursor-pointer -translate-y-1/2 text-gray-600"
              size={20}
            />
          </div>

          <ul className="hidden md:flex xl:gap-20 gap-6 px-2">
            {nav1.map((item, i) => (
              <li key={i} className="group relative"
                onMouseEnter={() => item.dropdown && setShowCartDropdown(true)}
                onMouseLeave={() => item.dropdown && setShowCartDropdown(false)}>
                <div
                  className="relative"
                >
                  <div className="flex items-center gap-1 cursor-pointer">
                    <div className="relative">
                      {item.icon}
                      {item.count >= 0 && (
                        <sup className="absolute -top-3 -right-1 bg-yellow-400 text-black h-4 w-4 flex justify-center items-center rounded-full text-xs font-bold">
                          {item.count}
                        </sup>
                      )}
                    </div>
                    <NavLink to={item.path} className={linkClasses}>
                      {item.name}
                    </NavLink>
                  </div>

                  {item.dropdown && showCartDropdown && (
                    <div className="absolute top-full z-50">
                      <MiniCartDropdown />
                    </div>
                  )}
                </div>
              </li>


            ))}
          </ul>

          <button
            className="md:hidden ml-auto mr-3"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            <Search size={22} className="text-gray-300" />
          </button>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {showMobileSearch && (
        <div className="md:hidden bg-blue-900 px-4 py-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowMobileSearch(false);
            }}
            className="relative"
          >
            <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
            >
              <Search size={20} />
            </button>
          </form>
        </div>
      )}



{isOpen && (
  <div
    onClick={() => setIsOpen(false)}
    className="fixed inset-0 top-24 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
  ></div>
)}

<div
  className={`fixed left-0 h-full w-64 bg-blue-900 text-white z-50 transform transition-transform duration-300 md:hidden ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  }`}
  style={{ top: "6rem" }}
>
  <ul className="flex flex-col gap-6 p-6">
    {nav1.map((item, i) => (
      <li key={i} className="flex items-center gap-3">
        {item.icon}
        <NavLink
          to={item.path}
          className={linkClasses}
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
</div>


    </nav>
  );
}

export default Navbar;
