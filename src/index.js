import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Koinonia from "./pages/Koinonia";
import Oikonomia from "./pages/Oikonomia";
import Diethni from "./pages/Diethni";
import Travel from "./pages/Travel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./helper/ScrollToTop";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        //Todo fix it
        path: "/koinonia",
        element: <Koinonia />,
      },
      {
        //Todo fix it
        path: "/Oikonomia",
        element: <Oikonomia />,
      },
      {
        //Todo fix it
        path: "/diethni",
        element: <Diethni />,
      },
      {
        //Todo fix it
        path: "/travel",
        element: <Travel />,
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
