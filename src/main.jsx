import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Header from "./components/Header/Header.jsx";
import Technologies from "./components/Technologies/Technologies.jsx";

const ErrorRedirect = () => {
  return <Navigate to="/" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorRedirect />,
    element: <Navigate to="/about" />,
  },
  {
    path: "/about",
    // errorElement: <ErrorRedirect />,
    element: (
      <div>
        <Header />
        <About />
      </div>
    ),
  },
  {
    path: "/technologies",
    // errorElement: <ErrorRedirect />,
    element: (
      <div>
        <Header />
        <Technologies />
      </div>
    ),
  },
  {
    path: "/projects",
    // errorElement: <ErrorRedirect />,
    element: (
      <div>
        <Header />
        <Projects />
      </div>
    ),
  },
  {
    path: "/contact",
    // errorElement: <ErrorRedirect />,
    element: (
      <div>
        <Header />
        <Contact />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
