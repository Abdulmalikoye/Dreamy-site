import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between mx-auto px-6 py-6 md:px-32 md:py-24 bg-gray-50/50">
      <div className="mb-8">
        <h1 className="md:text-7xl text-4xl text-gray-900">
          Connect <br /> with
          <span className=" italic "> Dreamy</span>
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 w-full md:w-[50%]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-brown-600 bg-transparent placeholder-gray-500"
              required
            />
          </div>
          <div className="flex-1">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-brown-600 bg-transparent placeholder-gray-500"
              required
            />
          </div>
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-brown-600 bg-transparent placeholder-gray-500"
            required
          />
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none focus:border-brown-600 bg-transparent placeholder-gray-500 resize-none"
            required
          />
        </div>

        <div className="flex  flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="acceptTerms"
              id="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="w-4 h-4 border-gray-300 rounded focus:ring-brown-600 text-brown-600"
              required
            />
            <label htmlFor="acceptTerms" className="text-sm text-gray-600">
              I accept the{" "}
              <a href="#" className="text-brown-600 hover:underline">
                Terms & Condition
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#62683A] text-white px-6 py-2 rounded hover:bg-brown-700 transition-colors duration-200 w-full md:w-fit mt-4 md:mt-0"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
