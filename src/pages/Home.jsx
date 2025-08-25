// export default function Home() {
//   return (
//     <div className="p-6 text-center">
//     <h1 className="text-3xl font-bold text-red-600">Home Page</h1>
//     </div>
//   );
// }
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useState, useEffect } from "react"
import CountUp from "react-countup";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Star,
  Target,
  TrendingUp,
  Smartphone,
  Globe,
  Search,
  Mail,
  BarChart3,
  Megaphone,
  PenTool,
  Check,
  Phone,
  Quote,
  MapPin,
  Clock,
  Share2,
  MousePointer,
  Code,
  ShoppingCart,
  Settings,
} from "lucide-react"

import bgGif from "../assets/images/front-bg-image.gif";
import mobileScreen from "../assets/images/mobile-screen.png";
// import mobileImage2 from "../assets/images/mobile-img2.png";
import bgPatternImage from "../assets/images/bg-pattern.png";
import bgNumber from "../assets/images/bg-number.png"
import standardPlanImg from "../assets/images/standardPlan-img.png"
import premiumPlanImg from "../assets/images/premiumPlan-img.png"
import customPlanImg from "../assets/images/customPlan-img.png"
import baseImg1 from "../assets/images/baseImg1.png"
import baseImg2 from "../assets/images/baseImg2.png"
import contactImage from "../assets/images/contactImage.png"
import FAQSection from "@/components/faqSection";



