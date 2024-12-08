import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSuitcase, FaInfoCircle, FaCog, FaPhone } from "react-icons/fa";

const MobileSidebar = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#ec8042] border-t border-[#d3b497] flex justify-between items-center py-2">
   
      <div className="flex justify-between items-center w-full px-6">
        <Link
          to="/"
          className="flex flex-col items-center text-white p-2 rounded-full transition-all duration-300 hover:bg-white hover:text-[#ec8042]"
        >
          <FaHome className="w-7 h-7" /> 
        </Link>

        <Link
          to="/portfolio"
          className="flex flex-col items-center text-white p-2 rounded-full transition-all duration-300 hover:bg-white hover:text-[#ec8042]"
        >
          <FaSuitcase className="w-7 h-7" /> 
        </Link>

        <Link
          to="/about"
          className="flex flex-col items-center text-white p-2 rounded-full transition-all duration-300 hover:bg-white hover:text-[#ec8042]"
        >
          <FaInfoCircle className="w-7 h-7" /> 
        </Link>

        <Link
          to="/services"
          className="flex flex-col items-center text-white p-2 rounded-full transition-all duration-300 hover:bg-white hover:text-[#ec8042]"
        >
          <FaCog className="w-7 h-7" /> 
        </Link>

        <Link
          to="/contact"
          className="flex flex-col items-center text-white p-2 rounded-full transition-all duration-300 hover:bg-white hover:text-[#ec8042]"
        >
          <FaPhone className="w-7 h-7" /> 
        </Link>
      </div>
    </div>
  );
};

export default MobileSidebar;
