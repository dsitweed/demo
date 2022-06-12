import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { clearState, signInUser, userSelector } from "../../redux/userSlice";
import LOGO from "../../resources/images/logo.png";
import GoogleLogin from "../../components/GoogleLogin";
import {
  MdEmail,
  MdPassword,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { CircularProgress } from "@mui/material";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    dispatch(signInUser(data));
  };
  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, [dispatch]);
  useEffect(() => {
    if (isError) {
      console.log(errorMessage);
      dispatch(clearState());
    }
    if (isSuccess) {
      dispatch(clearState());
      navigate("/");
    }
  }, [dispatch, errorMessage, isError, isSuccess, navigate]);
  return (
    <>
      <div className="background h-screen ">
        <span className="flex md:hidden w-full p-2 mb-8">
          <Link to={"/"}>
            <img className="h-10" src={LOGO} alt="" />
          </Link>{" "}
        </span>
        <div className="w-screen md:w-[768px] mx-auto bg-white flex flex-col px-6 md:px-36 md:py-16 relative text-slate-800">
          <span className="font-semibold text-2xl mb-1">
            Chào mừng bạn trở lại,
          </span>
          <span className="text-slate-600 mb-1">
            Cùng xây dựng một CV tốt để có các cơ hội công việc tốt
          </span>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="my-5"
            autoComplete="on"
          >
            <fieldset className="">
              <div className="mb-4">
                <div className="mb-1">Email</div>
                <div className="flex flex-row items-center rounded border-2 border-slate-300">
                  <span className="flex items-center justify-center h-10 w-10">
                    <MdEmail className="icon-sm text-rose-500" />
                  </span>
                  <input
                    className="px-1 text-slate-700 flex-grow focus:outline-none"
                    {...register("email", {
                      required: true,
                      pattern:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                    placeholder="Nhập email của bạn"
                  />
                </div>
                {errors?.email?.type === "required" ? (
                  <span className="text-red-600">
                    Xin hãy nhập email của bạn
                  </span>
                ) : errors?.email?.type === "pattern" ? (
                  <span className="text-red-600">
                    Xin hãy nhập email đúng định dạng
                  </span>
                ) : null}
              </div>

              <div className="mb-4">
                <div className="mb-1 flex items-center justify-between">
                  <span>Mật khẩu</span>
                  <Link
                    className="text-rose-500 text-sm"
                    to="/auth/forgot-password"
                  >
                    Quên mật khẩu?
                  </Link>
                </div>
                <div className="flex flex-row items-center rounded border-2 border-slate-300">
                  <span className="flex items-center justify-center h-10 w-10">
                    <MdPassword className="icon-sm text-rose-500" />
                  </span>
                  <input
                    className="px-1 text-slate-700 flex-grow focus:outline-none"
                    {...register("password", { required: true })}
                    type={showPassword ? "text" : "password"}
                    placeholder="Nhập mật khẩu"
                  />
                  <span
                    className="flex items-center justify-center h-10 w-10"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <MdVisibility className="icon-sm text-rose-500" />
                    ) : (
                      <MdVisibilityOff className="icon-sm text-slate-500" />
                    )}
                  </span>
                </div>
                {errors?.password ? (
                  <span className="text-red-600">Xin hãy nhập mật khẩu</span>
                ) : null}
              </div>
            </fieldset>
            <button
              type="submit"
              className="flex items-center justify-center w-full p-3 text-center bg-rose-500 text-white rounded"
            >
              {isFetching ? (
                <CircularProgress color="inherit" size={"20px"} />
              ) : (
                <span>Đăng nhập</span>
              )}
            </button>
            <span className="flex item-center justify-center p-2">Hoặc</span>
            <div className="flex flex-row justify-center pb-5">
              <GoogleLogin />
            </div>
            <span className="text-sm flex justify-center">
              <span className="mr-1">Bạn chưa có tài khoản?</span>
              <Link className="text-rose-500" to={"/auth/sign-up"}>
                Đăng ký ngay
              </Link>{" "}
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
