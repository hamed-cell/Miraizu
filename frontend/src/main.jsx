import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CompanyList from "./components/CompanyList";
import CompanyDetails from "./components/CompanyDetails";
import Formulaire from "./pages/Contact/Formulaire";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/contact",
        element: <Formulaire />,
      },
      {
        path: "/",
        element: <CompanyList />,
      },
      {
        path: "/company/:id",
        element: <CompanyDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
