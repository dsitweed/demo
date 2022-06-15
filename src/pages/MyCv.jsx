import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../redux/userSlice";
import { MdInventory } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
function MyCv() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, cvDatas } = useSelector(userSelector);
  if (!isLoggedIn) {
    navigate("/auth/unauthorized");
  }
  return (
    <div className="flex flex-col bg-slate-100 py-4 px-5 md:px-10 lg:px-40 min-h-[calc(100vh-64px)]">
      <span className="text-rose-500 text-xl font-bold mb-2">CV của bạn</span>
      {cvDatas.length === 0 ? (
        <div className="flex-grow flex flex-col items-center justify-center text-slate-600">
          <MdInventory className="h-16 w-16" />
          <span className="flex flex-col items-center mt-2">
            <span>Bạn chưa tạo CV nào 😥,</span>
            <Link className="ml-2 text-rose-500 font-semibold" to={"/templates"}>
              Chọn một mẫu và bắt đầu tạo 1 CV mới
            </Link>
          </span>
        </div>
      ) : (
        <div className="flex h-full flex-col md:grid md:grid-cols-3 gap-5 lg:gap-10">
          {cvDatas.map((cv) => (
            <div>12</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyCv;
