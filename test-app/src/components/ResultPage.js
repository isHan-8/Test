import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResultPage = ({ results, mcqData }) => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleRetakeTest = () => {
    navigate('/'); // Redirects to the homepage or main page
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Correct':
        return 'bg-green-500';
      case 'Incorrect':
        return 'bg-red-500';
      case 'Unattempted':
        return 'bg-black';
      default:
        return '';
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div
        className="bg-white p-8 shadow-lg rounded-lg flex flex-col"
        style={{
          width: '90%',
          maxWidth: '1200px',
          height: 'auto',
          maxHeight: '90%',
          overflowY: 'auto', // Allow scrolling for longer content
        }}
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Test Results
        </h2>

        {/* Summary Section */}
        <div className="flex justify-between mb-8 bg-blue-50 p-4 rounded-lg shadow-inner">
          <div>
            <p className="text-lg font-semibold">
              Total Questions: <span className="font-normal">{results.totalQuestions}</span>
            </p>
            <p className="text-lg font-semibold">
              Correct Answers: <span className="font-normal">{results.correctAnswers}</span>
            </p>
            <p className="text-lg font-semibold">
              Wrong Answers: <span className="font-normal">{results.wrongAnswers}</span>
            </p>
            <p className="text-lg font-semibold">
              Unattempted Questions: <span className="font-normal">{results.unattempted}</span>
            </p>
            <p className="text-lg font-semibold">
              Time Taken: <span className="font-normal">{results.timeTaken} seconds</span>
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold">
              Total Score: <span className="font-normal">{results.totalScore}</span>
            </p>
          </div>
        </div>

        {/* Detailed Results Table */}
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full table-auto border-collapse border">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border">S.no</th>
                <th className="px-4 py-2 border">Question</th>
                <th className="px-4 py-2 border">Correct Answer</th>
                <th className="px-4 py-2 border">Your Answer</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {mcqData.map((question, index) => {
                const userAnswer = results.answers[index] || "Unattempted";
                const status = userAnswer === question.correctAnswer
                  ? "Correct"
                  : userAnswer === "Unattempted"
                  ? "Unattempted"
                  : "Incorrect";

                return (
                  <tr key={question.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="border px-4 py-2 text-center">{index + 1}</td>
                    <td className="border px-4 py-2">{question.question}</td>
                    <td className="border px-4 py-2 text-center">{question.correctAnswer}</td>
                    <td className="border px-4 py-2 text-center">{userAnswer}</td>
                    <td className="border px-4 py-2 text-center">
                      <div className="flex items-center">
                        <span className={`w-3 h-3 rounded-full ${getStatusColor(status)}`} />
                        <span className="ml-2">{status}</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Retake Test Button */}
        <div className="flex justify-center">
          <button
            onClick={handleRetakeTest}
            className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Retake Test
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
