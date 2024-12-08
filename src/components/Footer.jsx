import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-3xl p-8 mt-32 shadow-xl">
        <nav className="grid grid-flow-col gap-6 mb-4">
          <a className="link link-hover text-xl hover:text-yellow-300 transition-colors duration-300">
            About us
          </a>
          <a className="link link-hover text-xl hover:text-yellow-300 transition-colors duration-300">
            Contact
          </a>
          <a className="link link-hover text-xl hover:text-yellow-300 transition-colors duration-300">
            Jobs
          </a>
          <a className="link link-hover text-xl hover:text-yellow-300 transition-colors duration-300">
            Press kit
          </a>
        </nav>

        <div className="flex justify-center gap-8 mb-4">
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            <FaTwitter size={26} />
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            <FaFacebook size={26} />
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            <FaInstagram size={26} />
          </a>
        </div>

        <aside className="text-center mt-2">
          <p className="text-lg">
            Copyright © {new Date().getFullYear()} - All rights reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
