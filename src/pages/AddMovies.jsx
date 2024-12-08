import Swal from "sweetalert2";

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
    const textarea = from.textarea.value;
    const AddMovies = {
      photo,
      title,
      genre,
      duration,
      release,
      rating,
      textarea,
    };

    if (!textarea || !photo || !title || !genre || !duration || !rating) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please provide all required fields!",
      });
    }

    fetch("https://movie-portal-server-lovat.vercel.app/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(AddMovies),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Movies Added Successfully",
            icon: "success",
          });
        }
      });
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
            <select
              name="genre"
              id=""
              className="w-full border py-2 rounded-md px-4"
            >
              <option value="Comedy">Comedy</option>
              <option value="Action">Action</option>
              <option value="Horror">Horror</option>
              <option value="Drama">Drama </option>
              <option value="Thriller">Thriller</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Romance">Romance</option>
            </select>
          </div>
          <div>
            <label>Duration</label>
            <br />
            <input
              type="number"
              name="duration"
              placeholder="Duration"
              className="w-full border py-2 rounded-md px-4"
            />
          </div>
          <div>
            <label>Release Year</label>
            <br />
            <select
              name="release"
              id=""
              className="w-full border py-2 rounded-md px-4"
            >
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
          <div>
            <label>Rating </label>
            <br />
            <input
              type="number"
              name="rating"
              placeholder="Rating "
              className="w-full border py-2 rounded-md px-4"
            />
          </div>
          <div className="col-span-2">
            <textarea
              name="textarea"
              id=""
              rows="5"
              className="w-full border py-2 rounded-md px-4"
              placeholder="Please Enter Your Movies Details"
            ></textarea>
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
