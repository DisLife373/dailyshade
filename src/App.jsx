import { useState, useEffect, createContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import axios from "axios";
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

export const EmailContext = createContext();

function App() {
  const [isFindUser, setFindUser] = useState(true);
  const [userEmail, setUserEmail] = useState();

  useEffect(() => {
    if (isFindUser) {
      axios
        .get("http://localhost:5000/user/getUser")
        .then((res) => {
          if (res.data.isLogin) setUserEmail(res.data.email);
          setFindUser(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "register",
      element: <Register />,
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

  return (
    <EmailContext.Provider value={[userEmail, setUserEmail]}>
      <RouterProvider router={router} />
    </EmailContext.Provider>
  );
}

export default App;

//Customer route
// {
//   path: 'customer',
//   element: <Navbar />,
//   children: [{
//           path: 'main',
//           element: <CustomerMain />
//       },{
//           path: 'status',
//           element: <StatusBar firstpage={'รอยืนยัน'} secondpage={'กำลังทำ'} thirdpage={'ให้คะแนน'} />,
//           children: [{
//                   path: 'wait',
//                   element: <UserStatusWait />
//               },{
//                   path: 'work',
//                   element: <UserStatusWork />
//               },{
//                   path: 'end',
//                   element: <UserStatusRating />
//               }]
//       },{
//           path: 'profile',
//           element: <UserProfile />
//       },{
//           path: 'profile/edit',
//           element: <UserProfileEdit />
//       },{
//           path: 'maids/profile/:id',
//           element: <UserOtherProfile />
//       },{
//           path: 'maids/profile/:id/employ',
//           element: <UserMaidEmploy />
//       }
//   ]
// }
