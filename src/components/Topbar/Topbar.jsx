import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaTachometerAlt, FaCogs, FaSignOutAlt, FaGift } from "react-icons/fa"; 
import Flag from "react-world-flags"; 

const Dropdown = ({ isOpen, items, dropdownRef }) => {
    return (
      isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10"
        >
          <ul className="py-1">
            {items.map((item, index) => (
              <li key={index} className="flex items-center px-4 py-2 transition-all duration-200 ease-in-out transform hover:bg-gray-100 hover:scale-105 hover:shadow-md">
                {item.icon && (
                  <item.icon className="w-5 h-5 mr-3 text-gray-700" />
                )}
                {item.flag && (
                  <Flag code={item.flag} className="w-5 h-5 mr-3" />
                )}
                <a
                  href={item.link || "#"}
                  className="block text-sm text-gray-700 font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )
    );
  };  

const Topbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null); 
  const dropdownRefs = useRef([]); 
  const messages = [
    { label: "Your last request is completed!" },
    { label: "Your request is planned successfully!" },
    { label: "Your request is planned successfully!" },
    { label: "Your last request is completed!" },
  ];
  const notifications = [
    { label: "You have a new message!" },
    { label: "You have a new message!" },
  ];
  const profileMenu = [
    { label: "Profile", icon: FaUser },
    { label: "Dashboard", icon: FaTachometerAlt },
    { label: "Subscription", icon: FaGift },
    { label: "Settings", icon: FaCogs },
    { label: "Log out", icon: FaSignOutAlt },
  ];
  const flagsMenu = [
    { label: "USA", flag: "US" },
    { label: "Canada", flag: "CA" },
    { label: "UK", flag: "GB" },
    { label: "Australia", flag: "AU" },
    { label: "India", flag: "IN" },
  ];

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRefs.current.some((ref) => ref && ref.contains(event.target))) {
        return;
      }
      setDropdownOpen(null); 
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="flex items-center bg-white text-gray-800 px-4 border-b border-[#d3b497] sm:px-6 lg:px-8"
      style={{ height: "4rem" }}
    >
      <div className="flex-1">
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center space-x-6 sm:space-x-4 lg:space-x-6">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="relative">
            <button
              onClick={() => toggleDropdown(index)}
              className="flex items-center justify-center w-12 h-12 rounded-[15%] shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <img
                src={`/assets/icon${index + 1}.png`}
                alt={`Icon ${index + 1}`}
                className="w-7 h-7"
              />
              {(index === 1 || index === 2) && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white"></span>
              )}
            </button>

            {index === 1 && (
              <Dropdown isOpen={dropdownOpen === index} items={messages} dropdownRef={(el) => dropdownRefs.current[index] = el} />
            )}
            {index === 2 && (
              <Dropdown isOpen={dropdownOpen === index} items={notifications} dropdownRef={(el) => dropdownRefs.current[index] = el} />
            )}
            {index === 3 && (
              <Dropdown isOpen={dropdownOpen === index} items={flagsMenu} dropdownRef={(el) => dropdownRefs.current[index] = el} />
            )}
            {index === 4 && (
              <Dropdown isOpen={dropdownOpen === index} items={profileMenu} dropdownRef={(el) => dropdownRefs.current[index] = el} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
