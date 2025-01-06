import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-3xl p-4 mt-32 shadow-xl">
        <h2 className="text-2xl font-bold text-center ">CinemaSpot</h2>
        <nav className="grid grid-flow-col gap-6 mb-4">
          <Link to='/about' className="link link-hover text-xl hover:text-yellow-300 transition-colors duration-300">
            About us
          </Link>
          <Link to='/contact' className="link link-hover text-xl hover:text-yellow-300 transition-colors duration-300">
            Contact
          </Link>
          <Link to='/allMovies' className="link link-hover text-xl hover:text-yellow-300 transition-colors duration-300">
           All Movies
          </Link>
        </nav>

        <div className="flex justify-center gap-8 ">
          <a
            href="https://x.com/i/flow/login?redirect_after_login=%2FMujahidul_Rifat"
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            <FaTwitter size={26} />
          </a>
          <a
            href="https://www.facebook.com/mujahidul.islam.rifat.223977"
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            <FaFacebook size={26} />
          </a>
          <a
            href="https://www.instagram.com/mujahidul_islam_rifat/"
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            <FaInstagram size={26} />
          </a>
          <a
            href="https://www.linkedin.com/in/mujahidul-islam-rifat-b9ab8729b/"
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            <FaLinkedin size={26} />
          </a>
        </div>

        <aside className="text-center ">
          <p className="text-lg">
            Copyright © {new Date().getFullYear()} - All rights reserved by Mujahidul Islam
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
