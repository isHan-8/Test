import React, { useState, useEffect } from 'react';

const mcqData = [
  {
    id: 1,
    question: "Hina invested ₹9600 in each of bank P and Q for 4 years. Bank P offers simple interest at 4% rate of interest whereas bank Q offers simple interest at 7% rate of interest",
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
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
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
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    console.log("User's Answers:", answers);
    alert("Test submitted!");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Profile Section */}
      <div className="w-full bg-white p-1 m-6 flex items-center justify-between shadow-md">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="User Icon"
            className="rounded-full mr-3"
          />
          <div>
            <p className="text-9 ">Prateek Kumar</p>
            <p className="text-7 font-semibold text-gray-600">Time left : {formatTime(timeLeft)}</p>
          </div>
        </div>
      </div>

      {/* Main MCQ Section */}
      <div className="w-full max-w-8xl bg-white p-9 shadow-md flex flex-col h-full">
        <div className="mb-5">
          <h2 className="text-xl font-semibold">Question {currentQuestion + 1}</h2>
          <hr className="border-light-gray mb-2" />
          <p className="mt-6 text-xl"> 1. {mcqData[currentQuestion].question}</p>
          <div className="mt-6 space-y-4 p-5"> {/* Added space between options */}
            {mcqData[currentQuestion].options.map((option, idx) => (
              <label key={idx} className="block">
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option}
                  checked={answers[currentQuestion] === option}
                  onChange={() => handleOptionChange(currentQuestion, option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-80">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="bg-gray-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
          >
            Clear Section
          </button>

          {currentQuestion === mcqData.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-3 rounded"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white px-3 py-2 rounded"
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
