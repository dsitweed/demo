import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import { checkLoggedIn, fetchUserByToken, userSelector } from "../redux/userSlice";
import { getInfoServer } from "../redux/infoSlide";
import { getCookie } from "../utils";
import ForgotPassword from "./auth/ForgotPassword";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import VerifiedPage from "./auth/VerifiedPage";
import VerifyEmail from "./auth/VerifyEmail";
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
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getInfoServer());
    }
  }, [isLoggedIn, dispatch]);

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
        <Route path="verify-email" element={<VerifyEmail />}/>
        <Route path="verified-page/:token" element={<VerifiedPage />}/>
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>
    </Routes>
  );
}

export default App;
