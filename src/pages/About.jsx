import React from "react";
import Header from "../components/Header";
import OurStory from "../components/about/OurStory";
import ValueSection from "../components/about/ValueSection";
import Team from "../components/about/Team";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <header className=" about-bg h-screen relative">
        <Header />
        <div className="flex flex-col items-center justify-center w-[75%] hero-text">
          <h1 className="text-center text-[#FBF8F4] md:text-7xl text-4xl font-semibold mb-4 ">
            Our Story
          </h1>
        </div>
      </header>
      <OurStory />
      <ValueSection />
      <Team />
      <Footer />
    </div>
  );
};

export default About;
