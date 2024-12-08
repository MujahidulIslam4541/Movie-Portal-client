import { useLoaderData } from "react-router-dom";
import FavoriteMovies from "./FavoriteMovies";
import { MdFavorite } from "react-icons/md";

const Favaroites = () => {
  const favoriteMovies = useLoaderData();
  console.log(favoriteMovies);
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
        {favoriteMovies.map((favorite) => (
          <FavoriteMovies
            key={favorite._id}
            favorite={favorite}
          ></FavoriteMovies>
        ))}
      </div>
    </div>
  );
};

export default Favaroites;
