import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Menu = () => {
  return (
    <div>
      <header className="dining-bg h-screen relative">
        <Header />
        <div className="flex flex-col items-center justify-center w-[75%] hero-text">
          <h1 className="text-center text-[#FBF8F4] md:text-7xl text-4xl font-semibold mb-4 ">
            Discover <br /> <span className="italic">Our Dining Menu</span>
          </h1>
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default Menu;
