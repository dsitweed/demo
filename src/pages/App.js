import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import { checkLoggedIn, fetchUserByToken, getInfo, userSelector } from "../redux/userSlice";
import { getCookie } from "../utils";
import ForgotPassword from "./auth/ForgotPassword";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Unauthorized from "./auth/Unauthorized";
import Home from "./Home";
import MyCv from "./MyCv";
import Profile from "./Profile";
import Templates from "./Templates";

function App() {
  const dispatch = useDispatch();
  const { isFetching, isError, isLoggedIn } = useSelector(userSelector);

  useEffect(() => {
    dispatch(checkLoggedIn());
    if (isLoggedIn) {
      dispatch(getInfo());
    }
  }, [isLoggedIn]);

  return (
    <Routes>
      <Route
        element={
          <Layout>
            <Outlet />
          </Layout>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/my-cv" element={<MyCv />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/auth">
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>
    </Routes>
  );
}

export default App;
