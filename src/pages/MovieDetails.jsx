import { AiFillDelete, AiOutlineHeart } from "react-icons/ai";
import { FaEdit, FaPlay } from "react-icons/fa";
import { MdOutlineMovie } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MovieDetails = () => {
  const movie = useLoaderData();
  const { title, duration, genre, rating, release, textarea, photo, _id } =
    movie;
  const navigate = useNavigate();
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://movie-portal-server-lovat.vercel.app/movies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              navigate("/");
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  // add favorite section added
  const handleAddFavorite = () => {
    fetch(`https://movie-portal-server-lovat.vercel.app/favorite`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Add to Favorite Successfully",
            icon: "success",
          });
        }
      });
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-10 rounded-lg shadow-xl text-center">
        <div className="flex justify-center items-center space-x-3">
          <MdOutlineMovie className="text-yellow-400 text-4xl" />
          <h1 className="text-3xl font-bold text-white">Movie Details</h1>
        </div>
        <p className="mt-5 text-lg text-gray-300 leading-relaxed">
          Welcome to the detailed view of your selected movie! Here, you’ll find
          all the important information, from the plot summary and cast details
          to reviews, ratings, and much more. Dive deeper into what makes this
          movie special, explore behind-the-scenes facts, and discover why its a
          must-watch. Enjoy a cinematic journey right at your fingertips!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg">
        <div className="w-full h-80 md:w-1/3 rounded-lg overflow-hidden shadow-md">
          <img src={photo} alt={title} className=" w-full h-full" />
        </div>

        <div className="w-full md:w-2/3 md:ml-6 text-gray-100 mt-6 md:mt-0">
          <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
          <p className="text-gray-400 mb-4">{textarea}</p>

          {/* Movie Details */}
          <ul className="space-y-2">
            <li>
              <span className="font-semibold text-gray-300 badge badge-primary mt-2">
                {" "}
                {genre}
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-300">
                Duration: {duration}
              </span>
              mins
            </li>

            <li>
              <span className="font-semibold text-gray-300">
                Release: {release}
              </span>
            </li>
            <li>
              <span className="font-semibold text-gray-300">
                Rating: {rating}
              </span>
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <AiFillDelete className="text-lg" />
              <span>Delete Movie</span>
            </button>
            <button
              onClick={() => handleAddFavorite(_id)}
              className="btn btn-success flex items-center space-x-2 hover:scale-105 transition-transform duration-300"
            >
              <AiOutlineHeart className="text-lg" />
              <span>Add to Favorite</span>
            </button>

            <Link to={`/updateMovie/${_id}`} className="btn btn-warning  px-8 py-3 shadow-lg flex items-center gap-2 hover:bg-yellow-600 transition duration-300 hover:scale-105 ">
              <FaEdit className="text-white" />
              Update Movie
            </Link>

          
          </div>
          <Link
              to={"/allMovies"}
              className="btn btn-primary mt-4 w-52   px-8 py-3 shadow-lg flex items-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <FaPlay className="text-white" />
              See All Movies
            </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
