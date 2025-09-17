import React, { useState, useRef } from "react";
import HeroSection from "./herosection/herosection";
import Products from "../Products/Products";
import Categories from "../Products/categories/categories";
import { useOutletContext } from "react-router-dom";
import Edition from "./Edition/edittion";
import MiddleSec from "./middleSec/Middle";
import Reviews from "./reviews/reviews";

function Home() {
  const { searchQuery } = useOutletContext();
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const productsRef = useRef(null);

  const handleCategorySelect = (categoryKey) => {
    setSelectedCategory(categoryKey);

    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {!searchQuery ? (
        <>
          <HeroSection />
          <MiddleSec />
          <Categories onCategorySelect={handleCategorySelect} />
        
              <div ref={productsRef}>
            <Products category={selectedCategory} />
          </div>

          <Edition />
          <Reviews />
        </>
      ) : (
        <Products /> 
      )}
    </div>
  );
}

export default Home;
