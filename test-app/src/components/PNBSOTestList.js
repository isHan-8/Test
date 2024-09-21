import React from 'react';
import { useNavigate } from 'react-router-dom';

const PNBSOTestList = () => {
  const navigate = useNavigate();

  const tests = [
    { id: 1, name: "PNB SO Credit Officer Test 1", totalQuestions: 50, maxScore: 100, totalTime: "1hr Total Time", hasScore: true },
    { id: 2, name: "PNB SO Credit Officer Test 2", totalQuestions: 50, maxScore: 100, totalTime: "1hr Total Time", hasScore: false },
    { id: 3, name: "PNB SO Credit Officer Test 3", totalQuestions: 50, maxScore: 100, totalTime: "1hr Total Time", hasScore: false },
    { id: 4, name: "PNB SO Credit Officer Test 4", totalQuestions: 50, maxScore: 100, totalTime: "1hr Total Time", hasScore: false },
    { id: 5, name: "PNB SO Credit Officer Test 5", totalQuestions: 50, maxScore: 100, totalTime: "1hr Total Time", hasScore: false },
    { id: 6, name: "PNB SO Credit Officer Test 6", totalQuestions: 50, maxScore: 100, totalTime: "1hr Total Time", hasScore: false },
    { id: 7, name: "PNB SO Credit Officer Test 7", totalQuestions: 50, maxScore: 100, totalTime: "1hr Total Time", hasScore: false },
  ];

  const handlePrintTest = (testId) => {
    navigate(`/test/mcq/${testId}`);
  };

  return (
    <div className="p-6 flex flex-col w-full">
      <h2 className="text-xl font-bold mb-6">PNB SO Credit Officer Test (7 Tests)</h2>
      <div className="grid grid-cols-3 gap-5">
        {tests.map((test) => (
          <div 
            key={test.id} 
            className="p-4 bg-white shadow-lg rounded-md transition duration-200 relative" // relative to position the top border
            style={{ border: '1px solid lightgray' }} // Gray border
          >
            {/* Blue Top Border */}
            <div 
              className="absolute top-0 left-0 right-0 h-1 bg-blue-500 rounded-t-md" 
            ></div>
    
            <div className="flex justify-between mb-4">
              <p className="font-semibold">{test.name}</p>
              <p className="font-semibold">🏆 Max score: {test.maxScore}</p>
            </div>
            <hr className="border-light-gray mb-2" />
            <div className="flex justify-between mb-4">
              <div>
                <p>❓ {test.totalQuestions} Total Questions</p>
                <p className="mt-5">🕒 {test.totalTime}</p>
              </div>
            </div>
            <hr className="border-light-gray mb-2" />
            <div className="mt-4 flex justify-between">
              {test.hasScore ? (
                <button 
                  className="px-4 py-2 text-white rounded-full hover:bg-opacity-80 transition duration-200"
                  style={{ backgroundColor: '#42B2F5' }} // Button color
                >
                  View Score
                </button>
              ) : (
                <button 
                  className="px-7 py-2 text-white rounded-full hover:bg-opacity-80 transition duration-200"
                  style={{ backgroundColor: '#42B2F5' }} // Button color
                >
                  Take Test
                </button>
              )}
              <button
                className="px-7 py-2 text-white rounded-full hover:bg-opacity-80 transition duration-200"
                style={{ backgroundColor: '#42B2F5' }} // Button color
                onClick={() => handlePrintTest(test.id)}
              >
                Print Test
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PNBSOTestList;
