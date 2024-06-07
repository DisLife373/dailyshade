import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import "./index.css";
import StickyNavbar from "./components/navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Momentary from "./pages/Momentary";
import Account from "./pages/Account";
import FogetPW from "./pages/FogetPW";
import Footer from "./components/footer";
import { Auth } from "./pages/Authen";

function App() {
  const router = createBrowserRouter([
    {
      path: "auth",
      element: <Auth />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "forgetpw",
      element: <FogetPW />,
    },
    {
      path: "account",
      element: (
        <>
          <StickyNavbar />
          <Account />
          <Footer />
        </>
      ),
    },
    {
      path: "momentary",
      element: (
        <>
          <StickyNavbar />
          <Momentary />
          <Footer />
        </>
      ),
    },
    {
      path: "/",
      element: (
        <>
          <StickyNavbar />
          <Home />
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
