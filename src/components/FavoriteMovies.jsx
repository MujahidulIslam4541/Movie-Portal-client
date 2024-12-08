import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const FavoriteMovies = ({ favorite }) => {
  const { title, duration, genre, rating, release, textarea, photo, _id } =
    favorite;

  const handleFavoriteDelete=_id=>{
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
  }


  return (
    <div className="w-11/12 mx-auto shadow-xl  flex gap-4 mt-16">
      <div className="bg-base-200 shadow-xl rounded-lg flex items-center p-4 space-x-4">
      {/* Movie Poster */}
      <img
        src={photo}
        alt="Pathaan Poster"
        className="w-28 h-40 rounded-lg "
      />

      {/* Movie Info */}
      <div className="flex-1">
        <h2 className="text-xl font-bold text-primary">{title}</h2>
        <p className="text-sm text-gray-600 mt-1">
         {textarea}
        </p>
        <ul className="text-sm text-gray-500 mt-3 space-y-1">
          <li>
            <span className="font-bold text-gray-700">Year:{release}</span> 
          </li>
          <li>
            <span className="badge badge-primary mt-2"> {genre}</span> 
          </li>
          <li>
            <span className="font-bold text-gray-700">Duration:{duration}</span> mins
          </li>
          <li>
            <span className="font-bold text-gray-700">Rating: {rating}</span> /10
          </li>
        </ul>
      </div>

      {/* Delete Button */}
      <button onClick={()=>handleFavoriteDelete(_id)}
        className="btn btn-error btn-circle text-white flex justify-center items-center"
        aria-label="Delete Movie"
      >
        <FaTrashAlt className="text-lg" />
      </button>
    </div>
      
    </div>
  );
};

export default FavoriteMovies;
