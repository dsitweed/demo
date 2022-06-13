import {
  MdOutlineEmojiEvents,
  MdOutlineGames,
  MdOutlineLightbulb,
  MdOutlinePsychology,
  MdOutlineSchool,
  MdOutlineSportsEsports,
  MdWorkOutline,
} from "react-icons/md";
import { TextareaAutosize } from "@mui/material";

const formTemplate = {
  objectives: {
    name: "objectives",
    title: "Mục tiêu",
    icon: <MdOutlineLightbulb className="icon-sm" />,
    formFields: [
      {
        field: "text",
        title: "Mục tiêu:",
        placeholder: "Hãy điền mục tiêu của bạn",
        type: "textarea",
        required: true,
      },
    ],
  },
  work: {
    name: "work",
    title: "Kinh nghiệm",
    icon: <MdWorkOutline className="icon-sm" />,
    formFields: [
      {
        field: "company",
        title: "Công ty:",
        placeholder: "Công ty",
        type: "text",
        required: true,
      },
      {
        field: "position",
        title: "Vị trí:",
        placeholder: "Vị trí",
        type: "text",
        required: true,
      },
      {
        field: "startDate",
        title: "Ngày bắt đầu:",
        type: "date",
        required: true,
      },
      {
        field: "endDate",
        title: "Ngày kết thúc:",
        type: "date",
        required: true,
      },
      {
        field: "summary",
        title: "Mô tả chi tiết",
        placeholder: "Nhập mô tả chi tiết công việc",
        type: "textarea",
      },
    ],
  },
  education: {
    name: "education",
    title: "Học vấn",
    icon: <MdOutlineSchool className="icon-sm" />,
    formFields: [
      {
        field: "institution",
        title: "Trường học:",
        placeholder: "Trường học",
        type: "text",
        required: true,
      },
      {
        field: "degree",
        title: "Chuyên ngành:",
        placeholder: "Chuyên ngành",
        type: "text",
        required: true,
      },
      {
        field: "startDate",
        title: "Ngày bắt đầu:",
        type: "date",
        required: true,
      },
      {
        field: "endDate",
        title: "Ngày kết thúc:",
        type: "date",
        required: true,
      },
      {
        field: "summary",
        title: "Mô tả chi tiết:",
        placeholder: "Mô tả chi tiết",
        type: "textarea",
        required: true,
      },
    ],
  },
  skills: {
    name: "skills",
    title: "Kỹ năng",
    icon: <MdOutlinePsychology className="icon-sm" />,
    formFields: [
      {
        field: "title",
        title: "Kỹ năng:",
        placeholder: "Kỹ năng",
        type: "text",
        require: true,
      },
      {
        field: "description",
        title: "Mô tả chi tiết:",
        placeholder: "Mô tả chi tiết",
        type: "textarea",
        require: true,
      },
    ],
  },
  hobbies: {
    name: "hobbies",
    title: "Sở thích",
    icon: <MdOutlineSportsEsports className="icon-sm" />,
    formFields: [
      {
        field: "name",
        title: "Sở thích:",
        placeholder: "Mô tả sở thích",
        type: "textarea",
        require: true,
      },
    ],
  },
  awards: {
    name: "awards",
    title: "Giải thưởng",
    icon: <MdOutlineEmojiEvents className="icon-sm" />,
    formFields: [
      {
        field: "title",
        title: "Giải thưởng:",
        placeholder: "Giải thưởng",
        type: "text",
        require: true,
      },
      {
        field: "awarder",
        title: "Đơn vị chứng nhận:",
        placeholder: "Đơn vị chứng nhận",
        type: "text",
        require: true,
      },
      {
        field: "date",
        title: "Ngày cấp:",
        type: "date",
        require: true,
      },
      {
        field: "summary",
        title: "Mô tả chi tiết:",
        placeholder: "Mô tả chi tiết",
        type: "textarea",
        require: true,
      },
    ],
  },
};

function typeMapping(name, index, formField, register) {
  if (formField.type === "text") {
    return (
      <input
        className="text-slate-700 flex-grow border-b-2 w-full focus:outline-none"
        {...register(`${name}.${index}.${formField.field}`, {
          required: formField.required,
        })}
        placeholder={formField.placeholder}
      />
    );
  } else if (formField.type === "date") {
    return (
      <input
        className="text-slate-700 flex-grow border-b-2 w-full focus:outline-none"
        {...register(`${name}.${index}.${formField.field}`, {
          required: formField.required,
        })}
        type="date"
      />
    );
  } else if (formField.type === "textarea") {
    return (
      <TextareaAutosize
        className="text-slate-700 flex-grow p-2 border-2 w-full focus:outline-none"
        {...register(`${name}.${index}.${formField.field}`)}
        placeholder={formField.placeholder}
        minRows={5}
      />
    );
  }
}

export { typeMapping };

export default formTemplate;
