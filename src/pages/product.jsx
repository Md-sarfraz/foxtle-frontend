import React, { useEffect } from "react";
import PageBanner from "../components/PageBanner";
import productBanner from "../assets/images/front-bg-image.gif";
import bgPatternImage from "../assets/images/bg-pattern.png";
import mobileScreen from "../assets/images/mobile-screen.png";
import PricingSection from "@/components/priceSection";
// import ContactSection from "@/components/contactSection";
import HowItWorks from "@/components/howItWorks";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import logo4 from "../assets/images/logo4.png";
import TestimonialsSection from "@/components/customer reviews";
// import FAQSection from "@/components/faqSection";

const Product = () => {

      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <>
      {/* Agar PageBanner use karna ho to isko uncomment kijiye */}
      {/* <PageBanner
        title="Our Products"
        subtitle="Explore our innovative solutions tailored for you."
        backgroundImage={productBanner}
      /> */}

      {/* App Showcase Section */}
      <section className="relative overflow-hidden w-screen  h-[100svh] md:h-screen">
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#171C28] to-[#FF5200]"></div>

          {/* Pattern Image */}
          <div className="absolute inset-0 opacity-30">
            <img
              src={bgPatternImage}
              alt="pattern"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="z-10 text-center text-white px-6">
            <h1 className="text-2xl md:text-4xl font-bold max-w-4xl mx-auto leading-snug mb-20 md:mb-32">
              Delivering smart school management <br />
              system solutions for your school
            </h1>

            {/* Mobile Screen Image */}
            <div
              className="
    absolute 
    inset-x-0 bottom-0   /* full width cover karega aur base se chipka rahega */
    flex justify-center   /* center horizontally karna hai to */
  "
            >
              <img
                src={mobileScreen}
                alt="App Screenshot"
                className="h-[190px] w-auto md:h-[250px] object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      <div>
        <PricingSection />
      </div>

      <div>
        <HowItWorks />
      </div>

      <main className="h-auto bg-white py-16 pt-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Trust Section */}
          <section className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-10">
              Used by 500+ schools across the world
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-16 items-center justify-items-center">
              <img
                src={logo1}
                alt="Julius Berger"
                className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src={logo2}
                alt="Bechtel"
                className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src={logo3}
                alt="Damac"
                className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src={logo4}
                alt="Bechtel"
                className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src={logo1}
                alt="Kiewit"
                className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src={logo2}
                alt="Julius Berger"
                className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src={logo3}
                alt="Bechtel"
                className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src={logo4}
                alt="Damac"
                className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src={logo1}
                alt="Kiewit"
                className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img
                src={logo2}
                alt="Julius Berger"
                className="h-8 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </section>
        </div>
      </main>

      {/* <div>
        <ContactSection/>
      </div> */}

      <div>
        <TestimonialsSection/>
      </div>

      {/* <div>
        <FAQSection/>
      </div> */}



    </>
  );
};

export default Product;
