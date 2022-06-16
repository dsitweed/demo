import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearState, userSelector } from "../../redux/userSlice";

function ChangePassword() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isFetching, isSuccess, isError, errorMessage, isVerifyEmail } =
    useSelector(userSelector);

  useEffect(() => {
    
  }, []);

  return (
    <>
      <div>
        Trang chờ xác thực email.
      </div>
    </>
  );
}

export default ChangePassword;
