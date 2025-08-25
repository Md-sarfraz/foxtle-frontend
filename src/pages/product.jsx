import React from "react";
import PageBanner from "../components/PageBanner";
import productBanner from "../assets/images/front-bg-image.gif";
import bgPatternImage from "../assets/images/bg-pattern.png";
import mobileScreen from "../assets/images/mobile-screen.png";
import PricingSection from "@/components/priceSection";
import HowItWorks from "@/components/howItWorks";

const Product = () => {
  return (
    <>
      {/* Agar PageBanner use karna ho to isko uncomment kijiye */}
      {/* <PageBanner
        title="Our Products"
        subtitle="Explore our innovative solutions tailored for you."
        backgroundImage={productBanner}
      /> */}

      {/* App Showcase Section */}
      <section className="relative overflow-hidden w-screen  h-[80svh] md:h-screen">
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
        <PricingSection/>
      </div>

      <div>
        <HowItWorks/>
      </div>

      
    </>
  );
};

export default Product;
