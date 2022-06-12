import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearState, signInUser, userSelector } from "../../redux/userSlice";
import LOGO from "../../resources/images/logo.png";

function ForgotPassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

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
  }, [dispatch, errorMessage, isError, navigate]);
  return (
    <>
      <div className="background h-screen ">
        <span className="flex md:hidden w-full p-2 mb-8">
          <Link to={"/"}>
            <img className="h-10" src={LOGO} alt="" />
          </Link>{" "}
        </span>
        <div className="w-screen md:w-[768px] mx-auto bg-white flex flex-col px-6 md:px-36 md:py-16 relative text-slate-800">
          <span className="font-semibold text-2xl mb-1">Quên mật khẩu ?</span>
          <span className="text-slate-600 mb-1">
            Hãy cho chúng tôi biết địa chỉ email của bạn và một liên kết khôi
            phục mật khẩu sẽ được gửi tới sau vài phút
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
            </fieldset>
            <button
              type="submit"
              className="flex items-center justify-center w-full p-3 text-center bg-rose-500 text-white rounded"
            >
              {isFetching ? (
                <CircularProgress color="inherit" size={"20px"} />
              ) : (
                <span>Đặt lại mật khẩu</span>
              )}
            </button>
            <span className="text-sm flex justify-center mt-3">
              <Link className="text-rose-500" to={"/auth/sign-in"}>
                Trở về đăng nhập
              </Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
