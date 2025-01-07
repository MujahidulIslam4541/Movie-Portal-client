import Movies from "./Movies";
import { MdLocalMovies } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [sort,setSort]=useState('')
  useEffect(() => {
    axios.get(`https://movie-portal-server-lovat.vercel.app/movies?search=${search}&sort=${sort}`).then((res) => {
      setMovies(res.data);
    });
  }, [search,sort]);

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
          onChange={(e) => setSearch(e.target.value)}
          className="w-96 p-3 border-2 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
          placeholder="Search for your favorite movie..."
          aria-label="Search for movies"
        />
        <select
          name="order"
          onChange={e=>setSort(e.target.value)}
          className="w-48 p-3 border-2 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
        >
          <option value="" disabled selected>
            Sort by Rating
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
