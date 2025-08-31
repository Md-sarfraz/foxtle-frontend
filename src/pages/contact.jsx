import React, { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import contactBanner from "../assets/images/front-bg-image.gif";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"
import ContactSection from "@/components/contactSection";
import foxtleLogo from "../assets/images/foxtle-logo.png"
import ContactCard from "@/components/contactCard";

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
      <div className="min-h-screen  bg-white flex flex-col items-center justify-center  py-12">

        <div className="flex flex-col justify-center items-center">
          <div className="w-16 h-16 rounded-full bg-gray-500 flex justify-center items-center">
            <img src={foxtleLogo} alt="" className="w-10 h-10" />
          </div>
          <p className='text-xs text-gray-400 font-bold pt-1'>Contact With Us</p>
          <h1 className='font-semibold text-4xl text-center pb-10'>Feel Free to Write us <br /> Anytime</h1>
        </div>
        <div className="w-full h-full">
          <ContactSection />
        </div>
<div className="w-[90%] max-w-6xl mx-auto 
                flex flex-col sm:flex-row 
                gap-6 sm:gap-10 
                justify-center items-stretch">
  <ContactCard
    title="Call Us"
    description="+91 98765 43210"
    icon={Phone}
  />

  <ContactCard
    title="Email Us"
    description="support@example.com"
    icon={Mail}
  />

  <ContactCard
    title="Visit Us"
    description="123 Street, New Delhi"
    icon={MapPin}
  />
</div>



        {/* Google Maps Section */}
        <div className="w-full max-w-6xl mt-10 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.69693954148!2d77.206!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1a5a9f0c19%3A0x123456789abcdef!2sNew%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1699988888888!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
