"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "Delivered our new website in record time with excellent communication. Performance scores jumped and leads increased.",
    author: "Sarah Lee",
    role: "Founder, BrightPath Coaching",
  },
  {
    quote:
      "Clean code, thoughtful UX, and pixel-perfect implementation. Would 100% hire again for future projects.",
    author: "David Kim",
    role: "Product Lead, Pine Studio",
  },
  {
    quote:
      "A great partner from concept to launch. Our site is faster, easier to manage, and looks fantastic on mobile.",
    author: "Anita Patel",
    role: "Owner, Glow Wellness",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const count = TESTIMONIALS.length;

  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    // autoplay every 5s
    timerRef.current = window.setInterval(next, 5000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  const active = useMemo(() => TESTIMONIALS[index], [index]);

  return (
    <div
      className="rounded-lg border border-gray-200 bg-white p-4 md:p-6"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      aria-live="polite"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <img
            src={"/placeholder.svg?height=96&width=96&query=avatar"}
            alt=""
            className="size-12 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-gray-900">{active.author}</p>
            <p className="text-sm text-gray-600">{active.role}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-900 hover:bg-gray-50"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 text-gray-900 hover:bg-gray-50"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>

      <blockquote className="mt-4 md:mt-6 text-gray-700 leading-relaxed">
        “{active.quote}”
      </blockquote>

      <div className="mt-4 flex items-center gap-2" aria-hidden="true">
        {TESTIMONIALS.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-sky-600" : "w-2 bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
