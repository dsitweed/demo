import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { TextareaAutosize } from "@mui/material";
import { MdOutlineAdd, MdOutlineDelete } from "react-icons/md";

function EducationForm() {
  const { register, control, handleSubmit } = useForm({
    defaultValues: { education: [{}] },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col "}>
      {fields.map((item, index) => (
        <fieldset
          className="bg-white rounded-lg p-4 mb-4 flex flex-col md:grid md:grid-cols-2 gap-4 gap-x-10"
          key={item.id}
        >
          {/* Hành động */}
          <div className="w-full md:col-span-2 flex flex-row justify-end gap-2">
            <button
              className="p-2 rounded-full bg-slate-200"
              onClick={() => append({})}
            >
              <MdOutlineAdd className="icon-sm" />
            </button>
            <button
              className={`p-2 rounded-full bg-slate-200 ${
                fields.length === 1 && "hidden"
              }`}
              onClick={() => remove(index)}
            >
              <MdOutlineDelete className="icon-sm" />
            </button>
          </div>
          {/* Tổ chức */}
          <div className="w-full mb-4">
            <div className="mb-1 text-sm text-slate-500">Tổ chức:</div>
            <input
              className="text-slate-700 flex-grow border-b-2 w-full focus:outline-none"
              {...register(`education.${index}.institution`, {
                required: true,
              })}
              placeholder="Tổ chức"
            />
          </div>
          {/* Ngành học */}
          <div className="w-full mb-4">
            <div className="mb-1 text-sm text-slate-500">Ngành học:</div>
            <input
              className="text-slate-700 flex-grow border-b-2 w-full focus:outline-none"
              {...register(`education.${index}.degree`, { required: true })}
              placeholder="Ngành học"
            />
          </div>
          {/* Ngày bắt đầu */}
          <div className="w-full mb-4">
            <div className="mb-1 text-sm text-slate-500">Ngày bắt đầu:</div>
            <input
              className="text-slate-700 flex-grow border-b-2 w-full focus:outline-none"
              {...register(`education.${index}.startDate`, { required: true })}
              placeholder="Ngày bắt đầu"
              type={"date"}
            />
          </div>
          {/* Ngày kết thúc */}
          <div className="w-full mb-4">
            <div className="mb-1 text-sm text-slate-500">Ngày kết thúc:</div>
            <input
              className="text-slate-700 flex-grow border-b-2 w-full focus:outline-none"
              {...register(`education.${index}.endDate`, { required: true })}
              placeholder="Ngày kết thúc"
              type={"date"}
            />
          </div>
          {/* Mô tả chi tiết */}
          <div className="w-full mb-4 col-span-2">
            <div className="mb-1 text-sm text-slate-500">Mô tả chi tiết:</div>
            <TextareaAutosize
              className="text-slate-700 flex-grow p-2 border-2 w-full focus:outline-none"
              {...register(`education.${index}.summary`)}
              placeholder="Mô tả chi tiết"
              minRows={5}
            />
          </div>
        </fieldset>
      ))}

      <button
        type="submit"
        className="my-5 px-6 btn-contained col-span-2 mx-auto"
      >
        Cập nhật
      </button>
    </form>
  );
}

export default EducationForm;
