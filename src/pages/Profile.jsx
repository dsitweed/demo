import { useState } from "react";
import formTemplate from "../template/formTemplate";
import Form from "./components/Form";

const formList = Object.values(formTemplate);

const Profile = () => {
  const [selected, setSelected] = useState("profile");
  return (
    <div className="flex flex-col bg-slate-100 py-4 px-2 md:px-4 min-h-[calc(100vh-64px)]">
      <div
        className={`bg-white flex flex-row justify-between py-4 px-1 md:px-3 rounded-lg text-slate-500 mb-6 overflow-x-scroll md:flex-wrap md:overflow-x-hidden`}
      >
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
