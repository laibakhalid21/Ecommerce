import React from "react";
import ProductCard from "../productCard/productCard";

function NewArrivals({ products, renderStars,setmsg }) {
  const newArrivals = products.slice(-4);

  return (
    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-14 py-10">
      <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-10">New Arrivals</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} renderStars={renderStars} setmsg={setmsg} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;
