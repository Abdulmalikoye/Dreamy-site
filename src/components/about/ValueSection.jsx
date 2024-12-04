import React from "react";

const ValueSection = () => {
  return (
    <section className="bg-[#556B44] py-8 px-6">
      <div className="max-w-7xl mx-auto  grid-cols-1 md:grid-cols-3 gap-8 flex flex-col-reverse">
        {/* Left side grid - takes up 8 columns */}
        <div className="md:col-span-2  grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Excellence Card */}
          <div className="bg-white p-8 rounded">
            <div className="text-orange-300 mb-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S14.21,8,12,8z M12,14c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,14,12,14z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z"
                />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3">Excellence</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              LuxeDine is committed to delivering excellence in every aspect,
              from food culinary creations to service, ensuring an unforgettable
              dining.
            </p>
          </div>

          {/* Elegance Card */}
          <div className="bg-white p-8 rounded">
            <div className="text-orange-300 mb-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S14.21,8,12,8z M12,14c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,14,12,14z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z"
                />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3">Elegance</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              With a sophisticated ambiance and meticulous details exuding
              elegance, elevating dining to a luxurious affair that resonates
              with refinement.
            </p>
          </div>

          {/* Sustainability Card */}
          <div className="bg-white p-8 rounded">
            <div className="text-orange-300 mb-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S14.21,8,12,8z M12,14c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,14,12,14z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z"
                />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3">Sustainability</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              We prioritize sustainability by sourcing ingredients responsibly
              and minimize environmental impact, ensuring that each dish is
              ethical.
            </p>
          </div>

          {/* Hospitality Card */}
          <div className="bg-white p-8 rounded">
            <div className="text-orange-300 mb-6">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4S14.21,8,12,8z M12,14c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,14,12,14z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8 S16.41,20,12,20z"
                />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-3">Hospitality</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our dedicated team goes above and beyond to ensure every guest
              feels welcomed and heart cherished throughout their dining
              journey.
            </p>
          </div>
        </div>

        {/* Right side - takes up 4 columns */}
        <div className=" flex  md:col-start-3 md:col-end-4">
          <div className="flex flex-col items-start justify-between">
            <span className="text-orange-300 uppercase tracking-widest text-xs font-light mb-6 block">
              VALUES
            </span>
            <h2 className="font-serif text-white text-5xl leading-tight">
              What We
              <br />
              Believe
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
