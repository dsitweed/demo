import { useState } from "react";
import {
  MdOutlineContactPage,
  MdOutlineEmojiEvents,
  MdOutlineLightbulb,
  MdOutlinePsychology,
  MdOutlineSchool,
  MdWorkOutline,
  MdOutlineSportsEsports,
} from "react-icons/md";
import EducationForm from "./components/EducationForm";
import Form from "./components/Form";
import HobbiesForm from "./components/HobbiesForm";
import ObjectiveForm from "./components/ObjectiveForm";
import ProfileForm from "./components/ProfileForm";
import SkillForm from "./components/SkillForm";
import formTemplate from "../template/formTemplate";
const details = [
  {
    icon: <MdOutlineContactPage className="h-12 w-12" />,
    text: "Thông tin cơ bản",
    id: "profile",
  },
  {
    icon: <MdOutlineLightbulb className="h-12 w-12" />,
    text: "Mục tiêu",
    id: "objective",
  },
  {
    icon: <MdWorkOutline className="h-12 w-12" />,
    text: "Kinh nghiệm",
    id: "work",
  },
  {
    icon: <MdOutlineSchool className="h-12 w-12" />,
    text: "Học vấn",
    id: "education",
  },
  {
    icon: <MdOutlinePsychology className="h-12 w-12" />,
    text: "Kỹ năng",
    id: "skill",
  },
  {
    icon: <MdOutlineSportsEsports className="h-12 w-12" />,
    text: "Sở thích",
    id: "hobbies",
  },
];

const forms = {
  profile: <ProfileForm />,
  objective: <ObjectiveForm />,
  work: <Form {...formTemplate.work} />,
  education: (
    <Form
      name="education"
      attributes={[
        { title: "Tổ chức", id: "institution", type: "text", required: true },
        { title: "Chuyên ngành", id: "degree", type: "text", required: true },
        {
          title: "Ngày bắt đầu",
          id: "startDate",
          type: "date",
          required: true,
        },
        { title: "Ngày kết thúc", id: "endDate", type: "date", required: true },
        {
          title: "Mô tả chi tiết",
          id: "summary",
          type: "textarea",
          required: true,
        },
      ]}
    />
  ),
  skill: <SkillForm />,
  hobbies: <HobbiesForm />,
};

const Profile = () => {
  const [selected, setSelected] = useState("profile");
  return (
    <div className="flex flex-col bg-slate-100 py-4 px-5 md:px-10 lg:px-40 min-h-[calc(100vh-64px)]">
      <div className={`bg-white flex flex-row justify-between p-4 rounded-lg text-slate-500 mb-6 overflow-x-scroll`}>
        {details.map((detail) => (
          <button
            onClick={() => setSelected(detail.id)}
            key={detail.id}
            className={`rounded-lg p-4 min-w-[120px] flex flex-col items-center mx-4 ${
              selected === detail.id ? "text-white bg-rose-500" : "hover:text-rose-300 "
            }`}
          >
            <span className="mb-1">{detail.icon}</span>
            <span className="font-semibold">{detail.text}</span>
          </button>
        ))}
      </div>
      <div>{forms[selected]}</div>
    </div>
  );
};

export default Profile;
