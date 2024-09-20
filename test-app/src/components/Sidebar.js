import React from "react";
import { FaHome, FaUser, FaBook, FaUserCircle, FaGift, FaWallet, FaTachometerAlt } from "react-icons/fa"; // Importing icons from React Icons

const Sidebar = () => {
  return (
    <div className="bg-white-200 w-80 h-20pxflex flex-col p-9 shadow-lg border-1 border-white-350 border-l-8 border-white-400"> {/* Left border */}
      <div className="flex items-center mb-8">
        <FaTachometerAlt className="text-xl text-black mr-3" /> {/* Dashboard Icon */}
        <h2 className="text-1xl font-semibold text-black">Dashboard</h2>
      </div>
      <nav>
        <ul>
          <li className="mb-8 flex items-center">
            <FaHome className="mr-6 text-lg text-black" /> {/* Home Icon */}
            <a href="#" className="text-lg hover:text-blue-500 font-medium ml-2">My Test</a>
          </li>
          <li className="mb-8 flex items-center hover:bg-blue-100 rounded-md"> {/* Light blue hover effect */}
            <FaBook className="mr-6 text-lg text-black" /> {/* Book Icon */}
            <a href="#" className="text-lg font-medium text-black hover:text-blue-800 hover:font-bold ml-2">Take Tests</a> {/* Bolder hover effect */}
          </li>
          <li className="mb-8 flex items-center">
            <FaUser className="mr-6 text-lg text-black" /> {/* User Icon */}
            <a href="#" className="text-lg hover:text-blue-500 font-medium ml-2">My Certificates</a>
          </li>
          <li className="mb-8 flex items-center">
            <FaUserCircle className="mr-6 text-lg text-black" /> {/* User Circle Icon */}
            <a href="#" className="text-lg hover:text-blue-500 font-medium ml-2">Profile</a>
          </li>
          <li className="mb-8 flex items-center">
            <FaGift className="mr-6 text-lg text-black" /> {/* Gift Icon */}
            <a href="#" className="text-lg hover:text-blue-500 font-medium ml-2">Referral</a>
          </li>
          <li className="mb-8 flex items-center">
            <FaWallet className="mr-6 text-lg text-black" /> {/* Wallet Icon */}
            <a href="#" className="text-lg hover:text-blue-500 font-medium ml-2">Wallet</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
