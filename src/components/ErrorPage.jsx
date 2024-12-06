import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 via-purple-100 to-pink-50">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-bold text-purple-600 drop-shadow-lg">
          404
        </h1>
        <p className="text-xl font-semibold text-gray-700 mt-4">
          Uh-oh! We can’t find that page.
        </p>
        <p className="text-gray-500 mt-2">
          The page you’re looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn btn-accent flex items-center justify-center gap-2 px-6 py-3 text-lg shadow-lg hover:scale-105 transition-transform duration-200"
          >
            <FaArrowLeft size={20} />
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
