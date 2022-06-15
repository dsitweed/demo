import React from "react";
import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
      <span className="text-5xl font-bold">403</span>
      <span className="text-3xl font-bold">Bạn không thể truy cập trang này</span>
      <span>Hãy đăng nhập!!!</span>
      <Link to="/auth/sign-in" className="font-semibold btn-contained h-10">
        Đăng nhập
      </Link>
    </div>
  );
}

export default Unauthorized;
