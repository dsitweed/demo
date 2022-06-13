import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { MdOutlineAdd, MdOutlineDelete } from "react-icons/md";

import { typeMapping } from "../../template/formTemplate";

const Form = ({ name, title, formFields }) => {
  const { register, control, handleSubmit } = useForm({ defaultValues: { [name]: [{}] } });
  const { fields, append, remove } = useFieldArray({ control, name });
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log("FORM", name, title);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col"}>
      {fields.map((item, index) => (
        <fieldset
          className="bg-white rounded-lg p-4 mb-4 flex flex-col md:grid md:grid-cols-2 gap-4 gap-x-10"
          key={item.id}
        >
          {/* Hành động */}
          <div className="w-full md:col-span-2 flex flex-row justify-end gap-2">
            <button className="p-2 rounded-full bg-slate-200" onClick={() => append({})}>
              <MdOutlineAdd className="icon-sm" />
            </button>
            <button
              className={`p-2 rounded-full bg-slate-200 ${fields.length === 1 && "hidden"}`}
              onClick={() => remove(index)}
            >
              <MdOutlineDelete className="icon-sm" />
            </button>
          </div>
          {/* Các trường */}
          {formFields.map((formField) => (
            <div className={`w-full mb-2 ${formField.type === "textarea" && "col-span-2"}`} key={formField.field}>
              <div className="mb-1 text-sm text-slate-500">{formField.title}</div>
              {typeMapping(name, index, formField, register)}
            </div>
          ))}
        </fieldset>
      ))}

      <button type="submit" className="my-5 px-6 btn-contained col-span-2 mx-auto">
        Cập nhật
      </button>
    </form>
  );
};

export default Form;
