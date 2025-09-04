import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import foxtleLogo from "../assets/images/foxtle-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <nav className="fixed top-7 left-1/2 transform -translate-x-1/2 
      w-[85%] max-w-5xl 
      bg-white/5 backdrop-blur-md 
      border border-white/20 
      rounded-xl shadow-lg 
      px-6 py-5 z-50 lg:px-6 lg:py-5">

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-0.5">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex flex-col items-center">
            <img src={foxtleLogo} alt="Foxtle Logo" className="h-7 w-7 object-contain cursor-pointer" />
            <span className="text-white font-semibold text-[10px] cursor-pointer">Foxtle</span>
          </Link>
        </div>

        <Link
          to="/#contact"
          className="bg-white/10 hover:bg-white/20 text-gray-200 px-3 py-2 rounded-lg font-medium transition"
          onClick={() => setIsOpen(false)}
        >
          Get A Quote
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-md rounded-b-xl shadow-lg flex flex-col items-center gap-4 mt-2 py-4 text-gray-200 font-medium text-sm z-40">
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>

          {/* Services Dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 group-hover:text-white">
              Services <ChevronDown size={16} />
            </button>
            <ul className="absolute left-0 mt-1 w-56 bg-white/10 backdrop-blur-md rounded-md shadow-lg py-2 hidden group-hover:block">
              <li><Link to="/services/digital-marketing" className="block px-4 py-2 hover:bg-white/20">Digital Marketing</Link></li>
              <li><Link to="/services/social-media" className="block px-4 py-2 hover:bg-white/20">Social Media Marketing</Link></li>
              <li><Link to="/services/web-development" className="block px-4 py-2 hover:bg-white/20">Web Development</Link></li>
            </ul>
          </li>

          <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
          <li><Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link></li>

          <Link to="/features" className="block w-full text-center py-2 hover:text-white" onClick={() => setIsOpen(false)}>
            View Features
          </Link>
        </ul>
      )}

      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between">
        {/* Left Menu */}
        <ul className="flex items-center gap-6 text-gray-200 font-normal text-sm">
          <li><Link to="/about" className="transition-colors duration-300 hover:text-white">About Us</Link></li>

          {/* Services Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setIsServiceOpen(true)}
            onMouseLeave={() => setIsServiceOpen(false)}
          >
            <button className="flex items-center gap-1 group-hover:text-white">
              Services <ChevronDown size={16} />
            </button>
            {isServiceOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-md shadow-lg py-2">
                <li><Link to="/services/digital-marketing" className="block px-4 py-2 hover:bg-white/20">Digital Marketing</Link></li>
                <li><Link to="/services/social-media" className="block px-4 py-2 hover:bg-white/20">Social Media Marketing</Link></li>
                <li><Link to="/services/web-development" className="block px-4 py-2 hover:bg-white/20">Web Development</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/products" className="hover:text-white">Products</Link></li>
          <li><Link to="/blogs" className="hover:text-white">Blogs</Link></li>
        </ul>

        {/* Center Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-0.5">
          <Link to="/" className="flex flex-col items-center">
            <img src={foxtleLogo} alt="Foxtle Logo" className="h-8 w-8 object-contain cursor-pointer" />
            <span className="text-white font-semibold text-xs cursor-pointer">Foxtle</span>
          </Link>
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-4 text-sm">
          {/* <Link to="/features" className="text-gray-200 hover:text-white transition relative group">
            View Features
          </Link> */}
          <Link
            to="/contact"
            className="bg-white/10 hover:bg-white/20 text-gray-200 px-3 py-2 rounded-lg font-medium transition"
          >
            Get A Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;









// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X, ChevronDown } from "lucide-react";
// import foxtleLogo from "../assets/images/foxtle-logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isServiceOpen, setIsServiceOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const location = useLocation();

//   // Smooth scroll for hash links
//   useEffect(() => {
//     if (location.hash) {
//       const element = document.getElementById(location.hash.replace("#", ""));
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location]);

//   // Detect scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 
//         bg-white/5 backdrop-blur-md border-b border-white/20 shadow-lg
//         transition-all duration-300 
//         ${scrolled ? "py-3" : "py-6"}`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//         {/* Mobile Navbar */}
//         <div className="flex items-center justify-between w-full lg:hidden">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-white">
//             {isOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>

//           {/* Center Logo */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-0.5">
//             <Link
//               to="/"
//               onClick={() => setIsOpen(false)}
//               className="flex flex-col items-center"
//             >
//               <img
//                 src={foxtleLogo}
//                 alt="Foxtle Logo"
//                 className="h-7 w-7 object-contain cursor-pointer"
//               />
//               <span className="text-white font-semibold text-[10px] cursor-pointer">
//                 Foxtle
//               </span>
//             </Link>
//           </div>

