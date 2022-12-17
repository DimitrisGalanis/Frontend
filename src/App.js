import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Koinonia from "./pages/Koinonia";
import Oikonomia from "./pages/Oikonomia";
import Diethni from "./pages/Diethni";
import Texnologia from "./pages/Texnologia";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./helper/ScrollToTop";
import Athlitismos from "./pages/Athlitismos";

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
        path: "/ellada",
        element: <Koinonia />,
      },
      {
        //Todo fix it
        path: "/diethni",
        element: <Diethni />,
      },
      {
        //Todo fix it
        path: "/athlitismos",
        element: <Athlitismos />,
      },
      {
        //Todo fix it
        path: "/texnologia",
        element: <Texnologia />,
      },
      {
        //Todo fix it
        path: "/oikonomia",
        element: <Oikonomia />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
