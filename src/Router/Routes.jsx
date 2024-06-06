import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet></Outlet>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);