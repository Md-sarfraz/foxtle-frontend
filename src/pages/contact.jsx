import React, { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import contactBanner from "../assets/images/front-bg-image.gif";

const Contact = () => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with Foxtle team for any queries."
        backgroundImage={contactBanner}
      />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Contact form or info */}
        <h2 className="text-xl font-semibold mb-4">We’d love to hear from you!</h2>
        <p className="text-gray-600">Contact form or address goes here...</p>
      </div>
    </>
  );
};

export default Contact;
