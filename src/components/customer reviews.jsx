"use client"

import { useState, useEffect } from "react"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

// Example testimonials data (replace with API or props if needed)
const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Innovations Inc",
    review:
      "Outstanding digital marketing results! Our online presence has grown exponentially and customer engagement is at an all-time high.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Michael Lee",
    company: "Global Enterprises",
    review:
      "Their team is highly professional and delivered beyond our expectations. We saw measurable results in just a few weeks.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Emily Davis",
    company: "Creative Minds",
    review: "A game-changer for our brand strategy. Their innovative approach and expertise really made a difference.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "David Chen",
    company: "NextGen Solutions",
    review:
      "We were impressed with their quick turnaround and detailed insights. Highly recommend working with this team!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Sophia Martinez",
    company: "Bright Future Ltd",
    review:
      "They helped us unlock new growth opportunities. The customer service was excellent, and the results speak for themselves.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1544005313942-56fc4a3765a7?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "James Wilson",
    company: "FinTech Global",
    review:
      "Their expertise in digital solutions transformed our business operations. Reliable and innovative partners.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Olivia Brown",
    company: "HealthFirst Care",
    review: "Very professional and easy to work with. They tailored their services exactly to our needs.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Daniel White",
    company: "EduCore Systems",
    review:
      "Their marketing campaigns have boosted our student enrollments significantly. Couldn’t ask for better results.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face",
  },
]

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [visibleSlides, setVisibleSlides] = useState(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)

  // ✅ Update visible slides on resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // ✅ Autoplay
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
    return () => clearInterval(interval)
  }, [currentSlide, isAutoPlaying, visibleSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= testimonials.length - visibleSlides ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - visibleSlides : prev - 1))
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 bg-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-600 rounded-2xl mb-4 shadow-md">
            <Quote className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Customer Reviews</h2>
          <div className="w-20 h-1 bg-orange-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mt-4">Hear what our clients say about our services</p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3 py-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 h-full">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-3">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center shadow-sm">
                        <Quote className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500 mx-0.5" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 italic">
                      "{testimonial.review}"
                    </blockquote>

                    {/* Profile */}
                    <div className="flex items-center justify-center space-x-3">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-orange-600"
                      />
                      <div className="text-left">
                        <h4 className="text-base font-semibold text-gray-900">{testimonial.name}</h4>
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
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 hover:text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 hover:text-white" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({
            length: testimonials.length - (visibleSlides - 1),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-orange-600 w-6" : "bg-gray-400 hover:bg-orange-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
