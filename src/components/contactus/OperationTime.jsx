import React, { useState } from "react";

const OperationTime = () => {
  return (
    <div className="bg-[#62683A] text-white min-h-[200px] flex flex-col items-center justify-center py-24 px-4">
      <div className="text-center flex flex-col gap-8 items-center justify-center">
        <p className="text-orange-200 uppercase tracking-wider text-sm mb-3">
          Information
        </p>

        <h2 className="font-serif text-4xl mb-12">Operation Time</h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-16">
          <div className="text-center">
            <h3 className="font-serif text-xl mb-3 text-orange-200">Address</h3>
            <p className="text-gray-200 w-[300px]">
              76 Heath Street, London, United Kingdom NW3 1DN
            </p>
          </div>

          <div className="hidden md:block w-px h-16 bg-orange-200/30" />

          <div className="text-center">
            <h3 className="font-serif text-xl mb-3 text-orange-200">Hours</h3>
            <p className="text-gray-200 w-[300px]">
              Mon - Sun <br /> ( 11:00 AM - 5:00 PM )
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          <div className="text-center">
            <h3 className="font-serif text-xl mb-3 text-orange-200">Email</h3>
            <p className="text-gray-200 w-[300px]">information@luxdin.com</p>
          </div>

          <div className="hidden md:block w-px h-16 bg-orange-200/30" />

          <div className="text-center">
            <h3 className="font-serif text-xl mb-3 text-orange-200">Socials</h3>
            <p className="text-gray-200 w-[300px]">@thedreamyhampstead</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationTime;
