import { FaTrashAlt } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

/* eslint-disable react/prop-types */
const FavoriteMovies = () => {
  const favoriteMovies = useLoaderData();
  console.log(favoriteMovies);
  const handleFavoriteDelete = (_id) => {
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
        fetch(`https://movie-portal-server-lovat.vercel.app/favorite/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
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

  return (
    <div>
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-10 rounded-lg shadow-xl text-center">
        <div className="flex justify-center items-center space-x-3">
          <MdFavorite className="text-white text-4xl" />
          <h1 className="text-3xl font-bold text-white">My Favorite Movies</h1>
        </div>
        <p className="mt-5 text-lg text-gray-100 leading-relaxed">
          Movies are more than just stories on a screen—they’re experiences that
          transport us to different worlds, evoke powerful emotions, and teach
          us valuable lessons. In this section, I’ve curated a list of my
          all-time favorite movies, each with its unique charm and memorable
          moments. From heartwarming dramas to adrenaline-pumping action, and
          from thought-provoking masterpieces to lighthearted comedies, these
          films have shaped my love for cinema. Join me in celebrating these
          incredible movies that continue to inspire and entertain!
        </p>
      </div>

      {/* table section */}
      <div className="overflow-x-auto w-11/12 mx-auto mt-10">
        <table className="table">
          {/* head */}
          <thead className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Movie Name</th>
              <th>Movies Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {favoriteMovies.map((movie, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={movie.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{movie?.title}</td>
                <td>
                  <Rating
                    style={{ maxWidth: 110 }}
                    value={movie?.rating}
                    readOnly
                  />
                </td>
                <td>
                  {/* Delete Button */}
                  <button
                    onClick={() => handleFavoriteDelete(movie?._id)}
                    className="btn btn-error btn-circle text-white flex justify-center items-center"
                    aria-label="Delete Movie"
                  >
                    <FaTrashAlt className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FavoriteMovies;
