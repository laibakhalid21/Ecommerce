import React from "react";

function Categories({ onCategorySelect }) {
  const images = [
    { src: "menn2.webp", key: "men's clothing", Text: "Men's Clothing", Desc: "Trendy outfits for men" },
    { src: "wen.webp", key: "women's clothing", Text: "Women's Clothing", Desc: "Latest fashion styles" },
    { src: "jew12.jpg", key: "jewelery", Text: "Jewelry", Desc: "Rings, necklaces & more" },
    { src: "laptop.jpg", key: "electronics", Text: "Electronics", Desc: "Laptops, mobiles & gadgets" },
  ];

  return (
    <div className="w-full max-w-[1980px] mx-auto px-4 sm:px-6 lg:px-14 py-10">
      <h1 className="text-4xl sm:text-5xl font-semibold text-center mb-10">Our Categories</h1>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {images.map((Cate, i) => (
          <div
            key={i}
            onClick={() => onCategorySelect(Cate.key)}
            className="relative border bg-slate-100 shadow rounded-2xl cursor-pointer hover:scale-105 transition duration-200 ease-linear hover:shadow-2xl overflow-hidden"
          >
            <img
              src={Cate.src}
              alt={Cate.Text}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end items-start p-10 rounded-2xl p text-center">
              <h1 className="md:text-4xl text-2xl font-bold text-white">{Cate.Text}</h1>
              <p className="md:text-xl text-lg font-bold text-white mt-2">{Cate.Desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
