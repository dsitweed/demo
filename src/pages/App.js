import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import ForgotPassword from "./auth/ForgotPassword";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import Home from "./Home";
import MyCv from "./MyCv";
import Profile from "./Profile";
import Templates from "./Templates";

function App() {
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
      </Route>
    </Routes>
  );
}

export default App;
