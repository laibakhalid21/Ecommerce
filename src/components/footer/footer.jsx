import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { NavLink } from "react-router-dom";
import Newsletter from "./NewsLeter/newsltter";


function Footer() {
  const quickLinks = [
    { name: "Women", path: "/women" },
    { name: "Men", path: "/men" },
    { name: "Kids", path: "/kids" },
    { name: "Electronics", path: "/electronics" },
    { name: "Home & Furniture", path: "/home" },
    { name: "Beauty", path: "/beauty" },
  ];

  const accountLinks = [
    { name: "Login", path: "/login" },
    { name: "Cart", path: "/cart" },
    { name: "Wishlist", path: "/wishlist" },
    { name: "Orders", path: "/orders" },
  ];

  return (
    <div className="bg-blue-950 w-full">
            <Newsletter/>
    <footer className=" text-gray-300 mt-10 w-full max-w-[1980px] mx-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <img src="logos.png" alt="logo" className="h-24 w-24 object-contain mb-4" />
          <p className="text-sm">
            Your one-stop online shop for fashion, electronics, and lifestyle.
          </p>
        </div>

        <div>
          <h2 className="text-white font-semibold text-lg mb-3">Quick Links</h2>
          <ul className="space-y-2">
            {quickLinks.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold text-lg mb-3">Account</h2>
          <ul className="space-y-2">
            {accountLinks.map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-white font-semibold text-lg mb-3">Contact</h2>
          <p className="text-sm">Email: support@shop.com</p>
          <p className="text-sm">Phone: +92 300 1234567</p>
          <div className="flex gap-4 mt-3">
            <a href="#"><Facebook size={20} className="hover:text-yellow-400" /></a>
            <a href="#"><Instagram size={20} className="hover:text-yellow-400" /></a>
            <a href="#"><Twitter size={20} className="hover:text-yellow-400" /></a>
            <a href="#"><Linkedin size={20} className="hover:text-yellow-400" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShopMart. All Rights Reserved.
      </div>
    </footer>

    </div>
  );
}

export default Footer;
