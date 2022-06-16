import { Alert, Slide, Snackbar, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { MdOutlinePerson } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { clearState, getInfoServer, infoSelector, updateInfoServer } from "../redux/infoSlide";
import formTemplate from "../template/formTemplate";
import Form from "./components/Form";
import ProfileForm from "./components/ProfileForm";
const formList = Object.values(formTemplate);

const Profile = () => {
  const dispatch = useDispatch();
  const info = useSelector(infoSelector);
  const [selected, setSelected] = useState("profile");
  useEffect(() => {
    dispatch(getInfoServer());
  }, [dispatch]);
  const handleUpdate = () => {
    const { data } = info;
    dispatch(updateInfoServer({ info: data }));
  };
  return (
    <>
      <div className="flex flex-col bg-slate-100 py-4 px-2 md:px-4 min-h-[calc(100vh-64px)]">
        <div
          className={`bg-white flex flex-row justify-between py-4 px-1 md:px-3 rounded-lg text-slate-500 mb-6 overflow-x-scroll md:flex-wrap md:overflow-x-hidden`}
        >
          <button
            onClick={() => setSelected("profile")}
            className={`rounded-lg p-2 min-w-[120px] flex flex-col items-center ${
              selected === "profile" ? "text-white bg-rose-500" : "hover:text-rose-300 "
            }`}
          >
            <span className="mb-1">
              <MdOutlinePerson className="icon-sm" />
            </span>
            <span className="font-semibold">Thông tin</span>
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
        <div>
          {selected === "profile" ? <ProfileForm /> : null}
          {formList.map((form) => (form.name === selected ? <Form {...form} key={form.name} /> : null))}
        </div>
        <button
          type="submit"
          className="flex justify-center items-center mx-auto w-1/3 p-3 text-center bg-rose-500 text-white rounded"
          onClick={handleUpdate}
        >
          {info.loading === "pending" ? <CircularProgress color="inherit" size={"20px"} /> : <span>Cập nhật</span>}
        </button>
      </div>
      <Snackbar
        open={info.loading === "succeeded"}
        autoHideDuration={4000}
        TransitionComponent={Slide}
        onClose={() => dispatch(clearState())}
      >
        <Alert severity="success">Lưu thành công</Alert>
      </Snackbar>
      <Snackbar
        open={info.loading === "failed"}
        autoHideDuration={4000}
        TransitionComponent={Slide}
        onClose={() => dispatch(clearState())}
      >
        <Alert severity="error">Có lỗi xảy ra</Alert>
      </Snackbar>
    </>
  );
};

export default Profile;
