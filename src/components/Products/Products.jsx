import React, { useState, useEffect } from "react";
import ProductCard from "./productCard/productCard";
import BestSellers from "./BestSells/BestSell";
import NewArrivals from "./arrivals/arrivals";
import FeaturedProducts from "./featuredProd/featuredPro";
import { useOutletContext } from "react-router-dom";

function Products({ category }) {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProd] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [msg, setmsg] = useState(false);

  const { searchQuery } = useOutletContext();

  const nav2 = [
    { name: "All Categories", key: "all" },
    { name: "Women", key: "women's clothing" },
    { name: "Men", key: "men's clothing" },
    { name: "Electronics", key: "electronics" },
    { name: "Jewelery", key: "jewelery" },
  ];

  const filterLinkClasses = (key) =>
    `px-6 py-3 rounded-full font-semibold transition-all duration-300 
    ${activeFilter === key
      ? "bg-blue-900 text-white shadow-md scale-105"
      : "bg-red-600 text-white hover:bg-red-700 hover:scale-125"
    }`;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilterProd(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    let filtered = products;
    let newActiveFilter = "all";

    if (category && category !== "all") {
      filtered = products.filter((p) => p.category === category);
      newActiveFilter = category;
    }

    const query = searchQuery?.trim().toLowerCase();
    if (query && query !== "") {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query)
      );

      const categoryMap = {
        "women": "women's clothing",
        "men": "men's clothing",
        "electronics": "electronics",
        "jewelery": "jewelery",
      };
      const matchedKey = categoryMap[query];
      if (matchedKey) newActiveFilter = matchedKey;
    }

    setFilterProd(filtered);
    setActiveFilter(newActiveFilter);
  }, [category, searchQuery, products]);

  const handleFilter = (key) => {
    setActiveFilter(key);
    if (key === "all") setFilterProd(products);
    else setFilterProd(products.filter((p) => p.category === key));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-lg font-semibold">Loading products...</p>
      </div>
    );
  }

  return (
    <div>
      {msg && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded shadow-md z-50">
          {msg}
        </div>
      )}

      <div className="w-full bg-gray-300 py-10">
        <div className="max-w-[1980px] mx-auto px-4 sm:px-6 lg:px-14">
          <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-10">
            Our Products
          </h1>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {nav2.map((item) => (
              <button
                key={item.key}
                onClick={() => handleFilter(item.key)}
                className={filterLinkClasses(item.key)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {filterProducts.length === 0 ? (
              <p className="col-span-full text-center text-xl font-semibold mt-10 text-red-600">
                No products found
              </p>
            ) : (
              filterProducts.map((product) => (
                <ProductCard key={product.id} product={product} setmsg={setmsg} />
              ))
            )}
          </div>
        </div>
      </div>

      <FeaturedProducts products={products} setmsg={setmsg} />
      <BestSellers products={products} setmsg={setmsg} />
      <NewArrivals products={products} setmsg={setmsg} />
    </div>
  );
}

export default Products;
