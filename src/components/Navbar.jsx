import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
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
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/login' className="py-2 transition ease-in-out duration-150 px-6 border-2 border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">Login</Link>
        </div>
      </div>
    </>
  );
}
