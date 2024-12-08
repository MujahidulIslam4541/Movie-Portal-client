import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import ThemeContoler from "./ThemeContoler";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  return (
    <>
      <div className="navbar  backdrop-blur-xl z-50 fixed top-0 left-0 bg-blue-400/30  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/allMovies">All Movies</Link>
              </li>
              <li>
                <Link to="/addMovies">Add Movie</Link>
              </li>
              <li>
                <Link to="/favorites">My Favorites</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold">CinemaSpot</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="/"
                className=" hover:border-2 hover:border-blue-500 transition ease-in-out duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className=" hover:border-2 hover:border-blue-500 transition ease-in-out duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/allMovies"
                className=" hover:border-2 hover:border-blue-500 transition ease-in-out duration-200"
              >
                All Movies
              </Link>
            </li>
            <li>
              <Link
                to="/addMovies"
                className="hover:border-2 hover:border-blue-500 transition ease-in-out duration-200"
              >
                Add Movie
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className="hover:border-2 hover:border-blue-500 transition ease-in-out duration-200"
              >
                My Favorites
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            <ThemeContoler></ThemeContoler>
          </div>
          <div>
            {user && user.email ? (
              <div>
                <img
                  className="w-10 h-10 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
                {/* <p>{user.displayName}</p> */}
              </div>
            ) : (
              <p className="text-4xl mr-4">
                <FaRegUserCircle />
              </p>
            )}
          </div>
          {user && user.email ? (
            <button
              onClick={logOut}
              className="py-2 transition ease-in-out duration-150 px-6 border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white"
            >
              LogOut
            </button>
          ) : (
            <Link
              to="/login"
              className="py-2 transition ease-in-out duration-150 px-6 border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
