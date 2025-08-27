import React from "react";
import PageBanner from "@/components/PageBanner";
import socialBanner from "../assets/images/front-bg-image.gif";

const SocialMedia = () => {
  return (
    <>
      <PageBanner
        title="Social Media Marketing"
        subtitle="Engage your audience across social platforms."
        backgroundImage={socialBanner}
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold mb-4">Our Social Media Strategy</h2>
        <p className="text-gray-600">
          We help brands connect with their audience on Facebook, Instagram, LinkedIn, and more.
        </p>
      </div>
    </>
  );
};

export default SocialMedia;
