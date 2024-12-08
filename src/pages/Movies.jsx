/* eslint-disable react/prop-types */
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Movies = ({ movie }) => {

  const { title, duration, genre, rating, release, _id, photo } = movie;
  return (
    <div className="mt-10">
      <div className="bg-gray-800 text-gray-100 rounded-lg shadow-xl overflow-hidden">
        <img
          src={photo}
          alt={title}
          className="w-full h-48 "
        />

        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <span className="badge badge-primary mt-2">{genre}</span>

          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>
              <span className="font-bold text-gray-100">
                Duration: {duration}
              </span>
              mins
            </li>
            <li>
              <span className="font-bold text-gray-100">
                Release: {release}
              </span>
              Year
            </li>
            <li>
              <span className="font-bold text-gray-100">Rating: {rating}</span>{" "}
            
            </li>
          </ul>

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
