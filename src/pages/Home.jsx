import React from "react";
import Header from "../components/Header";
import menuImg from "../img/menu.svg";
import delights from "../img/delights.svg";
import specialMenu from "../img/special-menu.svg";
import imgFood from "../img/img-foot.svg";
import Reviews from "../components/landing/Reviews";
import Faq from "../components/landing/Faq";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <header className="home-bg h-screen relative">
        <Header />
        <div className="flex flex-col items-center justify-center w-[75%] hero-text">
          <h1 className="text-center text-[#FBF8F4] md:text-7xl text-4xl font-semibold mb-4 ">
            Enjoy Every Bite and Tasting Delicious Food
          </h1>
          <p className="text-center text-[#FBF8F4] text-sm md:text-lg mb-8">
            One where every dish is a masterpiece and every meal is an
            experience. Our <br /> restaurant offers cuisine that is second to
            none.
          </p>
          <div className="flex md:flex-row flex-col gap-4">
            <button className="px-16 py-5 bg-[#FBF8F4] text-black border border-[#FBF8F4]">
              Reservation
            </button>
            <button className="px-16 py-5 border border-[#FBF8F4] text-[#FBF8F4] box-border">
              See Menu
            </button>
          </div>
        </div>
      </header>
      <section className="md:h-screen  md:px-32 md:my-24 mx-6 my-6">
        <p className=" mb-4 text-[#A46C32] text-sm md:text-base">CATEGORIES</p>
        <div className="flex md:flex-row flex-col items-start justify-between md:items-center mb-12">
          <p className=" font-semibold md:text-4xl text-2xl">
            Signature Barberry Chicken
          </p>
          <button className="border border-black text-black px-8 py-2">
            See All Menu
          </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={menuImg} alt="" className="md:mb-12 mb-6" />
          <p className="text-center md:w-[75%] text-[#321D1D] flex items-center justify-center text-sm md:text-lg">
            We have desserts from all over the world, bursting with sweetness,
            perfect to compliment every main dishes and side dishes you enjoy in
            our dining experience. Ready to order after your meals.
          </p>
        </div>
      </section>
      <section className="md:h-screen h-[60vh] md:px-32 md:py-24 px-6 py-12">
        <div className="h-[95%]">
          <div className="content-bg flex flex-col md:block justify-between items-start p-8 md:p-0  relative text-white ">
            <h1 className="md:text-5xl text-3xl md:absolute md:bottom-8 md:left-8 ">
              Experience <br />
              <span className="italic">Luxurious</span> Dining
            </h1>
            <p className="md:text-xl text-base md:absolute md:bottom-8 md:right-8 ">
              Discover a new world where every dishes is a masterpiece,
              <br />
              meticulously crafted with the finest ingredients and finesse.
            </p>
          </div>
        </div>
      </section>
      <section className="h-full md:px-32  px-6 ">
        {/* <div className="flex flex-col items-center justify-center gap-4">
          <p className="mb-4 text-[#A46C32]">SIGNATURES</p>
          <h1 className="text-7xl">Popular Delights</h1>
        </div> */}
        <p className=" mb-4 text-[#A46C32] text-xs md:text-base ">CATEGORIES</p>
        <div className="flex md:flex-row flex-col md:justify-between gap-4 items-start  md:items-center mb-12">
          <p className="  md:text-6xl text-3xl">Popular Delights</p>
          <button className="border border-black text-black px-8 py-2">
            See All Menu
          </button>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <div className=" md:w-[40%] w-full  flex flex-col gap-12">
            <div className="">
              <div className="flex gap-5  items-center justify-between">
                <div>
                  <h1 className="text-3xl font-semibold mb-6">Sandwich</h1>
                  <p className="text-base mb-4">
                    The perfect blend of taste and simplicity, offering fresh,
                    handcrafted sandwiches made with premium ingredients.
                  </p>
                </div>
                <p>$60</p>
              </div>
              <hr />
            </div>
            <div className="">
              <div className="flex gap-5  items-center justify-between">
                <div>
                  <h1 className="text-3xl font-semibold mb-6">Sandwich</h1>
                  <p className="text-base mb-4">
                    The perfect blend of taste and simplicity, offering fresh,
                    handcrafted sandwiches made with premium ingredients.
                  </p>
                </div>
                <p>$60</p>
              </div>
              <hr />
            </div>
            <div className="">
              <div className="flex gap-5  items-center justify-between">
                <div>
                  <h1 className="text-3xl font-semibold mb-6">Sandwich</h1>
                  <p className="text-base mb-4">
                    The perfect blend of taste and simplicity, offering fresh,
                    handcrafted sandwiches made with premium ingredients.
                  </p>
                </div>
                <p>$60</p>
              </div>
              <hr />
            </div>
            <div className="">
              <div className="flex gap-5  items-center justify-between">
                <div>
                  <h1 className="text-3xl font-semibold mb-6">Sandwich</h1>
                  <p className="text-base mb-4">
                    The perfect blend of taste and simplicity, offering fresh,
                    handcrafted sandwiches made with premium ingredients.
                  </p>
                </div>
                <p>$60</p>
              </div>
              <hr />
            </div>
          </div>
          <div className="md:w-[55%] w-full">
            <img src={delights} alt="" className="w-full" />
          </div>
        </div>
      </section>
      <section className="md:h-[75vh] h-[60vh]  md:my-32 my-6 value-bg flex items-center md:justify-end justify-center text-[#321D1D]">
        <div className="bg-[#FBF8F4] md:p-12 p-6 w-[550px] md:mr-14 flex flex-col items-start mx-6 ">
          <div className="flex flex-col gap-3 mb-6">
            <h1 className="md:text-6xl text-3xl  ">Our Values</h1>
            <p className=" md:text-xl text-base">
              Immerse yourself in culinary excellence as our chefs meticulously
              craft each dish to perfection.
            </p>
          </div>
          <ul>
            <li className="list-values flex items-center justify-center gap-3">
              <ion-icon name="checkmark-outline"></ion-icon>
              <p>Organic and Sustainable for Varied Dietaries</p>
            </li>
            <li className="list-values flex items-center justify-center gap-3">
              <ion-icon name="checkmark-outline"></ion-icon>
              <p>Organic and Sustainable for Varied Dietaries</p>
            </li>
            <li className="list-values flex items-center justify-center gap-3">
              <ion-icon name="checkmark-outline"></ion-icon>
              <p>Organic and Sustainable for Varied Dietaries</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="h-full md:px-24 px-6 text-[#321D1D]">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="md:mb-4 mb-2 text-[#A46C32]">SPECIAL MENU</p>
          <h1 className="md:text-7xl text-3xl text-center">
            Grilled Salmon & Prawn Steak
          </h1>
        </div>
        <div className="flex justify-between md:flex-row flex-col gap-10 items-center md:py-20 py-6">
          <div className="flex flex-col md:gap-[82px] gap-9  ">
            <div>
              <p className="font-semibold text-xl mb-2">Salmon</p>
              <p className="text-base">
                Known for its mild, buttery flavor and tender texture, sourced
                from sustainable fisheries, cooked with extra crisps.
              </p>
            </div>
            <div className="w-[72px] h-[1px] bg-black"></div>
            <div>
              <p className="font-semibold text-xl mb-2">Salmon</p>
              <p className="text-base">
                Known for its mild, buttery flavor and tender texture, sourced
                from sustainable fisheries, cooked with extra crisps.
              </p>
            </div>
          </div>
          <div>
            <img src={specialMenu} alt="" className="w-[90%]" />
          </div>
          <div className="flex flex-col md:gap-[82px] gap-9 justify-end items-end ">
            <div>
              <p className="font-semibold text-xl mb-2 text-right">Salmon</p>
              <p className="text-base text-right">
                Known for its mild, buttery flavor and tender texture, sourced
                from sustainable fisheries, cooked with extra crisps.
              </p>
            </div>
            <div className="w-[72px] h-[1px] bg-black"></div>
            <div>
              <p className="font-semibold text-xl mb-2 text-right">Salmon</p>
              <p className="text-base text-right">
                Known for its mild, buttery flavor and tender texture, sourced
                from sustainable fisheries, cooked with extra crisps.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="menu-section-bg px-6 md:px-24 md:py-20 md:mx-24 md:my-20 p-6 m-6">
        <div className="flex flex-col items-center justify-center gap-6 md:gap-12">
          <h2 className="md:text-6xl text-3xl text-white text-center">
            Indulge in luxury dining to experience culinary artistry
          </h2>
          <div className="flex gap-4">
            <button className="md:px-16 md:py-5 px-6 py-3 bg-white text-black border border-white">
              Reservation
            </button>
            <button className="md:px-16 md:py-5 px-6 py-3 border border-white text-white box-border">
              See Menu
            </button>
          </div>
        </div>
      </section>
      <Reviews />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
