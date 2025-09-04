import React from "react";
import photoCardImg1 from "../assets/images/website-audit-report.png"
import photoCardImg2 from "../assets/images/mobile-ui-screens.png"
import photoCardImg3 from "../assets/images/code-editor-interface.png"
import photoCardImg4 from "../assets/images/launch-checklist.png"
import photoCardImg5 from "../assets/images/accessible-forms.png"
import photoCardImg6 from "../assets/images/content-strategy-board.png"

const ITEMS = [
  {
    title: "How I improved Core Web Vitals for a coaching site",
    description: "Tech stack and steps to boost performance and SEO.",
    image:photoCardImg1,
  },
  {
    title: "Designing a mobile-first booking flow",
    description: "Lessons from building a frictionless scheduling UX.",
    image: photoCardImg2,
  },
  {
    title: "Deploying faster with server components",
    description: "What worked (and didn’t) on a recent client build.",
    image: photoCardImg3,
  },
  {
    title: "A checklist for launching service sites",
    description: "From meta tags to analytics—don’t miss these.",
    image: photoCardImg4,
  },
  {
    title: "Accessible forms that convert",
    description: "ARIA, labels, and validation that help users succeed.",
    image:photoCardImg5,
  },
  {
    title: "Content structure for clarity",
    description: "How to make your services easy to understand.",
    image: photoCardImg6,
  },
];

export default function PhotoCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {ITEMS.map((item) => (
        <article
          key={item.title}
          className="group overflow-hidden rounded-lg border border-gray-200 bg-white"
        >
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="p-4 md:p-5">
            <h3 className="text-pretty text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="mt-1 text-gray-600 leading-relaxed">
              {item.description}
            </p>
            <div className="mt-3">
              <a
                href="#"
                className="text-sm font-medium text-sky-600 hover:opacity-90"
                aria-label={`Read more: ${item.title}`}
              >
                Read more →
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
