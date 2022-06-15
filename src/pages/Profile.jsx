import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { infoSelector } from "../redux/infoSlide";
import formTemplate from "../template/formTemplate";
import Form from "./components/Form";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../redux/userSlice";
import { MdOutlinePerson } from "react-icons/md";
const formList = Object.values(formTemplate);

const Profile = () => {
  const [selected, setSelected] = useState("profile");
  const dispatch = useDispatch();
  const info = useSelector(infoSelector);
  const navigate = useNavigate();
  const { isLoggedIn, cvDatas } = useSelector(userSelector);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth/unauthorized");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="flex flex-col bg-slate-100 py-4 px-2 md:px-4 min-h-[calc(100vh-64px)]">
      <div
        className={`bg-white flex flex-row justify-between py-4 px-1 md:px-3 rounded-lg text-slate-500 mb-6 overflow-x-scroll md:flex-wrap md:overflow-x-hidden`}
      >
        <button
          onClick={() => selected("profile")}
          className={`rounded-lg p-2 min-w-[120px] flex flex-col items-center ${
            selected === "profile" ? "text-white bg-rose-500" : "hover:text-rose-300 "
          }`}
        >
          <span>
            <MdOutlinePerson className="icon-sm" />
          </span>
          <span>Thông tin chung</span>
        </button>
        {formList.map((form) => (
          <button
            onClick={() => setSelected(form.name)}
            key={form.name}
            className={`rounded-lg p-2 min-w-[120px] flex flex-col items-center ${
              selected === form.name ? "text-white bg-rose-500" : "hover:text-rose-300 "
            }`}
          >
            <span className="mb-1">{form.icon}</span>
            <span className="font-semibold">{form.title}</span>
          </button>
        ))}
      </div>
      <div>{formList.map((form) => (form.name === selected ? <Form {...form} /> : null))}</div>
    </div>
  );
};

export default Profile;
