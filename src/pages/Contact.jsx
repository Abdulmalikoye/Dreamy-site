import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/contactus/ContactForm";
import OperationTime from "../components/contactus/OperationTime";
import Faq from "../components/landing/Faq";
import Footer from "../components/Footer";
import ContactSection from "../components/contactus/ContactSection";

const Contact = () => {
  return (
    <div>
      <header className="contact-bg h-screen relative">
        <Header />
        <div className="flex flex-col items-center justify-center w-[75%] hero-text">
          <h1 className="text-center text-[#FBF8F4] md:text-7xl text-4xl font-semibold mb-4 ">
            Contact Us
          </h1>
        </div>
      </header>
      <ContactForm />
      <OperationTime />
      {/* <ContactSection /> */}
      <Faq />
      <Footer />
    </div>
  );
};

export default Contact;
