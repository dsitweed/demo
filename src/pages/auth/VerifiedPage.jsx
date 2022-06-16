import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { checkFpsSession, userSelector } from "../../redux/userSlice";

function VerifiedPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isSuccess, isError, errorMessage, isVerifyEmail } =
    useSelector(userSelector);
  const {token} = useParams();
  useEffect(() => {
    if (token) {
      console.log("token: ", token);
      dispatch(checkFpsSession(token));
    }
  }, [isVerifyEmail]);
  return ( isVerifyEmail ? 
    <>
      1: mật khẩu mới
      2: xác thực lại mật khẩu
    </>
    : 
    <>
     Không thể xác thực email
    </>
  );
}

export default VerifiedPage;
