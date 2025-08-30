"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqData = [
  {
    id: 1,
    question: "What is Foxtel SMS",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Nisl at proin nisl massa sed tortor dolor ut. Sagittis sit pulvinar fames diam id mauris. Vitae nisl velit quis etiam eget risus dolor netus senectus. Tristique bibendum non ultricies elit interdum gravida sed. Scelerisque feugiat gravida maecenas vitae facilisi quam suspendisse nunc orci. Magna in sit pharetra pulvinar aliquam diam. Massa pharetra nunc turpis cursus. Leo quisque at risus lorem. Amet enim quis pellentesque mauris non et molestie. nunc turpis cursus. Leo quisque at risus lorem. Amet enim quis pellentesque mauris non et molestie Blandit sodales sem ullamcorper consequat eros vitae sit est hendrerit.",
  },
  {
    id: 2,
    question: "What is Foxtel SMS",
    answer: "Lorem ipsum dolor sit amet consectetur. Nisl at proin nisl massa sed tortor dolor ut.",
  },
  {
    id: 3,
    question: "What is Foxtel SMS",
    answer: "Lorem ipsum dolor sit amet consectetur. Nisl at proin nisl massa sed tortor dolor ut.",
  },
  {
    id: 4,
    question: "What is Foxtel SMS",
    answer: "Lorem ipsum dolor sit amet consectetur. Nisl at proin nisl massa sed tortor dolor ut.",
  },
  {
    id: 5,
    question: "What is Foxtel SMS",
    answer: "Lorem ipsum dolor sit amet consectetur. Nisl at proin nisl massa sed tortor dolor ut.",
  },
  {
    id: 6,
    question: "What is Foxtel SMS",
    answer: "Lorem ipsum dolor sit amet consectetur. Nisl at proin nisl massa sed tortor dolor ut.",
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState(new Set([1]))

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="max-w-5xl mx-auto pt-16 pb-16">
      <h1 className="text-2xl font-medium text-center mb-8 text-gray-900">
        Frequently Asked Question
      </h1>

      <div className="space-y-2">
        {faqData.map((item) => (
          <div
            key={item.id}
            className={`border border-orange-200  overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.has(item.id) ? "shadow-md border-orange-300" : ""
            }`}
            style={{ backgroundColor: openItems.has(item.id) ? "white" : "#FFEADD" }}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className={`w-full px-6 py-4 text-left flex items-center justify-between transition-all duration-300 ease-in-out ${
                openItems.has(item.id) ? "bg-orange-400 text-white hover:bg-orange-500" : ""
              }`}
            >
              <span
                className={`font-medium transition-colors duration-300 ${
                  openItems.has(item.id) ? "text-white" : "text-gray-900"
                }`}
              >
                {item.question}
              </span>
              <div className="transition-transform duration-300 ease-in-out">
                {openItems.has(item.id) ? (
                  <Minus className="w-5 h-5 text-white flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </div>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out ${
                openItems.has(item.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="px-6 py-4 bg-white border-t border-orange-100">
                <p className="text-gray-700 text-sm leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
