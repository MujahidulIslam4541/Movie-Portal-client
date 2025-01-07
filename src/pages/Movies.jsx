/* eslint-disable react/prop-types */
import { Rating } from "@smastrom/react-rating";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";

const Movies = ({ movie }) => {
  const { title, duration, genre, rating,  _id, photo } = movie;
  return (
    <div className="mt-10">
      <div className="bg-gray-800 text-gray-100 rounded-lg shadow-xl overflow-hidden">
        <div className="relative">
          {/* Image */}
          <img
            src={photo}
            alt={title}
            className="w-full h-48 object-cover rounded-lg"
          />

          {/* Duration Badge */}
          <span className="absolute top-2 right-2 bg-blue-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
            {duration} mins
          </span>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">{title}</h2>

          <span className="badge badge-primary mt-2">{genre}</span>

          <p className="mt-4">
            <Rating style={{ maxWidth: 90 }} value={rating} readOnly />
          </p>

          <Link
            to={`/moviesDetails/${_id}`}
            className="btn btn-primary w-full mt-4 flex items-center justify-center space-x-2"
          >
            <AiOutlineInfoCircle className="text-lg" />
            <span>See Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movies;
