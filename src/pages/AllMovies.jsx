import { useLoaderData } from "react-router-dom";
import Movies from "./Movies";
import { MdLocalMovies } from "react-icons/md";

const AllMovies = () => {
  const movies = useLoaderData();

  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-10 rounded-lg shadow-xl text-center">
        <div className="flex justify-center items-center space-x-3">
          <MdLocalMovies className="text-white text-4xl" />
          <h1 className="text-3xl font-bold text-white">
            All Movies Collection
          </h1>
        </div>
        <p className="mt-5 text-lg text-gray-100 leading-relaxed">
          Dive into an extensive collection of movies spanning various genres,
          timelines, and styles. From timeless classics to the latest
          blockbusters, this section offers something for every movie
          enthusiast. Whether youre in the mood for action-packed adventures,
          heartfelt dramas, hilarious comedies, or thought-provoking stories,
          youll find them all here. Explore, discover, and enjoy the cinematic
          treasures that define storytelling at its best!
        </p>
      </div>

      <div className="mt-10 w-11/12 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <input
          type="search"
          name="movieSearch"
          id="movieSearch"
          className="w-96 p-3 border-2 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-md"
          placeholder="Search for your favorite movie..."
          aria-label="Search for movies"
        />
        <select
          name="order"
          id="order"
          className="w-48 p-3 border-2 rounded-lg text-lg focus:outline-none focus:ring-4 focus:ring-blue-500 shadow-md"
        >
          <option value="" disabled selected>
            Sort by Order
          </option>
          <option value="asc">Ascending Order</option>
          <option value="desc">Descending Order</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
        {movies.map((movie) => (
          <Movies key={movie._id} movie={movie}></Movies>
        ))}
      </div>
    </>
  );
};

export default AllMovies;
