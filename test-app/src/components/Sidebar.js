import React, { useState } from "react";
import { FaHome, FaUser, FaBook, FaUserCircle, FaGift, FaWallet, FaStar, FaPlus, FaMinus } from "react-icons/fa"; // Importing icons from React Icons
import { Link } from "react-router-dom"; // Import Link for navigation

const Sidebar = () => {
  const [amount, setAmount] = useState(1200); // State to manage amount

  const incrementAmount = () => {
    setAmount(amount + 1); // Increment by 1
  };

  const decrementAmount = () => {
    setAmount(amount > 0 ? amount - 1 : 0); // Decrementing by 1, not allowing negative values
  };

  return (
    <div className="bg-white-200 w-80 h-100 flex flex-col justify-between p-9 shadow-lg border-1 border-white-350 border-l-8 border-white-400"> {/* Sidebar with full height */}
      <div>
        <div className="flex items-center mb-8">
          <FaHome className="mr-6 text-lg text-black" />
          <h2 className="text-lg font-semibold text-black">Dashboard</h2>
        </div>
        <nav>
          <ul>
            <li className="mb-8 flex items-center">
              <FaUser className="mr-6 text-lg text-black" />
              <Link to="#" className="text-lg hover:text-blue-500 font-medium ml-3">My Test</Link>
            </li>
            {/* Blue background for Take Tests */}
            <li className="mb-8 flex items-center bg-blue-400 rounded-md">
              <FaBook className="mr-6 text-lg text-white" /> {/* Icon in white */}
              <Link to="#" className="text-lg font-medium text-white ml-2"> {/* Text in white */}
                Take Tests
              </Link>
            </li>
            <li className="mb-8 flex items-center">
              <FaStar className="mr-6 text-lg text-black" />
              <Link to="#" className="text-lg hover:text-blue-500 font-medium ml-2">My Certificates</Link>
            </li>
            <li className="mb-8 flex items-center">
              <FaUserCircle className="mr-6 text-lg text-black" />
              <Link to="#" className="text-lg hover:text-blue-500 font-medium ml-2">Profile</Link>
            </li>
            <li className="mb-8 flex items-center">
              <FaGift className="mr-6 text-lg text-black" />
              <Link to="#" className="text-lg hover:text-blue-500 font-medium ml-2">Referral</Link>
            </li>
            <li className="mb-8 flex items-center">
              <FaWallet className="mr-6 text-lg text-black" />
              <Link to="#" className="text-lg hover:text-blue-500 font-medium ml-2">Wallet</Link>
            </li>
          </ul>
        </nav>
      </div>
    
      <div className="bg-blue-400 text-white p-3 rounded-lg flex items-center justify-between">
        <FaStar className="text-lg" />
        <div className="text-lg font-medium flex items-center">
          {/* 1200: */}
          <button
            className="ml-4 p-2 bg-blue-400 hover:bg-blue-600 rounded-full"
            onClick={decrementAmount}
          >
            <FaMinus />
          </button>
          <span className="mx-4">₹{amount}</span> 
          <button
            className="p-3 bg-blue-400 hover:bg-blue-600 rounded-full"
            onClick={incrementAmount}
          >
            <FaPlus />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
