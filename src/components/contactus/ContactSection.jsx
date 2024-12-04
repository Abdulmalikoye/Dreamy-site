import React from "react";

const ContactSection = () => {
  const contactInfo = [
    { label: "Phone", value: "+1 (555) 123-4567" },
    { label: "Socials", value: "@luxdin.restaurant" },
    { label: "Email", value: "information@luxdin.com" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Map placeholder */}
        <div className="w-full md:w-1/2">
          <div className="aspect-square bg-gray-200 w-full"></div>
        </div>

        {/* Contact Information */}
        <div className="w-full md:w-1/2 md:pl-8">
          <div className="max-w-md">
            <p className="text-orange-400 uppercase tracking-wide text-sm mb-2">
              Contact
            </p>

            <h2 className="text-4xl font-serif text-gray-900 mb-8">
              Find us here.
            </h2>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-medium">
                      {item.label}
                    </span>
                    <span className="text-gray-500">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
