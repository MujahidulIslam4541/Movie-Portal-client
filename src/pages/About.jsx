
import { FaFilm, FaHeart, FaPlayCircle, FaStar, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200 min-h-screen px-6 py-10">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-purple-700 drop-shadow-md">
          About Our Movie Portal
        </h1>
        <p className="text-gray-600 mt-4 text-lg leading-7">
          Welcome to <strong className="text-purple-600">MovieVerse</strong>, the ultimate destination for all movie enthusiasts! Explore top-rated movies, stay updated with the latest trailers, and build your personalized watchlist in one place.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-14 bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-purple-700">
          Our Mission
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          At <strong>MovieVerse</strong>, our mission is to bridge the gap between entertainment and audience. We aim to provide a seamless platform to help movie lovers explore their favorite genres, discover hidden gems, and share their passion for cinema with a global community.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid gap-10 md:grid-cols-3 text-center">
        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaStar size={50} className="text-yellow-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Top-Rated Movies</h3>
          <p className="text-gray-500 mt-2">
            Explore movies that are loved by critics and audiences worldwide.
          </p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaPlayCircle size={50} className="text-blue-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Latest Trailers</h3>
          <p className="text-gray-500 mt-2">
            Watch official trailers and get a sneak peek of upcoming blockbusters.
          </p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <FaHeart size={50} className="text-pink-500 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Personalized Favorites</h3>
          <p className="text-gray-500 mt-2">
            Create and manage a watchlist tailored to your taste.
          </p>
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="mt-16 grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
        <div className="p-6 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg shadow-lg text-center">
          <FaUsers size={60} className="text-purple-600 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Community-Driven</h3>
          <p className="text-gray-700 mt-3">
            Connect with millions of movie enthusiasts, share reviews, and join discussions.
          </p>
        </div>
        <div className="p-6 bg-gradient-to-r from-pink-100 to-pink-200 rounded-lg shadow-lg text-center">
          <FaFilm size={60} className="text-pink-600 mx-auto" />
          <h3 className="text-2xl font-semibold mt-4">Curated Recommendations</h3>
          <p className="text-gray-700 mt-3">
            Get movie suggestions based on your preferences and watch history.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <Link to='/'
          className="btn border-2 border-pink-500 px-8 hover:border-none hover:bg-gradient-to-r from-pink-200 to-pink-300 text-lg rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
        >
          Start Exploring
        </Link>
      </div>
    </div>
  );
};
export default About;
