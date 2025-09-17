import React from "react";
import ProductCard from "../productCard/productCard";

function BestSellers({ products, renderStars,setmsg }) {
  const bestSellers = [...products].sort((a, b) => b.rating.count - a.rating.count).slice(0, 4);

  return (
    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-14 py-10">
      <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-10">Best Sellers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} renderStars={renderStars} setmsg={setmsg}/>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
