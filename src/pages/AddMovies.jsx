const AddMovies = () => {
  const handleAddMovies = (e) => {
    e.preventDefault();
    const from = e.target;
    const photo = from.photo.value;
    const title = from.title.value;
    const genre = from.genre.value;
    const duration = from.duration.value;
    const release = from.release.value;
    const rating = from.rating.value;
    console.log({ photo, title, genre, duration, release, rating  });
  };

  return (
    <div className="w-10/12 mx-auto rounded-lg mt-20 bg-pink-200 ">
      <h2 className="text-2xl text-center py-4 font-bold">Add Movies</h2>
      <form onSubmit={handleAddMovies}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
          <div>
            <label>Movie Portal</label>
            <br />
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="w-full border py-2 rounded-md px-4"
            />
          </div>
          <div>
            <label>Movie Title</label>
            <br />
            <input
              type="text"
              name="title"
              placeholder="Movie Title"
              className="w-full border py-2 rounded-md px-4"
            />
          </div>
          <div>
            <label>Genre</label>
            <br />
            <input
              type="text"
              name="genre"
              placeholder="Genre"
              className="w-full border py-2 rounded-md px-4"
            />
          </div>
          <div>
            <label>Duration</label>
            <br />
            <input
              type="text"
              name="duration"
              placeholder="Duration"
              className="w-full border py-2 rounded-md px-4"
            />
          </div>
          <div>
            <label>Release Yea</label>
            <br />
            <input
              type="text"
              name="release"
              placeholder="Release Year"
              className="w-full border py-2 rounded-md px-4"
            />
          </div>
          <div>
            <label>Rating </label>
            <br />
            <input
              type="text"
              name="rating"
              placeholder="Rating "
              className="w-full border py-2 rounded-md px-4"
            />
          </div>

          <div className="col-span-2 bg-pink-500 text-white py-2 text-center rounded-md text-xl font-semibold">
            <input type="submit" value="Add Movie" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMovies;
