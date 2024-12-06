import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <section className="h-16">
        <Navbar></Navbar>
      </section>
      <Outlet></Outlet>

      <Footer></Footer>
    </>
  );
};

export default Root;
