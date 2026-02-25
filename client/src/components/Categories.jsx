import React from "react";
import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Categories = () => {
  const { navigate } = useAppContext();

  return (
    <section className="mt-20">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-10">
        Categories
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
            className="group cursor-pointer rounded-xl py-15 px-4 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            style={{ backgroundColor: category.bgColor }}
          >
            {/* Image */}
            <img
              src={category.image}
              alt={category.text}
              className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-110"
            />

            {/* Text */}
            <p className="mt-4 text-sm md:text-base font-semibold text-gray-800 text-center">
              {category.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
