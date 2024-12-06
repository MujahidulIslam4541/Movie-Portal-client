const Movies = ({ movie }) => {
  console.log(movie);

  const { title, duration, genre, rating, release, textarea, _id, photo } =
    movie;
  return (
    <div className="mt-10">
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={photo}
            alt={title}
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-semibold">{title}</h2>
          <div className="flex gap-2 text-sm text-gray-600">
            <span className="bg-blue-200 px-2 py-1 rounded-full">
              {genre}
            </span>
          </div>
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>{duration} mins</span>
            <span>{release}</span>
          </div>
          {/* <div className="flex items-center gap-1 text-yellow-500 mt-2">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < movie.rating ? "text-yellow-500" : "text-gray-300"
                }
              />
            ))}
          </div> */}
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary" >
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
