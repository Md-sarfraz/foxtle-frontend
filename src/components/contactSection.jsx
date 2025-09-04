import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import contactImage from "../assets/images/contactImage.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success or error

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.placeholder.toLowerCase()]: e.target.value });
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("http://localhost:8082/v1/api/contact/submit", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Side Form */}
          <div className="flex justify-center">
            <Card className="text-white bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-none max-w-sm w-full p-4 shadow-lg">
              <CardContent className="p-4 sm:p-5">
                <h2 className="text-base sm:text-lg font-semibold text-center mb-1">
                  Submit Your Query
                </h2>
                <p className="text-center text-white/70 mb-4 text-xs sm:text-sm">
                  We will be glad to help you
                </p>

                {/* Form */}
                <form className="space-y-2.5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <Input
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-transparent border border-white text-white placeholder:text-white/60 text-xs sm:text-sm rounded-none"
                      required
                    />
                    <Input
                      placeholder="Email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-transparent border border-white text-white placeholder:text-white/60 text-xs sm:text-sm rounded-none"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <Input
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-transparent border border-white text-white placeholder:text-white/60 text-xs sm:text-sm rounded-none"
                    />
                    <Input
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-transparent border border-white text-white placeholder:text-white/60 text-xs sm:text-sm rounded-none"
                    />
                  </div>
                  <Textarea
                    placeholder="Message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-transparent border border-white text-white placeholder:text-white/60 text-xs sm:text-sm rounded-none"
                    required
                  />

                  {/* Button */}
                  <div className="flex justify-center pt-1">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="relative group w-full sm:w-[200px] py-1.5 text-xs sm:text-sm font-medium border border-black overflow-hidden rounded-none"
                    >
                      <span className="absolute inset-y-0 left-0 w-1/2 bg-orange-500 group-hover:w-full transition-all duration-500"></span>
                      <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
                        {loading ? "Sending..." : "SEND MESSAGE"}
                      </span>
                    </Button>
                  </div>
                </form>

                {/* Success/Error Message */}
                {status === "success" && (
                  <p className="text-green-300 text-center mt-3 text-sm">
                    ✅ Your query has been submitted!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-300 text-center mt-3 text-sm">
                    ❌ Something went wrong. Please try again.
                  </p>
                )}

                {/* Contact Info */}
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

          {/* Right Side */}
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
