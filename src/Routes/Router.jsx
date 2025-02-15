import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import About from "../pages/About";
import AddMovies from "../pages/AddMovies";
import AllMovies from "../pages/AllMovies";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../components/ErrorPage";
import PrivetRoute from "../provider/privetRoute";
import MainHome from "../pages/MainHome";
import MovieDetails from "../pages/MovieDetails";
import UpdateMovie from "./UpdateMovie";
import Contact from "../components/Contact";
import FavoriteMovies from "../components/FavoriteMovies";
// import Movies from "../pages/Movies";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <MainHome></MainHome>,
        loader: () => fetch("https://movie-portal-server-lovat.vercel.app/movies"),
      },

      {
        path: "/about",
        element: <About></About>,
      },
      {
        path:'/UpdateMovie/:id',
        element:<UpdateMovie></UpdateMovie>,
        loader: ({ params }) =>
          fetch(`https://movie-portal-server-lovat.vercel.app/movies/${params.id}`)
      },
      {
        path: "/addMovies",
        element: (
          <PrivetRoute>
            <AddMovies></AddMovies>
          </PrivetRoute>
        ),
      },
      {
        path: "/allMovies",
        element: <AllMovies></AllMovies>,
      },
      {
        path: "/moviesDetails/:id",
        element: (
            <MovieDetails></MovieDetails>
        ),
        loader: ({ params }) =>
          fetch(`https://movie-portal-server-lovat.vercel.app/movies/${params.id}`),
      },
      {
        path: "/favorites",
        element: (
          <PrivetRoute>
            <FavoriteMovies></FavoriteMovies>
          </PrivetRoute>
        ),
        loader:()=>fetch('https://movie-portal-server-lovat.vercel.app/favorite')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default Router;
