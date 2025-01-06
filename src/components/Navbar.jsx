import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import ThemeContoler from "./ThemeContoler";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [active, setActive] = useState("/");

  const handleActive = (section) => {
    setActive(section);
  };

  const item = (
    <>
      <li>
        <Link
          to="/"
          onClick={() => {
            handleActive("/");
          }}
          className={`${
            active === "/"
              ? " bg-blue-500 text-white font-semibold  hover:bg-blue-600"
              : "text-white"
          } transition ease-in-out duration-300`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          onClick={() => handleActive("/about")}
          className={`${
            active === "/about"
              ? "bg-blue-500 text-white font-semibold  hover:bg-blue-600"
              : "text-white"
          } transition ease-in-out duration-300`}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          onClick={() => handleActive("/contact")}
          className={`${
            active === "/contact"
              ? "bg-blue-500 text-white font-semibold  hover:bg-blue-600"
              : "text-white"
          } transition ease-in-out duration-300`}
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/allMovies"
          onClick={() => handleActive("/allMovies")}
          className={`${
            active === "/allMovies"
              ? "bg-blue-500 text-white font-semibold  hover:bg-blue-600"
              : "text-white"
          } transition ease-in-out duration-300`}
        >
          All Movies
        </Link>
      </li>
      {user && user.email ? (
        <>
          <li>
            <Link
              to="/addMovies"
              onClick={() => handleActive("/addMovies")}
              className={`${
                active === "/addMovies"
                  ? "bg-blue-500 text-white font-semibold  hover:bg-blue-600"
                  : "text-white"
              } transition ease-in-out duration-300`}
            >
              Add Movie
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              onClick={() => handleActive("/favorites")}
              className={`${
                active === "/favorites"
                  ? "bg-blue-500 text-white font-semibold  hover:bg-blue-600"
                  : "text-white"
              } transition ease-in-out duration-300`}
            >
              My Favorites
            </Link>
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );
  return (
    <>
      <div className="navbar px-16 backdrop-blur-xl z-50 fixed top-0 left-0 bg-gray-800/30  ">
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
              {item}

              <div>
                <ThemeContoler></ThemeContoler>
              </div>
            </ul>
          </div>
          <a className=" text-2xl font-bold">CinemaSpot</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{item}</ul>
        </div>
        <div className="navbar-end">
          <div className="hidden md:block ">
            <ThemeContoler></ThemeContoler>
          </div>
          <div>
            {user && user.email ? (
              <div>
                <img
                  className="w-10 h-10 rounded-full mr-2"
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
