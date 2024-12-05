import React from "react";
import husby from "../../img/husby.svg";
import wifey from "../../img/wifey.svg";

const teamMembers = [
  {
    name: "Shervin Orod",
    role: "Founder",
    imageUrl: "husby",
  },
  {
    name: "Nila Jamnia",
    role: "Co-founder",
    imageUrl: "/api/placeholder/400/500",
  },
];

const Team = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <p className="text-sm uppercase tracking-wider text-gray-600">TEAM</p>
        <h2 className="text-3xl font-serif mt-2">Our Culinary Team</h2>
        <button className="mt-4 px-6 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50 transition-colors">
          See All Teams
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* First Team Member */}
        <div className="space-y-2">
          <div className="aspect-[4/5] relative overflow-hidden">
            <img
              src={husby}
              alt="Chef in black uniform"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-lg font-medium">Shervin Orod</h3>
            <p className="text-gray-600 text-sm">Founder</p>
          </div>
        </div>

        {/* Second Team Member */}
        <div className="space-y-2">
          <div className="aspect-[4/5] relative overflow-hidden">
            <img
              src={wifey}
              alt="Chef in brown apron"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-lg font-medium">Nila Jamnia</h3>
            <p className="text-gray-600 text-sm">Co-founder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
