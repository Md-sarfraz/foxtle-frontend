import PageBanner from "../components/PageBanner";
import React from "react";
import aboutBanner from "../assets/images/front-bg-image.gif";
import aboutImg1 from "../assets/images/aboutImg1.png";
import { ArrowRight, Clipboard, Cloud, Smartphone } from "lucide-react"
import ourProductImg1 from "../assets/images/ourProduct-img1.png"
import ourProductImg2 from "../assets/images/ourProduct-img2.png"
import ourProductImg3 from "../assets/images/ourProduct-img3.png"
import ContactSection from "@/components/contactSection";
import bgImg1 from "../assets/images/bgImg1.png"
import personImg1 from "../assets/images/personImg1.png"
import TestimonialsSection from "@/components/customer reviews";


const services = [
  "Digital Marketing",
  "Search Engine Optimization",
  "PPC Advertising",
  "Graphic Designing",
  "Custom Software Development",
  "Blue Tick Verification",
  "PR Agency",
  "3D Walkthrough",
  "Social Media Marketing",
  "Lead Generation",
  "Web Development",
  "E-Commerce Development",
  "Application Development",
  "Influencer Marketing",
  "Print Media",
  "Video Marketing",
];

const AboutUs = () => {
  return (
    <div className="">
      <>
        <PageBanner
          title="About Us"
          subtitle="Learn more about Foxtle and our journey in digital marketing."
          backgroundImage={aboutBanner}
        />

        {/* Rest of About Page */}
      </>

      <div className="min-h-screen bg-white pb-10">
        {/* Top Section - About Foxtle */}
        <div className="container mx-auto px-4 pt-20 max-w-6xl">
          <div className="">
            <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              ABOUT - Foxtle
            </h1>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-gray-700 text-sm leading-relaxed">
                Foxtle was started back in 2015 with a vision to provide the
                best digital services in India. Our expertise focuses on
                computing and engagement to all of our clients. With this
                programmatic fundamental of our team is to make the client's
                investment profitable. The team at Foxtle excels at various
                services like 3d animation, online media marketing, google ads,
                designing, website development, and much more.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Digital marketing is essential because these digital platforms
                are running with many active users, which is considered good
                opportunity. Also, while delivering the best conversion rates,
                digital marketing is not an expensive. That's why digital
                marketing is considered essential. But digital marketing is not
                an easy process, and it demands a lot of unique strategies and
                immense focus. Still, some growth hacks can help you a lot in
                digital marketing, and we will discuss them.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Image + Content */}
        <div className="flex flex-col lg:flex-row items-center relative">
          {/* Left side - Image */}
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src={aboutImg1}
              alt="Professional developer with laptop"
              className="w-full sm:w-3/4 md:w-2/3 lg:w-[600px] xl:w-[750px] h-auto object-contain"
            />
          </div>



          {/* Right side - Define us Content */}
          <div className="w-full lg:w-2/3 mt-8 lg:mt-0 lg:px-28 xl:px-24 px-8">
            <p className="text-sm font-semibold pb-4 text-gray-600">Define us!</p>
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900 mb-4">
              Welcome to Flown Developer - A Top Web Development Company in India
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              100% Trusted and Registered Company in India with a professional website
              that provides the best web development and web design services in India.
              We are a company that offers multi-functional web portals, and we make
              sure that a well-developed and attractive website can help our clients to
              record ROI-driven results.
            </p>
          </div>
        </div>

      </div>



      {/*our product section*/}
      <div className="bg-black text-white">
        <div className="container mx-auto px-6 py-10">
          {/* Header */}
          <h2 className="text-2xl font-medium mb-12 text-center md:text-left">
            Our Product
          </h2>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
            {/* School Management System */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center">
                <img src={ourProductImg1} alt="School Management System" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">School Management System</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Drive Your Brand to New Heights with Mobile Billboards
                </p>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Learn more
                </a>
              </div>
            </div>

            {/* Patient Management System */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center">
                <img src={ourProductImg2} alt="Patient Management System" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Patient Management System</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Efficient patient management system streamlining healthcare operations, enhancing patient care, and
                  optimizing medical practice workflows.
                </p>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Learn more
                </a>
              </div>
            </div>

            {/* Database Management System */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center">
                <img src={ourProductImg3} alt="Database Management System" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Database Management System</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Cloud-based Database Management System (DBMS) SaaS offering seamless data storage, organization, and
                  retrieval with scalability.
                </p>
                <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Learn more
                </a>
              </div>
            </div>
          </div>

          {/* Explore All Products Link */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="inline-flex items-center text-sm text-gray-300 hover:text-white transition-colors group"
            >
              EXPLORE ALL PRODUCTS
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <>
        <ContactSection />
      </>


      <section className="relative bg-white overflow-hidden py-12 lg:py-20">
        {/* Right-side decorative background shape */}
        <div className="absolute top-20 sm:top-24 md:top-28 lg:top-32 right-0 w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] pointer-events-none z-0">
          <img
            src={bgImg1}
            alt="Decorative shape"
            className="object-contain w-full h-full"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            {/* Left side content */}
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
                What do we <span className="font-bold text-black">Offer</span>
              </h2>

              <p className="text-gray-500 text-sm sm:text-base lg:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
                Foxtle offers a range of services in the digital marketing field.
                All our services are powered by professionals and provide the best
                result to all of our clients. Have a look over our services.
              </p>

              {/* Services list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md mx-auto lg:mx-0">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full inline-block"></span>
                    <span className="text-gray-700 text-xs sm:text-sm lg:text-sm">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side illustration */}
            <div className="relative flex justify-center lg:justify-end z-10">
              <img
                src={personImg1}
                alt="Professional man with laptop"
                className="object-contain w-[260px] sm:w-[320px] md:w-[400px] lg:max-w-[500px] h-auto relative -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-10 lg:-mr-20"
              />

            </div>

                  {/* Bottom Waves */}
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-full sm:w-3/4 text-orange-500">
        <svg viewBox="0 0 1200 80" className="w-full h-10 sm:h-14" preserveAspectRatio="none">
          <path
            d="M0,60 C300,90 900,10 1200,50 L1200,80 L0,80 Z"
            fill="currentColor"
            opacity="0.7"
          />
        </svg>
      </div>
          </div>
        </div>
      </section>



      <TestimonialsSection />


    </div>
  );
};

export default AboutUs;
