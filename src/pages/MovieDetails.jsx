import { MdDelete } from "react-icons/md";
import { RiHeartAdd2Line } from "react-icons/ri";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MovieDetails = () => {
  const movie = useLoaderData();
  const { title, duration, genre, rating, release, textarea, photo, _id } =
    movie;
   const navigate=useNavigate()
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
        fetch(`http://localhost:5000/movies/${_id}`,{
          method:'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount>0) {
              navigate('/')
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
    <div className=" bg-red-200">
      <div className="hero  min-h-screen block md:flex md:justify-between md:items-center w-11/12 mx-auto gap-8">
        <div className="md:w-1/2 w-full">
          <img src={photo} className="rounded-xl" alt="" />
        </div>
        <div className="md:w-1/2 w-full">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{textarea}</p>
          <p> Duration: {duration}</p>
          <p>Genre : {genre}</p>
          <p>Release: {release}</p>
          <p>Rating: {rating}/10</p>
          <div className="flex gap-4 mt-5">
            <button
              onClick={() => handleDelete(_id)}
              className="px-6 py-2  rounded-lg flex gap-2 bg-[#FF4D4F] text-white hover:bg-[#D93636]"
            >
              {" "}
              <span className="text-2xl">
                <MdDelete />
              </span>
              Delete Movie
            </button>
            <button className="px-6 py-2 border rounded-lg flex gap-2 text-white bg-[#FF4D4F] hover:bg-[#D93636]">
              {" "}
              <span className="text-2xl">
                <RiHeartAdd2Line />
              </span>
              Add To Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
