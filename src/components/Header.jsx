import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/dreamy.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="z-20">
      {isMenuOpen && (
        <header className="h-screen md:h-full bg-[#FBF8F4] gap-20 bg-none flex md:hidden flex-col md:justify-between md:items-center md:px-32 md:py-10 px-6 py-6 text-black md:text-white">
          <div className="flex items-center justify-between">
            <div>
              <img src={logo} alt="" />
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none"
            >
              {/* Icon: if menu is open, show "X", otherwise show "≡" */}
              {/* {isMenuOpen ? ( */}
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              {/* ) : ( */}

              {/* )} */}
            </button>
          </div>
          <nav className=" flex md:flex-row flex-col  gap-4 text-black md:text-white">
            <Link to="/" className="mr-4">
              Home
            </Link>
            <Link to="/about" className="mr-4">
              About
            </Link>
            <Link to="/menu" className="mr-4">
              Menu
            </Link>
            <Link to="/service" className="mr-4">
              Services
            </Link>
            <Link to="/reservation" className="mr-4">
              Reservation
            </Link>
            <Link to="/contact" className="mr-4">
              Contact
            </Link>
          </nav>
          <div className="flex  gap-4 items-center text-black md:text-white">
            <ion-icon name="call"></ion-icon>
            <p>CALL +44 20 7794 5179</p>
          </div>
        </header>
      )}

      <header
        className={`flex justify-between items-center md:px-32 md:py-10 px-6 py-6 ${
          isMenuOpen ? "hidden" : ""
        }`}
      >
        <div>
          <img src={logo} alt="" />
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none"
        >
          {/* Icon: if menu is open, show "X", otherwise show "≡" */}
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav className="hidden md:flex gap-4 text-white">
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/about" className="mr-4">
            About
          </Link>
          <Link to="/menu" className="mr-4">
            Menu
          </Link>
          <Link to="/service" className="mr-4">
            Services
          </Link>
          <Link to="/reservation" className="mr-4">
            Reservation
          </Link>
          <Link to="/contact" className="mr-4">
            Contact
          </Link>
        </nav>
        <div className="md:flex hidden gap-4 items-center text-white">
          <ion-icon name="call"></ion-icon>
          <p>CALL +44 20 7794 5179</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
