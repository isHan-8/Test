import React, { useState, useEffect } from 'react';

const mcqData = [
  {
    id: 1,
    question: "Hina invested ₹9600 in each of bank P and Q for 4 years. Bank P offers simple interest at 4% rate of interest whereas bank Q offers simple interest at 7% rate of interest?",
    options: ["21,450", "21,550", "21,600", "21,500"],
    correctAnswer: "21,450"
  },
  {
    id: 2,
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    id: 3,
    question: "What is the result of 5 + 7?",
    options: ["10", "12", "13", "11"],
    correctAnswer: "12"
  },
  {
    id: 4,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars"
  },
  {
    id: 5,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: "Pacific Ocean"
  },
  {
    id: 6,
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
    correctAnswer: "William Shakespeare"
  },
  {
    id: 7,
    question: "What is the chemical symbol for water?",
    options: ["H2O", "O2", "CO2", "H2"],
    correctAnswer: "H2O"
  },
  {
    id: 8,
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Nitrogen"
  },
  {
    id: 9,
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    correctAnswer: "8"
  },
  {
    id: 10,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    correctAnswer: "Diamond"
  }
];

const MCQPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(mcqData.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, []);

  // Convert seconds to HH:MM:SS format
  const formatTime = (seconds) => {
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${s}`;
  };

  const handleOptionChange = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < mcqData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = null; // Clear the answer for the current question
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleClearOption = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = null; // Clear the answer for the current question
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    console.log("User's Answers:", answers);
    alert("Test submitted!");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* Main MCQ Section with Specific Dimensions */}
      <div
        className="bg-white p-9 shadow-md flex flex-col"
        style={{
          width: '1630px',
          height: '780px',
          position: 'absolute',
          top: '20px',
          left: '30px',
        }}
      >
        {/* User Profile and Timer Section */}
        <div className="flex justify-between items-center mb-6 p-4 rounded-md">
          <div className="flex items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/456/456212.png"
              alt="User Icon"
              className="rounded-full mr-3"
              style={{ width: '70px', height: '65px' }} // Adjust size as needed
            />
            <div className="flex flex-col">
              <p className="text-lg font-bold">Prateek Kumar</p>
              <p className="text-lg font-semibold text-gray-700">Time left: {formatTime(timeLeft)}</p>
            </div>
          </div>
        </div>

        {/* Question Section */}
        <div className="mb-5">
          <h2 className="text-2xl font-semibold">Question {currentQuestion + 1}</h2>
          <hr className="border-light-gray mb-4" />
          <p className="text-lg mb-6">1. {mcqData[currentQuestion].question}</p>

          {/* Options Section with Larger Spacing and Text */}
          <div className="space-y-6">
            {mcqData[currentQuestion].options.map((option, idx) => (
              <label key={idx} className="block text-lg">
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option}
                  checked={answers[currentQuestion] === option}
                  onChange={() => handleOptionChange(currentQuestion, option)}
                  className="mr-6"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-10 mb-3">
          <button
            onClick={handleClearOption}
            className="bg-blue-500 text-white px-8 py-1 rounded"
          >
            Clear Answer
          </button>

          {currentQuestion === mcqData.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-8 py-1 rounded"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white px-8 py-2 rounded"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MCQPage;
