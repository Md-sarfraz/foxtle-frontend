import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/aboutUs";
import Service from "./pages/service";
import Contact from "./pages/contact"
import Product from "./pages/product";
import DigitalMarketing from "./pages/digitalMarketing";
import SocialMedia from "./pages/socialMedia";
import WebDevelopment from "./pages/webDevlopment";
import Blog from "./pages/blog"
import Footer from "./components/footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 500, // animation speed
      once: false,     // ek hi baar chale scroll par
    });
  }, []);

  return (
    <Router>
      <div className="mx-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
           <Route path="/services" element={<Service />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Product />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/social-media" element={<SocialMedia />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
