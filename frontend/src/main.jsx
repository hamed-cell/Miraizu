import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CompanyList from "./components/CompanyList";
import CompanyDetails from "./components/CompanyDetails";
import Formulaire from "./pages/Contact/Formulaire";
import Inscription from "./pages/inscription/Inscription";
import AdressMap from "./pages/map/AdressMap";
import Connexion from "./pages/connexion/Connexion";

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
        path: "/company",
        element: <CompanyList />,
      },
      {
        path: "/company/:id",
        element: <CompanyDetails />,
      },
      {
        path: "/inscription",
        element: <Inscription />,
      },
      {
        path: "/map/:id",
        element: <AdressMap />,
      },
      {
        path: "/connexion",
        element: <Connexion />,
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
