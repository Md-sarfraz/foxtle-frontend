import React from "react";
import PageBanner from "../components/PageBanner";
import serviceBanner from "../assets/images/front-bg-image.gif";

const Service = () => {
  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Discover how Foxtle can help grow your business."
        backgroundImage={serviceBanner}
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Services details */}
        <h2 className="text-xl font-semibold mb-4">What We Offer</h2>
        <p className="text-gray-600">Details about services...</p>
      </div>
    </>
  );
};

export default Service;
