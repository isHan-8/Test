import React from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon

const MainContent = () => {
  const handleCardClick = (testName) => {
    if (testName === "PNB SO Credit Officer") {
      window.location.href = `/test/pnbso`; // Redirect to the PNB SO Test List page
    } else {
      // Handle other test types
    }
  };

  return (
    <div className="flex flex-col w-full p-6">
      <h1 className="font-bold text-xl mb-4">Search Test....</h1> {/* Bold and larger heading */}
      <div className="relative mb-6"> {/* Relative container for positioning */}
        <FaSearch className="absolute left-3 top-3 text-gray-400" /> {/* Positioned inside the input */}
        <input
          type="text"
          placeholder="Search Tests"
          className="p-2 border border-gray-300 rounded w-1/3 pl-10" // Add left padding for the icon
        />
      </div>

      <div>
        <h3 className="font-semibold mb-4">Banking & Insurance</h3>
        <div className="grid grid-cols-5 gap-4">
          {['PNB SO Credit Officer', 'SBI Clerk', 'Union Bank Credit Officer', 'Test 4', 'Test 5', 'Test 6', 'Test 7', 'Test 8', 'Test 9', 'Test 10', 'Test 11', 'Test 12'].map((test) => (
            <div
              key={test}
              className="p-2 bg-white shadow hover:bg-blue-100 cursor-pointer flex flex-col items-center text-center"
              onClick={() => handleCardClick(test)}
            >
              <img src={`/images/${test}.png`} alt={test} className="mb-1 h-14 w-14 object-cover" />
              <p className="text-sm font-semibold">{test.split(" ").slice(0, 2).join(" ")}</p> {/* First two words */}
            </div>
          ))}
        </div>

        <h3 className="font-semibold mt-8 mb-4">Civil Services</h3>
        <div className="grid grid-cols-5 gap-4">
          {['UPSC prelims GS', 'UPSC prelims CSAT', 'CSIR', 'Test 4', 'Test 5', 'Test 6', 'Test 7', 'Test 8'].map((test) => (
            <div
              key={test}
              className="p-2 bg-white shadow hover:bg-blue-100 cursor-pointer flex flex-col items-center text-center"
              onClick={() => handleCardClick(test)}
            >
              <img src={`/images/${test}.png`} alt={test} className="mb-1 h-14 w-14 object-cover" />
              <p className="text-sm font-semibold">{test.split(" ").slice(0, 2).join(" ")}</p> {/* First two words */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
