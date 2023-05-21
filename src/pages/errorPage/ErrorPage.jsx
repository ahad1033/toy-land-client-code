import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-lg p-8 bg-white rounded shadow">
        <Link to='/'>
          <button className="btn btn-outline btn-accent">Go to Home</button>
        </Link>
        <h2 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h2>
        <p className="text-gray-600">We are sorry, but an error occurred while processing your request.</p>
        <p className="text-gray-600">Please try again later.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
