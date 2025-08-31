import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import contactImage from "../assets/images/contactImage.png"; // update the path accordingly

const ContactSection = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Left Side Form */}
          <div className="flex justify-center">
            <Card className="text-white bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-none max-w-sm w-full p-4 shadow-lg">
              <CardContent className="p-4 sm:p-5">

                {/* Heading */}
                <h2 className="text-base sm:text-lg font-semibold text-center mb-1">
                  Submit Your Query
                </h2>
                <p className="text-center text-white/70 mb-4 text-xs sm:text-sm">
                  We will be glad to help you
                </p>

                {/* Form */}
                <form className="space-y-2.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <Input
                      placeholder="Your Name"
                      className="bg-transparent border border-white text-white placeholder:text-white/60 text-xs sm:text-sm rounded-none"
                    />
                    <Input
                      placeholder="Your E-mail"
                      className="bg-transparent border border-white text-white placeholder:text-white/60 text-xs sm:text-sm rounded-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <Input
                      placeholder="Phone"
                      className="bg-transparent border border-white text-white placeholder:text-white/60 text-xs sm:text-sm rounded-none"
                    />
                    <Input
                      placeholder="Subject"
                      className="bg-transparent border border-white text-white placeholder:text-white/60 text-xs sm:text-sm rounded-none"
                    />
                  </div>
                  <Textarea
                    placeholder="Message"
                    rows={3}
                    className="bg-transparent border border-white text-white placeholder:text-white/60 text-xs sm:text-sm rounded-none"
                  />

                  {/* Half Orange Button */}
                  <div className="flex justify-center pt-1">
                    <Button className="relative group w-full sm:w-[200px] py-1.5 text-xs sm:text-sm font-medium border border-black overflow-hidden rounded-none">
                      {/* Orange Background Animation */}
                      <span className="absolute inset-y-0 left-0 w-1/2 bg-orange-500 group-hover:w-full transition-all duration-500"></span>

                      {/* Button Text */}
                      <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
                        SEND MESSAGE
                      </span>
                    </Button>
                  </div>

                </form>

                {/* Contact Info Bottom */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-[11px] sm:text-xs text-white/70 space-y-1.5 sm:space-y-0">
                  <div className="flex items-center">
                    <Phone className="w-3.5 h-3.5 mr-1.5" />
                    +91-6201740381
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-3.5 h-3.5 mr-1.5" />
                    support@foxtel.com
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side Illustration */}
          <div className="flex flex-col items-center justify-center text-center lg:text-left pt-8">
            <p className="text-gray-600 mb-1 text-sm sm:text-base">
              We are available 24×7 for you!
            </p>
            <h3 className="text-lg sm:text-xl font-semibold mb-5">Contact Us</h3>
            <img
              src={contactImage}
              alt="Contact Support"
              className="max-w-[180px] sm:max-w-xs mx-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
