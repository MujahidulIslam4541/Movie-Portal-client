
import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import AddMovies from "../pages/AddMovies";
import AllMovies from "../pages/AllMovies";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import { Root } from "postcss";

const Router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/addMovies',
        element:<AddMovies></AddMovies>
      },
      {
        path:'/allMovies',
        element:<AllMovies></AllMovies>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },

]);

export default Router;
