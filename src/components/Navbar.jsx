import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import ThemeContoler from "./ThemeContoler";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);

  // };

  const item = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white font-semibold px-4 py-2 rounded-md"
              : "text-blue-500 px-4 py-2"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white font-semibold px-4 py-2 rounded-md"
              : "text-blue-500 px-4 py-2"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white font-semibold px-4 py-2 rounded-md"
              : "text-blue-500 px-4 py-2"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-blue-500 text-white font-semibold px-4 py-2 rounded-md"
              : "text-blue-500 px-4 py-2"
          }
          to="/allMovies"
        >
          All Movies
        </NavLink>
      </li>
      {user && user.email ? (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-500 text-white font-semibold px-4 py-2 rounded-md"
                  : "text-blue-500 px-4 py-2"
              }
              to="/addMovies"
            >
              Add Movie
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-500 text-white font-semibold px-4 py-2 rounded-md"
                  : "text-blue-500 px-4 py-2"
              }
              to="/favorites"
            >
              My Favorites
            </NavLink>
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );
  return (
    <>
      <div className="navbar px-2 md:px-16 backdrop-blur-xl z-50 fixed top-0 left-0 bg-gray-800/30  ">
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
              className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {item}
              <div className="mt-5">
                {user && user.email ? (
                  <button
                    onClick={logOut}
                    className="py-2  transition ease-in-out duration-150 px-6 border-2 border-blue-500 rounded-lg hover:bg-blue-500 text-white"
                  >
                    LogOut
                  </button>
                ) : (
                  <div className="flex gap-1">
                    <Link
                      to="/register"
                      className="py-2 transition ease-in-out duration-150 px-6 border-2 border-blue-500 rounded-lg hover:bg-blue-500 text-white"
                    >
                      Register
                    </Link>
                    <Link
                      to="/login"
                      className="py-2 transition ease-in-out duration-150 px-6 border-2 border-blue-500 rounded-lg hover:bg-blue-500 text-white"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <ThemeContoler></ThemeContoler>
              </div>
            </ul>
          </div>
          <a className=" text-2xl font-bold text-blue-600">CinemaSpot</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{item}</ul>
        </div>
        <div className="navbar-end">
          <div className="hidden md:block ">
            <ThemeContoler></ThemeContoler>
          </div>
          <div className="flex gap-2 items-center">
            {user && user.email ? (
              <div className="group relative inline-block">
                <img
                  className="w-10 h-10 rounded-full mr-2"
                  src={user.photoURL}
                  alt=""
                />
                <p className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full opacity-0 group:hover:-translate-y-1 bg-gray-800 text-white text-sm px-2 py-1 rounded group-hover:opacity-100 transition-all duration-300 w-40 ">
                  {user.displayName}
                </p>
              </div>
            ) : (
              ""
            )}
            <div className="hidden lg:flex">
              {user && user.email ? (
                <button
                  onClick={logOut}
                  className="py-2  transition ease-in-out duration-150 px-6 border-2 border-blue-500 rounded-lg hover:bg-blue-500 text-white"
                >
                  LogOut
                </button>
              ) : (
                <div className="flex gap-1">
                  <Link
                    to="/register"
                    className="py-2 transition ease-in-out duration-150 px-6 border-2 border-blue-500 rounded-lg hover:bg-blue-500 text-white"
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="py-2 transition ease-in-out duration-150 px-6 border-2 border-blue-500 rounded-lg hover:bg-blue-500 text-white"
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
