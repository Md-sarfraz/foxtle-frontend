import React from "react";
import { motion } from "framer-motion";

const ContactCard = ({ title, description, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex items-center gap-4 
                 w-full 
                 min-h-[7rem] shadow-lg rounded-2xl 
                 p-5 bg-white border border-gray-200 
                 hover:border-red-400 hover:shadow-xl 
                 transition-all duration-300 ease-in-out"
    >
      {/* Icon */}
      <div className="flex items-center justify-center 
                      h-14 w-14 rounded-full 
                      bg-red-100 text-red-500 flex-shrink-0">
        <Icon size={26} />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <h1 className="font-semibold text-base md:text-lg text-gray-800">{title}</h1>
        <p className="text-sm md:text-base text-gray-500">{description}</p>
      </div>
    </motion.div>
  );
};

export default ContactCard;
