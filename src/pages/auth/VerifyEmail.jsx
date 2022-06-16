import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearState, forgetPassword, signInUser, userSelector } from "../../redux/userSlice";

function VerifyEmail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isSuccess, isError, errorMessage, isVerifyEmail } =
    useSelector(userSelector);

  useEffect(() => {
    if (isVerifyEmail === true) {
      navigate("/");
    }
  }, [isVerifyEmail]);    
  useEffect(() => {
    if (isError) {
      console.log(errorMessage);
      dispatch(clearState());
    }
  }, [dispatch, errorMessage, isError, navigate]);

  return (
    <>
      <div>
        Trang chờ xác thực email.
      </div>
    </>
  );
}

export default VerifyEmail;