const services = [
  {
    id: 1,
    title: "Digital Marketing",
    description:
      "We are one of the most trusted digital media companies in India, owing to our successful track record of 25+ years in serving our clients with innovative and specialized solutions.",
    icon: Megaphone,
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description:
      "The best way to build marketing services and reach the target audience. Our social media marketing services help you to build brand awareness and drive traffic to your website.",
    icon: Share2,
  },
  {
    id: 3,
    title: "Search Engine Optimization",
    description:
      "The perfect SEO services will make your website rank higher in search results. Our SEO services help you to increase your website traffic and generate more leads.",
    icon: Search,
  },
  {
    id: 4,
    title: "Lead Generation",
    description:
      "Lead generation is the process of attracting and converting strangers and prospects into someone who has indicated interest in your company's product or service.",
    icon: Target,
  },
  {
    id: 5,
    title: "PPC Advertising",
    description:
      "Get immediate results and drive traffic to your website with our PPC advertising services. We help you to create effective campaigns that deliver results.",
    icon: MousePointer,
  },
  {
    id: 6,
    title: "Web Development",
    description:
      "Modern & fully functional website development services. We create responsive and user-friendly websites that help you to grow your business online.",
    icon: Code,
  },
  {
    id: 7,
    title: "SEO",
    description:
      "That makes engines understand exactly to know about your business. Our marketing services help you to rank higher in search results and drive more traffic.",
    icon: BarChart3,
  },
  {
    id: 8,
    title: "E-Commerce Development",
    description:
      "Get the best e-commerce solutions from professionals. Our ecommerce development services help you to create online stores that drive sales and revenue.",
    icon: ShoppingCart,
  },
  {
    id: 9,
    title: "Custom Software Development",
    description:
      "From concept to execution, we deliver innovative software solutions that help you to streamline your business processes and improve efficiency.",
    icon: Settings,
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Innovations Inc",
    review: "Outstanding digital marketing results! Our online presence has grown exponentially and customer engagement is at an all-time high.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    company: "Growth Solutions Ltd",
    review: "The team's expertise in SEO and content marketing helped us achieve 300% growth in organic traffic within 6 months.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    company: "E-commerce Plus",
    review: "Professional, creative, and results-driven. They transformed our brand identity and significantly boosted our sales conversions.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "David Thompson",
    company: "Startup Ventures",
    review: "Exceptional service quality and innovative strategies. Their social media campaigns generated incredible ROI for our business.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Lisa Anderson",
    company: "Digital First Co",
    review: "Amazing team with deep industry knowledge. They helped us establish a strong digital footprint and attract quality leads.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  }
];

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



export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])


  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-[100vh] bg-background ">
      {/* Hero Section */}
      <section className="relative bg-sidebar min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background GIF */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgGif}
            alt="Background Animation"
            className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(252.58deg, rgba(23, 28, 40, 0.5) 0%, rgba(255, 82, 0, 0.5) 100%)",
            }}
          ></div>
        </div>

        {/* Floating glow dots */}
        <div className="absolute inset-0 opacity-10 z-10">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-3 sm:w-4 h-3 sm:h-4 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-20 sm:top-40 right-16 sm:right-32 w-2 sm:w-3 h-2 sm:h-3 bg-secondary rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-16 sm:bottom-32 left-1/4 sm:left-1/3 w-2 h-2 bg-primary rounded-full animate-pulse delay-700"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-4 sm:w-5 h-4 sm:h-5 bg-secondary rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl pt-24 font-bold text-sidebar-foreground mb-4 sm:mb-6 leading-tight">
            The Best Digital Marketing Company In
            <br className="hidden sm:block" />
            <span className="text-primary">India For Your Successful Business!</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-sm text-white text-sidebar-foreground/80 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
            Foxtle is a digital marketing agency in Lucknow, excelling in the market.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center justify-center gap-3 py-2 w-[180px] 
  rounded-full bg-[#FF3B00] text-white font-semibold shadow-lg 
  overflow-hidden transition-all duration-300
  border-2 border-transparent hover:border-white hover:bg-transparent hover:text-white"
            >
              {/* Glow effect */}
              <span className="absolute inset-0 rounded-full bg-[#FF3B00] blur-xl opacity-40"></span>

              {/* Button content */}
              <span className="relative z-10 text-sm">Explore More</span>
              <span className="relative z-10 flex items-center justify-center w-9 h-9 bg-white rounded-full">
                <ArrowRight className="w-5 h-5 text-[#FF3B00]" />
              </span>
            </motion.button>

          </div>
        </div>
      </section>



      {/* Stats Section */}
      {/* <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">1200+</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">Full-Service Digital Agency</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto lg:mx-0">
                Providing you with diverse and effective digital marketing solutions to help your business grow and
                succeed in the digital landscape.
              </p>
              <Button className="bg-primary hover:bg-primary/90">Learn More</Button>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <Card>
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Happy Clients</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">98%</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Success Rate</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Support</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">5+</div>
                  <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}
      <section className="flex flex-col md:flex-row items-center justify-center h-[100vh] pt-24">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between h-[90vh] w-[90%] px-6 md:px-16 py-10 bg-[#f3f0f0] gap-12">

          {/* Left Side */}
          <div className="flex flex-col items-start md:items-start text-left md:text-left">
            <h1
              className="text-[50px] md:text-[90px] font-extrabold leading-none bg-clip-text text-transparent"
              style={{
                backgroundImage: `url(${bgNumber})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <CountUp end={1200} duration={3} separator="," />+
            </h1>
            <p className="text-base md:text-xl font-semibold mt-2">Customers</p>

            {/* Slider Arrows Box */}
            <div className="flex border mt-6 border-black">
              {/* Left Arrow */}
              <div className="flex">
                <div className="w-6 h-10 md:w-8 md:h-12 bg-orange-500"></div>
                <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-gray-700">
                  <ChevronLeft size={20} />
                </button>
              </div>

              {/* Right Arrow */}
              <div className="flex">
                <div className="w-6 h-10 md:w-8 md:h-12 bg-orange-500"></div>
                <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white text-gray-700">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="max-w-md md:max-w-xl text-left md:text-left">
            <h2 className="text-xl md:text-4xl font-bold mb-4">
              Full-Service Digital <span className="text-gray-700">Agency</span>{" "}
              <span className="font-normal text-gray-500">
                providing growth driven solutions.
              </span>
            </h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              We are one of the most trusted digital media companies in India,
              owing to our successful track record of 25+ years in serving our
              clients with innovative and specialized solutions.
            </p>

            {/* Button */}
            <button className="relative group flex items-center justify-center px-5 py-2 font-semibold border border-black overflow-hidden">
              <span className="absolute inset-0 bg-orange-500 w-1/2 group-hover:w-full transition-all duration-500"></span>
              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
                KNOW MORE
              </span>
              <ChevronRight
                size={18}
                className="ml-2 relative z-10 text-black group-hover:text-white transition-colors duration-500"
              />
            </button>

          </div>
        </div>
      </section>


      {/* Services Section */}
      <div className="flex flex-col items-center pt-24">
        {/* Section Heading */}
        <div className="flex mb-4 items-center gap-3">
          <div className="w-[6px] h-[6px] rounded-full bg-[#A5B7D2]"></div>
          <h2 className="text-xs font-semibold tracking-widest text-[#A5B7D2] uppercase">
            OUR SERVICES
          </h2>
          <div className="w-[6px] h-[6px] rounded-full bg-[#A5B7D2]"></div>
        </div>

        {/* Title & Description */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Gaze a look at Best{" "}
            <span className="text-orange-500">digital marketing services</span> in India
          </h1>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
            All our services are designed and implemented after getting clear approval and understanding their vision.
            Then we provide the best suitable services for them.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer border border-gray-100 hover:border-orange-200 w-[280px]"
                data-aos="zoom-out"
                data-aos-delay={index * 100} // stagger effect
              >
                <div className="p-5 flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="relative mb-3">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    {/* Animated Ring */}
                    <div className="absolute inset-0 w-12 h-12 border-2 border-orange-200 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                    <ChevronRight className="w-4 h-4 text-orange-500" />
                  </div>
                </div>

                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -z-10"></div>
              </div>
            );
          })}
        </div>
      </div>




      {/* App Showcase Section */}
      <section className="relative overflow-hidden pt-20">
        <div
          className="
      relative w-full 
      h-[500px]        /* default height (small devices) */
      md:h-[600px]     /* medium aur upar pe normal height */
      flex items-center justify-center overflow-hidden
    "
        >
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
            <h1
              className="
          text-2xl md:text-4xl 
          font-bold max-w-4xl mx-auto 
          leading-snug 
          mb-20 md:mb-32
        "
            >
              Delivering smart school management <br />
              system solutions for your school
            </h1>

            {/* Mobile Screen Image */}
            <div
              className="
          absolute 
          left-1/2 -translate-x-1/2 flex justify-center items-end
          bottom-[-40px]   /* Mobile ke liye thoda niche chipkane ke liye */
          md:bottom-0      /* Desktop pe bilkul bottom */
        "
            >
              <img
                src={mobileScreen}
                alt="App Screenshot Left"
                className="h-[180px] md:h-[250px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>




      <section>
        <div className="min-h-screen bg-gray-50 relative overflow-hidden pt-20">
          {/* Heading Section */}
          <div className="text-center py-10 sm:py-12 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Plans & Pricing
            </h2>
            <p className="text-gray-600 max-w-3xl text-sm sm:text-xsase mx-auto leading-relaxed">
              We are among India's best web solution companies committed to offering
              full ROI-driven customized web services at affordable prices. Due to its
              excellent e-commerce website and graphics designs, Flown Developer is one
              of the top web development companies in India.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 pb-16 sm:pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-8 gap-x-6 sm:gap-x-8 justify-center">

              {/* Standard Plan */}
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
                    <div className="text-gray-400 line-through text-lg sm:text-xl">$10,000</div>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-500">$7,999</div>
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
                          <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
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
                  <img
                    src={baseImg2}
                    alt="Wave Design"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </Card>

              {/* Premium Plan */}
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
                    <div className="text-orange-200 line-through text-lg sm:text-xl">$20,000</div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">$13,999</div>
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
                          <span className="text-xs sm:text-sm text-white">{feature}</span>
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
                  <img
                    src={baseImg1}
                    alt="Wave Design"
                    className="w-full h-12 sm:h-14"
                  />
                </div>
              </Card>

              {/* Custom Plan */}
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
                    <div className="text-gray-400 line-through text-lg sm:text-xl">$ ???</div>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-500">$ ????</div>
                    <div className="text-xs sm:text-sm text-gray-500 mt-1">
                      (+ 18% GST Applicable )
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
                          <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
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
                  <img
                    src={baseImg2}
                    alt="Wave Design"
                    className="w-full h-auto object-cover"
                  />
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


      {/* Customer Reviews */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-2xl mb-4 shadow-md">
              <Quote className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
              Customer Reviews
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-xl mx-auto mt-4">
              Hear what our clients say about our services
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div
            className="relative max-w-6xl mx-auto"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="overflow-hidden  rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentSlide *
                    (100 / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1))
                    }%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 py-6"
                  >
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 text-center h-full hover:shadow-lg transition-all">
                      {/* Quote Icon */}
                      <div className="flex justify-center mb-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center shadow-sm">
                          <Quote className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-orange-500 text-orange-500 mx-0.5"
                          />
                        ))}
                      </div>

                      {/* Review Text */}
                      <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 italic">
                        "{testimonial.review}"
                      </blockquote>

                      {/* Profile */}
                      <div className="flex items-center justify-center space-x-3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                        />
                        <div className="text-left">
                          <h4 className="text-base font-semibold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow border border-gray-300 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow border border-gray-300 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({
              length:
                testimonials.length -
                (window.innerWidth >= 1024 ? 2 : window.innerWidth >= 640 ? 1 : 0),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                  ? "bg-orange-500 w-6"
                  : "bg-gray-300 hover:bg-orange-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
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
                      <Button className="relative group w-full sm:w-[200px] py-1.5 text-xs sm:text-sm font-medium border border-white overflow-hidden rounded-none">
                        {/* Left Half Orange Fill */}
                        <span className="absolute inset-y-0 left-0 w-1/2 bg-orange-500"></span>
                        {/* Text */}
                        <span className="relative z-10 flex items-center justify-center text-black group-hover:text-white transition-colors duration-500">
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
              <p className="text-gray-600 mb-1 text-sm sm:text-base">We are available 24×7 for you!</p>
              <h3 className="text-lg sm:text-xl font-semibold mb-5">Contact Us</h3>
              <img
                src={contactImage}
                alt="Contact Support"
                className="max-w-[180px] sm:max-w-xs mx-auto"
              />
            </div>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      {/* <section className="py-12 sm:py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Find answers to common questions about our services</p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "What digital marketing services do you offer?",
                answer:
                  "We offer comprehensive digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, web development, and analytics.",
              },
              {
                question: "How long does it take to see results?",
                answer:
                  "Results vary depending on the service and your industry. SEO typically shows results in 3-6 months, while PPC campaigns can generate immediate traffic and leads.",
              },
              {
                question: "Do you work with small businesses?",
                answer:
                  "Yes, we work with businesses of all sizes, from startups to large enterprises. We have flexible packages to suit different budgets and requirements.",
              },
              {
                question: "What makes your agency different?",
                answer:
                  "Our data-driven approach, experienced team, transparent reporting, and commitment to delivering measurable results set us apart from other agencies.",
              },
              {
                question: "Do you provide monthly reports?",
                answer:
                  "Yes, we provide detailed monthly reports showing your campaign performance, key metrics, and recommendations for improvement.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-sidebar py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4 justify-center sm:justify-start">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">F</span>
                </div>
                <span className="text-sidebar-foreground font-bold text-xl">Foxtle</span>
              </div>
              <p className="text-sidebar-foreground/70 mb-4 text-center sm:text-left text-sm sm:text-base">
                Leading digital marketing agency helping businesses grow through innovative strategies and cutting-edge
                technology.
              </p>
              <div className="flex space-x-4 justify-center sm:justify-start">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">in</span>
                </div>
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-sidebar-foreground font-semibold mb-4 text-base sm:text-lg">Services</h3>
              <ul className="space-y-2 text-sidebar-foreground/70 text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    SEO Optimization
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    PPC Advertising
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Social Media Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Content Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Web Development
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-sidebar-foreground font-semibold mb-4 text-base sm:text-lg">Company</h3>
              <ul className="space-y-2 text-sidebar-foreground/70 text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-sidebar-foreground font-semibold mb-4 text-base sm:text-lg">Contact Info</h3>
              <div className="space-y-3 text-sidebar-foreground/70 text-sm sm:text-base">
                <div className="flex items-center justify-center sm:justify-start">
                  <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>info@foxtle.com</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Mumbai, Maharashtra</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>Mon - Fri: 9AM - 6PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-sidebar-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-sidebar-foreground/70 text-sm sm:text-base">
              © 2024 Foxtle Digital Marketing Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer> */}

     <div className="bg-white">
       <FAQSection/>
     </div>
    </div>
  )
}
