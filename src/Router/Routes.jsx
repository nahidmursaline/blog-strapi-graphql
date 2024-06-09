import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ReviewDetails from "../Pages/ReviewDetails/ReviewDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet></Outlet>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'details/:id',
          element: <ReviewDetails></ReviewDetails>
        }
      ]
    },
  ]);