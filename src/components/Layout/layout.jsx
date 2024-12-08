import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import StatisticsCard from "../StatisticsCard/StatisticsCard";
import { FaUsers, FaChartLine, FaShoppingCart, FaMoneyBillWave, FaRocket } from "react-icons/fa";
import MobileSidebar from "../Sidebar/MobileSidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen overflow-hidden">
      <Sidebar className="hidden lg:block" />

      <div className="flex-1 flex flex-col overflow-y-auto">
        <Topbar className="lg:block hidden" />

        <main className="p-6 overflow-x-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatisticsCard
              title="Users"
              value="1,250"
              icon={<FaUsers className="text-xl" />}
              color="bg-blue-500"
              size="large"
              height="auto"
              className="w-full sm:w-auto overflow-hidden max-h-96" 
            />
            <StatisticsCard
              title="Revenue"
              value="$12,340"
              icon={<FaMoneyBillWave className="text-xl" />}
              color="bg-green-500"
              size="large"
              height="auto"
              className="w-full sm:w-auto overflow-hidden max-h-96" 
            />
            <StatisticsCard
              title="Sales"
              value="345"
              icon={<FaShoppingCart className="text-xl" />}
              color="bg-yellow-500"
              height="auto"
              className="w-full sm:w-auto overflow-hidden max-h-96" 
            />
            <StatisticsCard
              title="Growth"
              value="22%"
              icon={<FaChartLine className="text-xl" />}
              color="bg-red-500"
              size="large"
              height="auto"
              className="w-full sm:w-auto overflow-hidden max-h-96" 
            />
            <StatisticsCard
              title="New Visitors"
              value="567"
              icon={<FaRocket className="text-xl" />}
              color="bg-purple-500"
              size="large"
              height="auto"
              className="w-full sm:w-auto overflow-hidden max-h-96" 
            />
            <StatisticsCard
              title="Conversion Rate"
              value="7.5%"
              icon={<FaChartLine className="text-xl" />}
              color="bg-teal-500"
              height="auto"
              className="w-full sm:w-auto overflow-hidden max-h-96" 
            />
          </div>

          <div className="mt-8">{children}</div>
        </main>
      </div>

      <MobileSidebar />
    </div>
  );
};

export default Layout;
