import { AiFillDelete, AiOutlineHeart } from "react-icons/ai";
import { MdOutlineMovie } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MovieDetails = () => {
  const movie = useLoaderData();
  const { title, duration, genre, rating, release, textarea, photo, _id } =
    movie;
  const navigate = useNavigate();
  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:5000/movies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
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
  const handleAddFavorite = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/favorite`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Movies Added Successfully",
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
        {/* Movie Image */}
        <div className="w-full h-80 md:w-1/3 rounded-lg overflow-hidden shadow-md">
          <img
            src={photo}
            alt={title}
            className=" w-full h-full"
          />
        </div>

        {/* Movie Information */}
        <div className="w-full md:w-2/3 md:ml-6 text-gray-100 mt-6 md:mt-0">
          <h2 className="text-4xl font-bold text-white mb-2">
            {title}
          </h2>
          <p className="text-gray-400 mb-4">
            {textarea}
          </p>

          {/* Movie Details */}
          <ul className="space-y-2">
          <li>
              <span className="font-semibold text-gray-300 badge badge-primary mt-2"> {genre}</span>
            </li>
            <li>
              <span className="font-semibold text-gray-300">Duration: {duration}</span> 
              mins
            </li>
            
            <li>
              <span className="font-semibold text-gray-300">Release: {release}</span> 
            </li>
            <li>
              <span className="font-semibold text-gray-300">Rating:{rating}</span>/10
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-error flex items-center space-x-2"
            >
              <AiFillDelete className="text-lg" />
              <span>Delete Movie</span>
            </button>
            <button
              onClick={() => handleAddFavorite(_id)}
              className="btn btn-success flex items-center space-x-2"
            >
              <AiOutlineHeart className="text-lg" />
              <span>Add to Favorite</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
