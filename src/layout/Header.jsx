import {
  Avatar,
  Backdrop,
  CircularProgress,
  Divider,
  IconButton as div,
  Popover,
} from "@mui/material";
import { useEffect, useState } from "react";
import {
  MdOutlineAssignmentInd,
  MdOutlineBadge,
  MdOutlineLogout,
  MdOutlineSettings,
  MdOutlineListAlt,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearState, fetchUserByToken, userSelector } from "../redux/userSlice";
import LOGO from "../resources/images/logo.png";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching, isError, isLoggedIn, errorMessage } =
    useSelector(userSelector);

  useEffect(() => {
    const token = localStorage.getItem("token");
    dispatch(fetchUserByToken({ token }));
  }, [dispatch]);

  const { fullName } = useSelector(userSelector);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      console.log(errorMessage);
    }
  }, [dispatch, isError, navigate, errorMessage]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth/sign-in");
  };

  const open = Boolean(anchorEl);

  return isFetching ? (
    <Backdrop open={true} sx={{ zIndex: "99" }}>
      <CircularProgress />
    </Backdrop>
  ) : (
    <>
      <header className="sticky h-16 top-0 left-0 right-0 z-50 bg-white border-slate-100">
        <div className="mx-auto my-1 px-2 sm:px-6">
          <div className="flex justify-between items-center">
            <Link to={"/"} className="nav-link">
              <img className="h-12" src={LOGO} alt="CIVIZEN Logo" />
            </Link>
            <div className="flex flex-row gap-2">
              <div className="hidden md:flex md:items-center">
                <Link to={"/templates"} className="nav-link btn-outline">
                  <MdOutlineAssignmentInd className="icon-sm" />
                  Mẫu CV
                </Link>
              </div>
              {isLoggedIn ? (
                <>
                  <div className="hidden md:flex md:items-center">
                    <Link to={"/my-cv"} className="nav-link btn-outline">
                      <MdOutlineListAlt className="icon-sm" />
                      CV của tôi
                    </Link>
                  </div>
                  <div
                    className="flex flex-row items-center h-10 justify-center px-2 rounded-lg border-2 border-rose-500 bg-white-500 text-rose-500 hover:cursor-pointer hover:shadow-lg"
                    onClick={handleClick}
                  >
                    <Avatar sx={{ width: 30, height: 30, bgcolor: "#f43f5e" }}>
                      {fullName[0]}
                    </Avatar>
                    <span className="ml-2 text-semibold">
                      {fullName || "Người dùng"}
                    </span>
                  </div>
                  <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                  >
                    <div className="flex flex-col py-3">
                      <Link to={"/profile"} className="header-menu__item">
                        <MdOutlineBadge className="icon-sm" />
                        <span className="ml-2 whitespace-nowrap">Hồ sơ</span>
                      </Link>
                      <Divider />
                      <div className="md:hidden">
                        <Link to="/templates" className="header-menu__item ">
                          <MdOutlineAssignmentInd className="icon-sm" />
                          <span className="ml-2 whitespace-nowrap">Mẫu CV</span>
                        </Link>
                        <Divider />
                      </div>
                      <div className="md:hidden">
                        <Link to="/my-cv" className=" header-menu__item ">
                          <MdOutlineListAlt className="icon-sm" />
                          <span className="ml-2 whitespace-nowrap">
                            CV của tôi
                          </span>
                        </Link>
                        <Divider />
                      </div>
                      <div className="header-menu__item">
                        <MdOutlineSettings className="icon-sm" />
                        <span className="ml-2 whitespace-nowrap">Cài đặt</span>
                      </div>
                      <Divider />
                      <div
                        onClick={handleLogout}
                        className="header-menu__item text-red-600"
                      >
                        <MdOutlineLogout className="icon-sm" />
                        <span className="ml-2 whitespace-nowrap ">
                          Đăng xuất
                        </span>
                      </div>
                    </div>
                  </Popover>
                </>
              ) : (
                <Link
                  to="/auth/sign-in"
                  className="font-semibold btn-contained h-10"
                >
                  Đăng nhập
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
