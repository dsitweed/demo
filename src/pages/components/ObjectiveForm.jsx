import { TextareaAutosize } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

function ObjectiveForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col "}>
      <fieldset className="bg-white rounded-lg p-4 mb-4 flex flex-col md:grid md:grid-cols-2 gap-4 gap-x-10">
        {/* Mục tiêu */}
        <div className="w-full mb-4 col-span-2">
          <div className="mb-1 text-sm text-slate-500">
            Mục tiêu nghề nghiệp
          </div>
          <TextareaAutosize
            className="text-slate-700 flex-grow p-2 border-2 w-full focus:outline-none"
            {...register("objective", {})}
            placeholder="Vui lòng điền mục tiêu của bạn"
            minRows={5}
          />
        </div>
      </fieldset>

      <button
        type="submit"
        className="my-5 px-6 btn-contained col-span-2 mx-auto"
      >
        Cập nhật
      </button>
    </form>
  );
}

export default ObjectiveForm;
