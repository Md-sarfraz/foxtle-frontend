import React from "react";
import PageBanner from "@/components/PageBanner";
import digitalBanner from "../assets/images/front-bg-image.gif";

const DigitalMarketing = () => {
  return (
    <>
      <PageBanner
        title="Digital Marketing"
        subtitle="Grow your business with data-driven marketing strategies."
        backgroundImage={digitalBanner}
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold mb-4">Our Digital Marketing Services</h2>
        <p className="text-gray-600">
          We provide SEO, PPC, social media, and content marketing solutions to increase your online visibility.
        </p>
      </div>
    </>
  );
};

export default DigitalMarketing;
