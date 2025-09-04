import React from "react";
import freelancerImg from "../assets/images/freelancer-at-workspace.png"
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-6 py-12">
      {/* Image left on desktop, top on mobile */}
      <div className="order-1 md:order-none">
        <img
          src={freelancerImg}
          alt="Freelancer working at a modern workspace"
          className="w-full h-auto rounded-lg object-cover shadow-sm"
        />
      </div>

      {/* Text right */}
      <div className="space-y-4">
        <p className="text-sm font-medium text-gray-400">
          Freelance Developer & Consultant
        </p>

        <h1 className="text-pretty text-3xl md:text-4xl font-semibold text-gray-900">
          I build fast, accessible websites that grow your business
        </h1>

        <p className="text-gray-600 leading-relaxed">
          From landing pages to full-stack apps, I help service providers and
          startups launch quickly with quality. I focus on clean code,
          performance, and a smooth user experience.
        </p>

        <ul className="grid gap-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-600"
            ></span>
            <span>Responsive, mobile-first design</span>
          </li>
          <li className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-600"
            ></span>
            <span>SEO-friendly and performant</span>
          </li>
          <li className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-600"
            ></span>
            <span>Clear communication and on-time delivery</span>
          </li>
        </ul>

        <div className="flex flex-wrap gap-3 pt-2">
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

          {/* <a
            href="#work-heading "
            className="inline-flex items-center justify-center px-4 py-2.5 text-sm  text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 font-semibold border border-black overflow-hidden"
          >
            See work
          </a> */}
        </div>
      </div>
    </section>
  );
}
