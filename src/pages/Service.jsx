import React from "react";
import Header from "../components/Header";
import Faq from "../components/landing/Faq";
import Footer from "../components/Footer";

const Service = () => {
  return (
    <div>
      <header className="services-bg h-screen relative">
        <Header />
        <div className="flex flex-col items-center justify-center w-[75%] hero-text">
          <h1 className="text-center text-[#FBF8F4] md:text-7xl text-4xl font-semibold mb-4 ">
            Discover <br /> <span className="italic"> Dining </span> Services
          </h1>
        </div>
      </header>
      <section className="h-full md:px-32 px-6 text-[#321D1D] md:py-24 py-6">
        {/* <div className=" mx-auto  flex md:flex-row flex-col justify-between"> */}
        <div className="flex flex-col items-start gap-4">
          <p className="mb-4 text-[#A46C32]">FAQ</p>
          <h1 className="md:text-7xl text-4xl">Answers for Questions</h1>
        </div>
      </section>
      <Faq />
      <Footer />
    </div>
  );
};

export default Service;
