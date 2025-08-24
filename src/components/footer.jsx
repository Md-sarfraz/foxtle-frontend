import skype from "../assets/images/skype.png"
import baidu from "../assets/images/baidu.png"
import flickr from "../assets/images/flickr.png"
import linkedin from "../assets/images/linkedin.png"
import insta from "../assets/images/insta.png"
import pinterest from "../assets/images/pinterest.png"
import youtube from "../assets/images/youtube.png"
import twitter from "../assets/images/twitter.png"
import facebook from "../assets/images/fb.png"
import foxtleLogo from "../assets/images/foxtle-logo.png"

export default function Footer() {
  const socialIcons = [
    { name: "Skype", src: skype, alt: "Skype" },
    { name: "Baidu", src: baidu, alt: "Baidu" },
    { name: "Flickr", src: flickr, alt: "Flickr" },
    { name: "LinkedIn", src: linkedin, alt: "LinkedIn" },
    { name: "Insta", src: insta, alt: "Insta" },
    { name: "Pinterest", src: pinterest, alt: "Pinterest" },
    { name: "YouTube", src: youtube, alt: "YouTube" },
    { name: "Twitter", src: twitter, alt: "Twitter" },
    { name: "Facebook", src: facebook, alt: "Facebook" },
  ]

  return (
    <footer className="bg-gradient-to-tr from-orange-600 via-orange-700 to-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
          {/* Logo + About */}
          <div>
            <div className="flex flex-col items-center mb-5 sm:items-start">
              <img
                src={foxtleLogo}
                alt="Foxtle Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-white font-semibold text-lg mt-2">Foxtle</span>
            </div>

            <p className="text-sm leading-relaxed text-gray-200 text-center sm:text-left">
              Foxtle is one such digital marketing company that can turn the tables around for a business sinking down
              through various digital marketing services.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacts</h3>
            <div className="space-y-3 text-sm text-gray-200">
              <p>
                <strong className="text-white">Address:</strong> 623/10, Aman Enclave, Begariya Road, Dubagga Bypass,
                Lucknow - 2234103
              </p>
              <p>
                <strong className="text-white">Office Time:</strong> 9:00 am to 6:00 pm
              </p>
              <p>
                <strong className="text-white">Email:</strong> contact@foxtle.com
              </p>
              <p>
                <strong className="text-white">Phone:</strong> +91 79156 5757
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Digital Marketing</li>
              <li>Social Media Marketing</li>
              <li>Search Engine Optimization</li>
              <li>Lead Generation</li>
              <li>PPC Advertising</li>
              <li>Web Development</li>
              <li>Graphic Designing</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="#" className="hover:text-orange-300 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

{/* Social Media Icons */}
<div className="mt-8 flex justify-center">
  <div className="flex gap-4 flex-nowrap overflow-x-auto sm:overflow-visible scrollbar-hide">
    {socialIcons.map((icon, index) => (
      <a
        key={index}
        href="#"
        className="hover:scale-110 transition-transform duration-200 flex-shrink-0"
      >
        <img
          src={icon.src}
          alt={icon.alt}
          className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full"
        />
      </a>
    ))}
  </div>
</div>


        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-300">© 2024 Foxtle Digital Marketing Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
