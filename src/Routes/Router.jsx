
import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
// import { Root } from "postcss";

const Router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
  },
]);

export default Router;