//           <Link
//             to="/#contact"
//             className="bg-white/10 hover:bg-white/20 text-gray-200 px-3 py-2 rounded-lg font-medium transition"
//             onClick={() => setIsOpen(false)}
//           >
//             Get A Quote
//           </Link>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         {isOpen && (
//           <ul className="absolute top-full left-0 w-full bg-white/10 backdrop-blur-md rounded-b-xl shadow-lg flex flex-col items-center gap-4 mt-2 py-4 text-gray-200 font-medium text-sm z-40">
//             <li>
//               <Link to="/about" onClick={() => setIsOpen(false)}>
//                 About Us
//               </Link>
//             </li>

//             {/* Services Dropdown */}
//             <li className="relative group">
//               <button className="flex items-center gap-1 group-hover:text-white">
//                 Services <ChevronDown size={16} />
//               </button>
//               <ul className="absolute left-0 mt-1 w-56 bg-white/10 backdrop-blur-md rounded-md shadow-lg py-2 hidden group-hover:block">
//                 <li>
//                   <Link
//                     to="/services/digital-marketing"
//                     className="block px-4 py-2 hover:bg-white/20"
//                   >
//                     Digital Marketing
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/services/social-media"
//                     className="block px-4 py-2 hover:bg-white/20"
//                   >
//                     Social Media Marketing
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/services/web-development"
//                     className="block px-4 py-2 hover:bg-white/20"
//                   >
//                     Web Development
//                   </Link>
//                 </li>
//               </ul>
//             </li>

//             <li>
//               <Link to="/products" onClick={() => setIsOpen(false)}>
//                 Products
//               </Link>
//             </li>
//             <li>
//               <Link to="/blogs" onClick={() => setIsOpen(false)}>
//                 Blogs
//               </Link>
//             </li>

//             <Link
//               to="/features"
//               className="block w-full text-center py-2 hover:text-white"
//               onClick={() => setIsOpen(false)}
//             >
//               View Features
//             </Link>
//           </ul>
//         )}

//         {/* Desktop Navbar */}
//         <div className="hidden lg:flex items-center justify-between w-full">
//           {/* Left Menu */}
//           <ul className="flex items-center gap-6 text-gray-200 font-normal text-sm">
//             <li>
//               <Link
//                 to="/about"
//                 className="transition-colors duration-300 hover:text-white"
//               >
//                 About Us
//               </Link>
//             </li>

//             {/* Services Dropdown */}
//             <li
//               className="relative group"
//               onMouseEnter={() => setIsServiceOpen(true)}
//               onMouseLeave={() => setIsServiceOpen(false)}
//             >
//               <button className="flex items-center gap-1 group-hover:text-white">
//                 Services <ChevronDown size={16} />
//               </button>
//               {isServiceOpen && (
//                 <ul className="absolute left-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-md shadow-lg py-2">
//                   <li>
//                     <Link
//                       to="/services/digital-marketing"
//                       className="block px-4 py-2 hover:bg-white/20"
//                     >
//                       Digital Marketing
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/services/social-media"
//                       className="block px-4 py-2 hover:bg-white/20"
//                     >
//                       Social Media Marketing
//                     </Link>
//                   </li>
//                   <li>
//                     <Link
//                       to="/services/web-development"
//                       className="block px-4 py-2 hover:bg-white/20"
//                     >
//                       Web Development
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>

//             <li>
//               <Link to="/products" className="hover:text-white">
//                 Products
//               </Link>
//             </li>
//             <li>
//               <Link to="/blogs" className="hover:text-white">
//                 Blogs
//               </Link>
//             </li>
//           </ul>

//           {/* Center Logo */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-0.5">
//             <Link to="/" className="flex flex-col items-center">
//               <img
//                 src={foxtleLogo}
//                 alt="Foxtle Logo"
//                 className={`object-contain cursor-pointer transition-all duration-300 ${
//                   scrolled ? "h-6 w-6" : "h-8 w-8"
//                 }`}
//               />
//               <span className="text-white font-semibold text-xs cursor-pointer">
//                 Foxtle
//               </span>
//             </Link>
//           </div>

//           {/* Right Menu */}
//           <div className="flex items-center gap-4 text-sm">
//             <Link
//               to="/features"
//               className="text-gray-200 hover:text-white transition relative group"
//             >
//               View Features
//             </Link>
//             <Link
//               to="/contact"
//               className="bg-white/10 hover:bg-white/20 text-gray-200 px-3 py-2 rounded-lg font-medium transition"
//             >
//               Get A Quote
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
