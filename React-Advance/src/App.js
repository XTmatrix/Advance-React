import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantInfo from "./components/RestaurantInfo";
import InputForm from "./components/InputForm";
// import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

// Router Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About name={"Lawrence"} position={"Developer"} />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurantInfo/:id",
        element: <RestaurantInfo />,
      },
      {
        path: "/form",
        element: <InputForm />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// RouterProvider will get the data from appRouter and it will render accordingly
root.render(<RouterProvider router={appRouter} />);
