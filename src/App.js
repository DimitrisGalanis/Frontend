import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Post from "./pages/Post";
import OikonomiaPage from "./pages/OikonomiaPage";
import PoliticsPage from "./pages/PoliticsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./helper/ScrollToTop";
import SportPage from "./pages/SportPage";
import Write from "./pages/Write";
import KosmosPage from "./pages/KosmosPage";
import Dashboard from "./pages/Dashboard";

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
        path: "/posts/:id",
        element: <Post />,
      },
      {
        //Todo fix it
        path: "/kosmos",
        element: <KosmosPage />,
      },
      {
        //Todo fix it
        path: "/oikonomia",
        element: <OikonomiaPage />,
      },
      {
        //Todo fix it
        path: "/politiki",
        element: <PoliticsPage />,
      },
      {
        //Todo fix it
        path: "/sports",
        element: <SportPage />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Signup",
        element: <Signup />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
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
