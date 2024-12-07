import { useLoaderData } from "react-router-dom";
import Movies from "./Movies";


const AllMovies = () => {
    const movies=useLoaderData()

    return (
        <>
        <div className="bg-violet-300 h-40 flex flex-col justify-center items-center text-center">
            <h2 className="text-4xl font-bold text-pink-500">All Movies</h2>
            <p>Browse through our extensive collection of movies from all genres! Discover a wide range of titles, from timeless classics to the latest blockbusters. <br /> Explore movie details, ratings, and more to find your next favorite film!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
            {
                movies.map(movie=><Movies key={movie._id} movie={movie}></Movies>)
            }
        </div>
        
        </>
    );
};

export default AllMovies;