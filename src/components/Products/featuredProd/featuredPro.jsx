import React from "react";
import ProductCard from "../productCard/productCard";
function FeaturedProducts({ products, renderStars ,setmsg,setSelectedProduct}) {
  const featured = products.filter((p) => p.rating.rate >= 4).slice(0, 4);

  return (
    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-14 py-10">
      <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-10">Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {featured.map((product) => (
            <div
            key={product.id}
            className="cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <ProductCard product={product} setmsg={setmsg} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
