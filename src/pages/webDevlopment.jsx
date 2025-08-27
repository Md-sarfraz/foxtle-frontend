import React from "react";
import PageBanner from "@/components/PageBanner";
import webBanner from "../assets/images/front-bg-image.gif";

const WebDevelopment = () => {
  return (
    <>
      <PageBanner
        title="Web Development"
        subtitle="Modern, responsive, and scalable web solutions."
        backgroundImage={webBanner}
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold mb-4">Our Development Process</h2>
        <p className="text-gray-600">
          We build fast, secure, and SEO-friendly websites tailored to your business needs.
        </p>
      </div>
    </>
  );
};

export default WebDevelopment;
