import React, { useState } from 'react';

const mcqData = [
    {
      id: 1,
      question: "Hina invested ₹9600 in each of bank P and Q for 4 years...",
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
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Question {currentQuestion + 1}</h2>
          <p className="mt-4">{mcqData[currentQuestion].question}</p>
          <div className="mt-4">
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
  
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="bg-gray-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
          >
            Previous
          </button>
  
          {currentQuestion === mcqData.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  };
  

export default MCQPage;
