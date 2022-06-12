import React from "react";
import { useForm } from "react-hook-form";

function ProfileForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col"}>
      <fieldset className="bg-white rounded-lg p-4 mb-4 flex flex-col md:grid md:grid-cols-2 gap-4 gap-x-10">
        {/* Họ và tên */}
        <div className="w-full mb-4">
          <div className="mb-1 text-sm text-slate-500">
            Họ và tên<span className="text-red-600 ml-1">*</span>
          </div>
          <input
            className="text-slate-700 flex-grow border-b-2 w-full focus:outline-none"
            {...register("fullName", {
              required: true,
            })}
            placeholder="Vui lòng điền họ và tên"
          />
          {errors?.email ? (
            <span className="text-red-600">Xin hãy nhập họ và tên của bạn</span>
          ) : null}
        </div>
        {/* Địa chỉ */}
        <div className="w-full mb-4">
          <div className="mb-1 text-sm text-slate-500">Địa chỉ</div>
          <input
            className="text-slate-700 flex-grow border-b-2 w-full focus:outline-none"
            {...register("address")}
            placeholder="Vui lòng cung cấp địa chỉ"
          />
        </div>
        {/* Email */}
        <div className="w-full mb-4">
          <div className="mb-1 text-sm text-slate-500">
            Email<span className="text-red-600 ml-1">*</span>
          </div>
          <input
            className="text-slate-700 flex-grow border-b-2 w-full focus:outline-none"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            placeholder="Vui lòng cung cấp số điện email"
          />
        </div>
        {/* Ngày sinh */}
        <div className="w-full mb-4">
          <div className="mb-1 text-sm text-slate-500">Ngày sinh</div>
          <input
            className="text-slate-700 flex-grow border-b-2 w-full focus:outline-none"
            {...register("birthOfDate")}
            placeholder="Vui lòng điền ngày sinh"
            type={"date"}
          />
        </div>
        {/* Số điện thoại */}
        <div className="w-full mb-4">
          <div className="mb-1 text-sm text-slate-500">Số điện thoại</div>
          <input
            className="text-slate-700 flex-grow border-b-2 w-full focus:outline-none"
            {...register("phone")}
            placeholder="Vui lòng cung cấp số điện thoại"
            type={"tel"}
          />
        </div>
        {/* Chức vụ */}
        <div className="w-full mb-4">
          <div className="mb-1 text-sm text-slate-500">Chức vụ</div>
          <input
            className="text-slate-700 flex-grow border-b-2 w-full focus:outline-none"
            {...register("job")}
            placeholder="Vui lòng điền vị trí/chức vụ của bạn"
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

export default ProfileForm;
