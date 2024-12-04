import React from "react";
import Header from "../components/Header";
import ReservationForm from "../components/reservation/ReservationForm";
import Faq from "../components/landing/Faq";
import Footer from "../components/Footer";

const Reservations = () => {
  return (
    <div>
      <header className="reservation-bg h-screen relative ">
        <div className="md:flex flex-col items-center justify-center w-[75%] hero-text    ">
          <h1 className="text-center text-[#FBF8F4] md:text-7xl text-4xl font-semibold mb-4">
            Secure <br /> <span className="italic"> Your </span> Reservation
          </h1>
        </div>
        <Header />
      </header>
      <ReservationForm />
      <Faq />
      <Footer />
    </div>
  );
};

export default Reservations;
