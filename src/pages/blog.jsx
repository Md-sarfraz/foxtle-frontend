import React from "react";
import Hero from "@/components/hero";
import TestimonialSlider from "@/components/ui/testimonialSlider1";
import PhotoCards from "@/components/photoCard";
import PageBanner from "@/components/PageBanner";
import blogBanner from "../assets/images/front-bg-image.gif";


export default function BlogPage() {
  return (
    <main className="min-h-dvh bg-white">
      <div>
              <PageBanner
        title="Our Blog"
        subtitle="Read the latest updates and insights from our team."
        backgroundImage={blogBanner}
      />
      </div>
      {/* Hero Section */}
      <section className="px-4 py-10 md:py-16">
        <div className="mx-auto max-w-6xl">
          <Hero />
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        aria-labelledby="testimonials-heading"
        className="px-4 py-10 md:py-16 bg-gray-50"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="testimonials-heading"
            className="text-pretty text-2xl md:text-3xl font-semibold text-gray-900 mb-6 md:mb-8"
          >
            What clients say
          </h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Work Section */}
      <section
        aria-labelledby="work-heading"
        className="px-4 py-10 md:py-16"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="work-heading"
            className="text-pretty text-2xl md:text-3xl font-semibold text-gray-900 mb-6 md:mb-8"
          >
            Recent work and insights
          </h2>
          <PhotoCards />
        </div>
      </section>
    </main>
  );
}
