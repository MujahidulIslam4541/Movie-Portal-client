import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const movie = useLoaderData();
  const { title, duration, genre, rating, release, textarea, _id, photo } =
    movie;
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
          <p>Genre :{genre}</p>
          <p>Release:{release}</p>
          <p>Rating:{rating}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
