/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Movies = ({ movie }) => {
  // console.log(movie);

  const { title, duration, genre, rating, release,  _id, photo } =
    movie;
  return (
    <div className="mt-10">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt={title}
            className="w-full h-64 "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">{title}</h2>
          <div className="flex gap-2 text-sm text-gray-600">
            <span className="bg-blue-200 px-2 py-1 rounded-full">
              {genre}
            </span>
          </div>
          <div className="flex flex-col text-gray-500 mt-2">
            <span>Duration: <span className="text-xl text-black font-semibold">{duration} mins</span></span>
            <span>Release: <span className="text-xl text-black font-semibold">{release} Year</span></span>
            <span> Rating :<span className="text-xl font-semibold text-black">{rating}/10</span></span>
          </div>
          
          <div className="card-actions  mt-4">
            <Link to={`/moviesDetails/${_id}`} className="btn bg-blue-500 text-white hover:bg-blue-400 transition duration-150 ease-in-out">See Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
