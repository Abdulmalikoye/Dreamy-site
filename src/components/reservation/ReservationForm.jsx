import React, { useState } from "react";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    timeSlot: "",
    guests: "",
    requests: "",
  });

  const timeSlots = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"];

  const guestOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation details:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-4xl mx-auto ">
      <div className="my-16 px-6">
        <div className="border-t border-gray-300"></div>
        {/* Address and Hours Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-16 my-24 mx-32">
          <div className="text-center">
            <h3 className="font-serif text-xl mb-3 text-[#321D1D]">Address</h3>
            <p className="text-[#321D1D] w-[300px]">
              76 Heath Street, London, United Kingdom NW3 1DN
            </p>
          </div>

          <div className="border-l border-gray-300 h-5 absolute left-1/2 transform -translate-x-1/2"></div>

          <div className="text-center">
            <h3 className="font-serif text-xl mb-3 text-[#321D1D]">Hours</h3>
            <p className="text-[#321D1D] w-[300px]">
              Mon - Sun <br /> ( 11:00 AM - 5:00 PM )
            </p>
          </div>
        </div>
        <div className="border-t border-gray-300 "></div>
      </div>
      {/* Reservation Form */}
      <form onSubmit={handleSubmit} className="bg-[#62683A] p-8">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white rounded focus:outline-none"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white rounded focus:outline-none"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white rounded focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white rounded focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white rounded focus:outline-none"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <select
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white rounded focus:outline-none appearance-none cursor-pointer"
            required
          >
            <option value="">Time Slot</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>

          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white rounded focus:outline-none appearance-none cursor-pointer"
            required
          >
            <option value="">Number of Guests</option>
            {guestOptions.map((num) => (
              <option key={num} value={num}>
                {num} Guest{num > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <textarea
            name="requests"
            placeholder="Additional Requests"
            value={formData.requests}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-white rounded focus:outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#D3A574] text-white py-4 rounded hover:bg-tan-500 transition-colors duration-200 font-medium"
        >
          Make A Reservation
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
