import React from "react";
import { Check, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

// ✅ Images
import standardPlanImg from "../assets/images/standardPlan-img.png";
import premiumPlanImg from "../assets/images/premiumPlan-img.png";
import customPlanImg from "../assets/images/customPlan-img.png";
import baseImg1 from "../assets/images/baseImg1.png";
import baseImg2 from "../assets/images/baseImg2.png";

// ✅ Dummy Features (aap apna actual data yaha dal do)
const standardFeatures = [
  "Assignment",
  "Fees",
  "Exams",
  "Exams",
  "Exams",
  "Exams",
  "Exams",
  "Exams",
  "5 Free Email Id",
  "SEO Friendly Application",
  "100% Responsive Website",
  "Live Chat Integration",
  "Payment Gateway Integration",
  "Social Media Integration",
  "Call Button Integration",
  "WhatsApp Button Integration",
  "Inquiry Form",
  "1 Year Free Technical Support For Website",
  "Annual Renewal For subscription $ 7,999.",
]

const premiumFeatures = [
  "Assignment",
  "Assignment",
  "Assignment",
  "Assignment",
  "Assignment",
  "Assignment",
  "Assignment",
  "Assignment",
  "Assignment",
  "Assignment",
  "10 Free Email Id",
  "SEO Friendly Website",
  "100% Responsive Website",
  "Live Chat Integration",
  "Payment Gateway Integration",
  "Social Media Integration",
  "Call Button Integration",
  "WhatsApp Button Integration",
  "Inquiry Form",
  "Woocommerce Features",
  "1 Year Free Technical Support For Website",
  "Annual Renewal For Hosting Rs. 3000.",
]

const customFeatures = [
  "Assignment",
  "Fees",
  "Exams",
  "Exams",
  "Exams",
  "Exams",
  "Exams",
  "Exams",
  "5 Free Email Id",
  "SEO Friendly Application",
  "100% Responsive Website",
  "Live Chat Integration",
  "Payment Gateway Integration",
  "Social Media Integration",
  "Call Button Integration",
  "WhatsApp Button Integration",
  "Inquiry Form",
  "1 Year Free Technical Support For Website",
  "Annual Renewal For subscription $ 7,999.",
]

const PricingSection = () => {
  return (
    <section className="bg-white">
      <div className="min-h-screen bg-gray-50 relative overflow-hidden pt-20">
        {/* Heading Section */}
        <div className="text-center py-10 sm:py-12 px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Plans & Pricing
          </h2>
          <p className="text-gray-600 max-w-3xl text-sm sm:text-base mx-auto leading-relaxed">
            We are among India's best web solution companies committed to
            offering full ROI-driven customized web services at affordable
            prices. Due to its excellent e-commerce website and graphics
            designs, Flown Developer is one of the top web development
            companies in India.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-8 gap-x-6 sm:gap-x-8 justify-center">

            {/* ---- Standard Plan ---- */}
            <Card className="relative bg-white border-2 border-orange-200 rounded-2xl overflow-hidden shadow-lg w-full max-w-sm mx-auto">
              <div className="flex justify-center mt-4 sm:mt-5">
                <span className="px-3 py-1.5 rounded-sm text-white text-xs sm:text-sm font-semibold bg-gradient-to-r from-gray-800 to-orange-600 shadow-md">
                  Standard Plan
                </span>
              </div>

              <div className="p-4 sm:p-6 pb-14 sm:pb-16">
                <div className="h-32 sm:h-40 rounded-xl mb-4 flex items-center justify-center">
                  <img
                    src={standardPlanImg}
                    alt="Standard Plan Illustration"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="text-center mb-4">
                  <div className="text-gray-400 line-through text-lg sm:text-xl">
                    $10,000
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-500">
                    $7,999
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">
                    (+ 18% GST $1440)
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">
                    Features Includes
                  </h4>
                  <div className="space-y-1.5">
                    {standardFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <button className="relative group flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold border border-black overflow-hidden rounded-md">
                    <span className="absolute inset-0 bg-orange-500 w-1/2 group-hover:w-full transition-all duration-500"></span>
                    <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
                      CALL NOW
                    </span>
                    <ChevronRight
                      size={14}
                      className="ml-2 relative z-10 text-black group-hover:text-white transition-colors duration-500"
                    />
                  </button>
                </div>
              </div>

              {/* Wave Bottom */}
              <div className="absolute bottom-0 left-0 w-full">
                <img src={baseImg2} alt="Wave Design" className="w-full h-auto object-cover" />
              </div>
            </Card>

            {/* ---- Premium Plan ---- */}
            <Card className="relative bg-gradient-to-b from-orange-500 to-red-600 text-white rounded-2xl overflow-hidden shadow-xl transform scale-105 w-full max-w-sm mx-auto">
              <div className="flex items-center justify-center mt-4 sm:mt-5">
                <div className="bg-white/20 text-xs sm:text-sm px-3 py-1.5 rounded-lg font-medium">
                  Premium Plan
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="h-28 sm:h-32 bg-white rounded-full mb-4 flex items-center justify-center mx-auto w-28 sm:w-32">
                  <img
                    src={premiumPlanImg}
                    alt="Premium Plan Illustration"
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
                  />
                </div>

                <div className="text-center mb-4">
                  <div className="text-orange-200 line-through text-lg sm:text-xl">
                    $20,000
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    $13,999
                  </div>
                  <div className="text-xs sm:text-sm text-orange-200 mt-1">
                    (+ 18% GST $2520)
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">
                    Features Includes
                  </h4>
                  <div className="space-y-1.5">
                    {premiumFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-white">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <button className="relative group flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold border border-black overflow-hidden rounded-md">
                    <span className="absolute inset-0 bg-orange-500 w-1/2 group-hover:w-full transition-all duration-500"></span>
                    <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
                      CALL NOW
                    </span>
                    <ChevronRight
                      size={14}
                      className="ml-2 relative z-10 text-black group-hover:text-white transition-colors duration-500"
                    />
                  </button>
                </div>
              </div>

              {/* Wave Bottom */}
              <div className="w-full">
                <img src={baseImg1} alt="Wave Design" className="w-full h-12 sm:h-14" />
              </div>
            </Card>

            {/* ---- Custom Plan ---- */}
            <Card className="relative bg-white border-2 border-orange-200 rounded-2xl overflow-hidden shadow-lg w-full max-w-sm mx-auto">
              <div className="flex justify-center mt-4 sm:mt-5">
                <span className="px-3 py-1.5 rounded-sm text-white text-xs sm:text-sm font-semibold bg-gradient-to-r from-gray-800 to-orange-600 shadow-md">
                  Custom Plan
                </span>
              </div>

              <div className="p-4 sm:p-6 pb-14 sm:pb-16">
                <div className="h-28 sm:h-32 bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                  <img
                    src={customPlanImg}
                    alt="Custom Plan Illustration"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="text-center mb-4">
                  <div className="text-gray-400 line-through text-lg sm:text-xl">
                    $ ???
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-500">
                    $ ????
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">
                    (+ 18% GST Applicable)
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">
                    Features Includes
                  </h4>
                  <div className="space-y-1.5">
                    {customFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <button className="relative group flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold border border-black overflow-hidden rounded-md">
                    <span className="absolute inset-0 bg-orange-500 w-1/2 group-hover:w-full transition-all duration-500"></span>
                    <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
                      CALL NOW
                    </span>
                    <ChevronRight
                      size={14}
                      className="ml-2 relative z-10 text-black group-hover:text-white transition-colors duration-500"
                    />
                  </button>
                </div>
              </div>

              {/* Wave Bottom */}
              <div className="absolute bottom-0 left-0 w-full">
                <img src={baseImg2} alt="Wave Design" className="w-full h-auto object-cover" />
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Waves */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:w-3/4 text-orange-500">
          <svg viewBox="0 0 1200 80" className="w-full h-10 sm:h-14" preserveAspectRatio="none">
            <path
              d="M0,60 C300,90 900,10 1200,50 L1200,80 L0,80 Z"
              fill="currentColor"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
