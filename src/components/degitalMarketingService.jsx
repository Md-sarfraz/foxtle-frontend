import React from "react";
import { motion } from "framer-motion";

const DigitalMarketingServices = () => {
  const services = [
    {
      title: "Content Marketing",
      desc: "A good content marketing always pay good",
      bg: "bg-blue-50",
      img: "https://cdn-icons-png.flaticon.com/512/1087/1087840.png", // content marketing icon
    },
    {
      title: "Email Marketing",
      desc: "Email marketing is awesome for brand awareness",
      bg: "bg-red-50",
      img: "https://cdn-icons-png.flaticon.com/512/732/732200.png", // email icon
    },
    {
      title: "Lead data",
      desc: "We provide quality lead data for every business",
      bg: "bg-blue-50",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135685.png", // leads icon
    },
    {
      title: "Cold outreach",
      desc: "Our team does the best cold outreach via mails and calls",
      bg: "bg-orange-50",
      img: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png", // outreach icon
    },
  ];

  return (
    <section className="py-8 px-4 text-center">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <h2 className="text-lg md:text-xl font-semibold mb-2">
          New age approaches to{" "}
          <span className="font-bold text-gray-900">
            Digital marketing services in India
          </span>
        </h2>
        <p className="text-gray-500 text-sm max-w-3xl mx-auto mb-6 leading-relaxed">
          To create an effective digital marketing strategy, best practices must
          be followed. Digital marketing can only become successful if the right
          platforms are used at the right time for the right audience. Foxsta as
          the best digital marketing company in India knows the best digital
          platforms for any business that can provide outstanding growth if used
          with the correct strategies. <br />
          <br />
          The following is a list of some of the most important digital marketing
          platforms where our company utilizes the best strategy.
        </p>
      </motion.div>

      {/* Services */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className={`${service.bg} w-full max-w-[200px] aspect-square rounded-lg shadow-sm hover:shadow-md transition flex flex-col items-center justify-center p-4`}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-12 h-12 mb-3"
            />
            <h3 className="font-semibold text-sm mb-1">{service.title}</h3>
            <p className="text-gray-600 text-xs text-center">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Buttons */}
      <motion.div
        className="flex justify-center gap-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Whatsapp Button */}
        <button className="flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-4 py-2 rounded-full shadow-md transition duration-300">
          <span className="mr-2">Whatsapp</span>
          <span className="bg-white rounded-full p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 text-orange-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 5.5A3.5 3.5 0 015.5 2h9A3.5 3.5 0 0118 5.5v9a3.5 3.5 0 01-3.5 3.5h-9A3.5 3.5 0 012 14.5v-9zM7 8.5a.5.5 0 00-1 0v3a.5.5 0 001 0v-3zm3 0a.5.5 0 00-1 0v3a.5.5 0 001 0v-3zm3 0a.5.5 0 00-1 0v3a.5.5 0 001 0v-3z" />
            </svg>
          </span>
        </button>

        {/* Call Button */}
        <button className="flex items-center bg-black hover:bg-gray-800 text-white font-medium text-sm px-4 py-2 rounded-full shadow-md transition duration-300">
          <span className="mr-2">Call us</span>
          <span className="bg-white rounded-full p-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6.62 10.79a15.534 15.534 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.54.76 3.93.76.55 0 1 .45 1 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5a1 1 0 011-1H6.5c.55 0 1 .45 1 1 0 1.39.26 2.72.76 3.93.14.27.08.61-.21 1.11l-2.2 2.2z" />
            </svg>
          </span>
        </button>
      </motion.div>
    </section>
  );
};

export default DigitalMarketingServices;
