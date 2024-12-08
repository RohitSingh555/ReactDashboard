import React from "react";

const StatisticsCard = ({ title, value, icon, color, size }) => {
  const sizeClass = size === "large" ? "col-span-2" : size === "small" ? "col-span-1" : "col-span-1";

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${sizeClass}`}
    >
      <div className="flex items-center space-x-4">
        <div className={`p-4 rounded-full ${color} text-white`}>
          {icon}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <p className="text-xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsCard;
