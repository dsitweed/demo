import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { TextareaAutosize } from "@mui/material";
import { MdOutlineAdd, MdOutlineDelete } from "react-icons/md";

/**
 *
 * @param {Object} props
 * @param {string} props.name
 * @param {[{title:string,id:string,type:string,required:boolean}]} props.attributes
 * @returns
 */
function Form({ name, attributes }) {
  const { register, control, handleSubmit } = useForm({
    defaultValues: { [name]: [{}] },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name,
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
          {attributes.map((attribute) => (
            <div
              className={`w-full mb-2 ${
                attribute.type === "textarea" && "col-span-2"
              }`}
              key={attribute.id}
            >
              <div className="mb-1 text-sm text-slate-500">
                {attribute.title}:
              </div>
              {attribute.type === "textarea" ? (
                <TextareaAutosize
                  className="text-slate-700 flex-grow p-2 border-2 w-full focus:outline-none"
                  {...register(`${name}.${index}.${attribute.id}`)}
                  placeholder={attribute.title}
                  minRows={5}
                />
              ) : (
                <input
                  className="text-slate-700 flex-grow border-b-2 w-full focus:outline-none"
                  {...register(`${name}.${index}.${attribute.id}`, {
                    required: attribute.required,
                  })}
                  placeholder={attribute.title}
                  type={attribute.type === "date" ? "date" : "text"}
                />
              )}
            </div>
          ))}
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

export default Form;
