import React, { useEffect } from "react";
import PageBanner from "@/components/PageBanner";
import webBanner from "../assets/images/front-bg-image.gif";
import bgImg1 from "../assets/images/bgImg1.png"
import serviceShape1 from "../assets/images/serviceShape1.png";
import degitalMarketingPerson from "../assets/images/webdevlopmentImg1.png";
import DigitalMarketingBenefits from "@/components/degitalMarketingBenifits";
import DigitalMarketingServices from "@/components/degitalMarketingService";
// import ContactSection from "@/components/contactSection";
// import FAQSection from "@/components/faqSection";
import TestimonialsSection from "@/components/customer reviews";

const WebDevelopment = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageBanner
        title="Web Development"
        subtitle="Modern, responsive, and scalable web solutions."
        backgroundImage={webBanner}
      />

      {/* socail Media Section */}
      <div className="min-h-[80vh] bg-white relative overflow-hidden pt-10">
        {/* Right-side decorative background shape */}
        <div className="absolute top-20 sm:top-24 md:top-28 lg:top-32 right-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] pointer-events-none z-0">
          <img
            src={bgImg1}
            alt="Decorative shape"
            className="object-contain w-full h-full"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left order-2 lg:order-1">
              {/* Heading */}
              <h1 className="text-lg sm:text-2xl lg:text-3xl font-normal text-gray-900 leading-snug">
                The Best{" "}
                <span className="font-bold text-black">
                  Digital marketing agency in India
                </span>{" "}
                is only one <br className="hidden sm:block" /> call away
              </h1>

              {/* Orange left border quote */}
              <div className="pl-3 border-l-4 border-orange-500 inline-block text-left">
                <p className="text-gray-800 text-sm sm:text-base font-medium leading-relaxed">
                  Business without the use of digital marketing is <br />
                  like a car without a steering
                </p>
              </div>

              {/* Description */}
              <div className="space-y-3 text-gray-600 text-xs sm:text-sm leading-relaxed">
                <p>
                  Digital marketing is always a significant component of any company's
                  entire marketing strategy. There has never been a way to be in such
                  good and engaging contact with your customers, and nothing else can
                  give the level of personalization that digital marketing provides.
                </p>

                <p>
                  Foxtle is a digital marketing agency in Lucknow where marketing experts
                  with the best talent create performing marketing strategies for various
                  clients. Our team crafts personalized tactics and delivers satisfactory
                  results in terms of sales, brand authority, and awareness.
                </p>
              </div>
            </div>

{/* Right Image */}
<div className="flex justify-end relative order-1 lg:order-2">
  <div className="relative flex items-center justify-end lg:justify-end lg:-mt-12 w-full">
    {/* Service Shape */}
    <img
      src={serviceShape1}
      alt="Decorative shape"
      className="absolute bottom-0 left-0 sm:-left-10 w-20 sm:w-28 lg:w-56 object-contain z-0"
    />

    {/* Person Image */}
<img
  src={degitalMarketingPerson}
  alt="Digital marketing professional"
  className="
    relative z-10 
    h-64 sm:h-80 md:h-[400px] lg:h-[450px] 
    w-auto object-contain
    ml-auto 
    -mr-6 sm:-mr-8 
    lg:ml-0 lg:mr-0 
    lg:translate-x-20 lg:right-[-70px]
  "
/>


  </div>
</div>



            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start order-3 lg:col-span-2">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 sm:px-6 py-3 rounded-full text-sm sm:text-base font-medium flex items-center gap-2 transition-all shadow-sm hover:shadow-md mt-6">
                Get a free Quote now
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>


        <div>
          <DigitalMarketingServices />
        </div>
        {/* <div>
          <ContactSection />
        </div> */}
        <div>
          <DigitalMarketingBenefits />
        </div>
        <div>
          <TestimonialsSection />
        </div>
        {/* <div>
          <FAQSection />
        </div> */}
      </div>
    </>
  );
};

export default WebDevelopment;
