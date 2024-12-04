import React from "react";
import arrowLeft from "../../img/arrow-left.svg";
import arrowRight from "../../img/arrow-right.svg";

const Reviews = () => {
  return (
    <div>
      <section className="h-full md:px-24 px-6 bg-[#62683A] text-[#FBF8F4] md:py-24 py-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="mb-4 text-[#D3A574]">TESTIMONIALS</p>
          <h1 className="md:text-7xl text-4xl mb-3 text-center">
            Customer Reviews
          </h1>
        </div>
        <div className="flex items-center justify-between mb-10">
          <div className="md:w-[100%] w-[60%]">
            <img src={arrowLeft} alt="" className="" />
          </div>
          <p className="text-center md:w-[60%]">
            "Discover a world where every dish is a divine masterpiece,
            everything meticulously crafted with the finest ingredients. Our
            utmost years of culinary commitment to excellence makes us the best
            one.""
          </p>
          <div className="md:w-[100%] w-[60%]">
            <img src={arrowRight} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <p>Maleek Oyeyemi</p>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
