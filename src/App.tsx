import React from "react";
import "./styles/globals.sass";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./views/home/Home";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
