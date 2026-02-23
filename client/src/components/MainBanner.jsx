import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

const MainBanner = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Images */}
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block object-cover h-[75vh]"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden object-cover h-[70vh]"
      />

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start px-6 md:px-16 lg:px-24">
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Freshness You Can Trust,
            <span className="block text-primary">Serving You Will Love!</span>
          </h1>

          <p className="text-gray-200 text-sm md:text-base max-w-md">
            Discover farm-fresh groceries, handpicked quality, and unbeatable
            deals delivered right to your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Link
              to={"/products"}
              className="group flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Shop Now
              <MoveRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to={"/products"}
              className="group flex items-center gap-2 px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300"
            >
              Explore Deals
              <MoveRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
