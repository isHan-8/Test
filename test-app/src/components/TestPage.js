import { Link } from 'react-router-dom';

// const TestPage = () => {
    const TestPage = ({ test }) => {
        return (
          <div className="p-4 shadow-md">
            <h3 className="font-semibold">{test.title}</h3>
            <p>Total Questions: {test.totalQuestions}</p>
            <p>Max Score: {test.maxScore}</p>
            <p>Total Time: {test.totalTime}</p>
            <Link to="/pnb-so-test">
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Take Test</button>
            </Link>
          </div>
        );
      };
export default TestPage;
