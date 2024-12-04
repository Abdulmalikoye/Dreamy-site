import React, { useState } from "react";
import logo from "../img/dreamy.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribed:", email);
    setEmail("");
  };
  return (
    <div>
      <section className="md:h-[75vh] h-[50vh]">
        <div className="footer-image-bg h-full relative ">
          <p className=" text-white md:text-7xl text-4xl absolute md:top-28 top-6 left-6 md:left-28 ">
            From our kitchen <br /> to your hearts
          </p>
          <button className="md:px-16 md:py-5  px-8 py-3 border border-white text-white box-border absolute md:bottom-28 md:right-28 bottom-6 right-6">
            Make A Reservation
          </button>
        </div>
      </section>
      <footer className="bg-neutral-50 py-16 px-6 font-serif">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="text-[#62683A]">
              <img src={logo} alt="" />
            </div>
            <div>
              <h2 className="text-3xl text-gray-800">Luxury</h2>
              <p className="text-xl">
                <span className="text-[#62683A] italic">dining</span> like
                <br />
                never <span className="italic">before.</span>
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#62683A]">
                  Homepage v1
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#62683A]">
                  Homepage v2
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#62683A]">
                  Homepage v3
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#62683A]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#62683A]">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#62683A]">
                  Reservation
                </a>
              </li>
            </ul>
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#62683A]">
                  Appetizers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#62683A]">
                  Main Dishes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#62683A]">
                  Salads
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#62683A]">
                  Desserts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#62683A]">
                  Beverages
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#62683A]">
                  Chef's Special
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter and Hours Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">
                Register to Newsletter
              </h3>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address ..."
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-[#62683A]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#62683A] text-white py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Hours</h3>
              <p className="text-gray-600">
                Mon - Sun <br /> ( 11:00 AM - 5:00 PM )
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
            <p>Copyright © Dreamy in 2023. All rights reserved.</p>
            <div className="space-x-6">
              <a href="#" className="hover:text-[#62683A]">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#62683A]">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
