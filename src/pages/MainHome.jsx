// import { Outlet } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import UpcomingMovie from "../components/UpcomingMovie";
import ExtraSection from "../components/ExtraSection";

const MainHome = () => {
  const movies = useLoaderData();
  console.log(movies);
  return (
    <div>
      <Home></Home>

      {/* Movies section */}
      <section className="mt-20 w-11/12 mx-auto">
        <div className="w-full px-4 space-y-2 md:w-8/12 mx-auto">
          <h2 className="text-center text-2xl font-bold">
            Top Picks: Must-Watch Movies for You{" "}
          </h2>
          <p className="text-center font-semibold">
            Step into the world of cinematic brilliance with our top-rated movie
            collection! From heart-pounding action to soul-stirring dramas,
            these masterpieces promise to entertain, inspire, and captivate.
            Explore now and find your next favorite!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <Movies key={movie._id} movie={movie}></Movies>
          ))}
        </div>
      </section>

      <section className="mt-32 w-11/12 mx-auto">
        <UpcomingMovie></UpcomingMovie>
      </section>

      <section className="mt-20 w-11/12 mx-auto">
        <ExtraSection></ExtraSection>
      </section>
    </div>
  );
};

export default MainHome;
