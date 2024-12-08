import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div
      className={`${
        collapsed ? "w-18" : "w-64"
      } h-screen bg-[#ffffff] text-white flex flex-col transition-width duration-300 border-r border-[#d3b497] hidden lg:flex`} // Hides on mobile, shows on large screens
    >
      <div
        className="flex items-center justify-center mt-2 mb-2 cursor-pointer"
        onClick={() => setCollapsed(!collapsed)}
        style={{ padding: "10px" }}
      >
        <div className="bg-white w-18 h-18 flex justify-center items-center rounded-full shadow-xl">
          <img
            src="/assets/Logo.png"
            alt="Logo"
            className="w-15 h-15 object-contain"
          />
        </div>
      </div>

      <div className="bg-white flex-grow flex items-center pr-2">
        <div
          className="bg-cover bg-center pr-2.5 h-[450px] w-full rounded-md flex flex-col items-center justify-evenly space-y-4"
          style={{
            backgroundImage: "url('/assets/Vector 21.png')",
          }}
        >
          <nav className="flex flex-col items-center justify-between space-y-2">
            <ul className="space-y-2">
              <li className="p-1 rounded-full w-full flex justify-center">
                <Link
                  to="/portfolio"
                  className="flex flex-col items-center p-1 rounded-full"
                >
                  <img
                    src="/assets/home_white.png"
                    alt="Portfolio Icon"
                    className="w-10 h-8"
                  />
                  {!collapsed && <span className="mt-2 text-sm">Portfolio</span>}
                </Link>
              </li>

              <li className="p-1 rounded-full w-full flex justify-center">
                <Link
                  to="/"
                  className="flex flex-col items-center p-1 rounded-full"
                >
                  <img
                    src="/assets/filter.png"
                    alt="Home Icon"
                    className="w-10 h-8"
                  />
                  {!collapsed && <span className="mt-2 text-sm">Home</span>}
                </Link>
              </li>

              <li className="p-1 rounded-full w-full flex justify-center">
                <Link
                  to="/about"
                  className="flex flex-col items-center p-1 rounded-full"
                >
                  <img
                    src="/assets/forward.png"
                    alt="About Icon"
                    className="w-10 h-8"
                  />
                  {!collapsed && <span className="mt-2 text-sm">About</span>}
                </Link>
              </li>

              <li className="p-1 rounded-full w-full flex justify-center">
                <Link
                  to="/services"
                  className="flex flex-col items-center p-1 rounded-full"
                >
                  <img
                    src="/assets/caution.png"
                    alt="Services Icon"
                    className="w-10 h-8"
                  />
                  {!collapsed && <span className="mt-2 text-sm">Services</span>}
                </Link>
              </li>

              <li className="p-1 rounded-full w-full flex justify-center">
                <Link
                  to="/contact"
                  className="flex flex-col items-center p-1 rounded-full"
                >
                  <img
                    src="/assets/contact.png"
                    alt="Contact Icon"
                    className="w-10 h-8"
                  />
                  {!collapsed && <span className="mt-2 text-sm">Contact</span>}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        className="bg-[#ffffff] flex-grow"
        style={{ height: "20%" }}
      ></div>
    </div>
  );
};

export default Sidebar;
