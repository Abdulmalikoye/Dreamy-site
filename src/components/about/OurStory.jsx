import React from "react";
import couple from "../../img/couple.svg";

const OurStory = () => {
  return (
    <section className="bg-neutral-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-amber-600 uppercase tracking-wide text-sm font-medium">
                Our Story
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
                Partners in Love to
                <br />
                Partners in the Kitchen
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Reflecting on our journey, it's evident that none of our
              achievements would have been possible without the unwavering
              support and dedication. Nearly three years ago, we embarked on
              this entrepreneurial venture together, and today, we stand
              stronger than ever, both as individuals and as business owners. We
              are profoundly grateful for the remarkable love that visitors have
              received from every corner since the inception of our journey. As
              we continue to serve and thrive, we invite you to join us for the
              exciting adventures and milestones that lie ahead. Thank you for
              being a part of our story.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img src={couple} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
