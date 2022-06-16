import {
  MdOutlineBatchPrediction,
  MdOutlineBiotech,
  MdOutlineEmojiEvents,
  MdOutlineFactCheck,
  MdOutlineLocalLibrary,
  MdOutlinePsychology,
  MdOutlineSchool,
  MdOutlineSportsEsports,
  MdOutlineWaterDrop,
  MdWorkOutline,
} from "react-icons/md";

const formTemplate = {
  // profile: {
  //   name: "profile",
  //   title: "Thông tin",
  //   icon: <MdOutlinePerson className="icon-sm" />,
  //   formFields: [
  //     {
  //       field: "fullName",
  //       title: "Họ và tên",
  //       placeholder: "Họ và tên đầy đủ của bạn",
  //       type: "text",
  //       required: true,
  //     },
  //     {
  //       field: "birthDate",
  //       title: "Ngày sinh",
  //       placeholder: "Ngày sinh của bạn",
  //       type: "date",
  //     },
  //     {
  //       field: "address",
  //       title: "Địa chỉ",
  //       placeholder: "Địa chỉ của bạn",
  //       type: "text",
  //     },
  //     {
  //       field: "email",
  //       title: "Email",
  //       placeholder: "Địa chỉ email của bạn",
  //       type: "text",
  //     },
  //     {
  //       field: "phone",
  //       title: "Số điện thoại",
  //       placeholder: "Số điện thoại của bạn",
  //       type: "text",
  //     },
  //     {
  //       field: "website",
  //       title: "Trang web",
  //       placeholder: "Trang web cá nhân của bạn",
  //       type: "text",
  //     },
  //     {
  //       field: "job",
  //       title: "Chức vụ",
  //       placeholder: "Chức vụ của bạn",
  //       type: "text",
  //     },
  //     {
  //       field: "summary",
  //       title: "Mô tả bản thân",
  //       placeholder: "Mô tả chi tiết",
  //       type: "textarea",
  //     },
  //   ],
  // },
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
      },
      {
        field: "description",
        title: "Mô tả chi tiết:",
        placeholder: "Mô tả chi tiết",
        type: "textarea",
      },
      {
        field: "rating",
        title: "Đánh giá:",
        placeholder: "Đánh giá",
        type: "text",
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
        required: true,
      },
    ],
  },
  projects: {
    name: "projects",
    title: "Dự án",
    icon: <MdOutlineBatchPrediction className="icon-sm" />,
    formFields: [
      {
        field: "title",
        title: "Dự án:",
        placeholder: "Dự án",
        type: "text",
      },
      {
        field: "org",
        title: "Tổ chức:",
        placeholder: "Tổ chức",
        type: "text",
      },
      {
        field: "startDate",
        title: "Ngày bắt đầu:",
        type: "date",
      },
      {
        field: "endDate",
        title: "Ngày kết thúc:",
        type: "date",
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
        required: true,
      },
      {
        field: "awarder",
        title: "Đơn vị chứng nhận:",
        placeholder: "Đơn vị chứng nhận",
        type: "text",
        required: true,
      },
      {
        field: "date",
        title: "Ngày cấp:",
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
  certifications: {
    name: "certifications",
    title: "Chứng nhận",
    icon: <MdOutlineFactCheck className="icon-sm" />,
    formFields: [
      {
        field: "certName",
        title: "Chứng nhận:",
        placeholder: "Chứng nhận",
        type: "text",
      },
      {
        field: "date",
        title: "Ngày cấp:",
        type: "date",
      },
    ],
  },
  results: {
    name: "results",
    title: "Kết quả",
    icon: <MdOutlineLocalLibrary className="icon-sm" />,
    formFields: [
      {
        field: "subject",
        title: "Môn học:",
        placeholder: "Môn học",
        type: "text",
      },
      {
        field: "processGrade",
        title: "Điểm quá trình:",
        type: "text",
      },
      {
        field: "finalGrade",
        title: "Điểm cuối kỳ:",
        type: "text",
      },
    ],
  },
  publications: {
    name: "publications",
    title: "Nghiên cứu",
    icon: <MdOutlineBiotech className="icon-sm" />,
    formFields: [
      {
        field: "title",
        title: "Nghiên cứu:",
        placeholder: "Nghiên cứu",
        type: "text",
      },
      {
        field: "page",
        title: "Link bài nghiên cứu:",
        placeholder: "Link bài nghiên cứu",
        type: "text",
      },
      {
        field: "publishDate",
        title: "Thời gian:",
        type: "date",
      },
    ],
  },
  activities: {
    name: "activities",
    title: "Hoạt động",
    icon: <MdOutlineWaterDrop className="icon-sm" />,
    formFields: [
      {
        field: "title",
        title: "Hoạt động:",
        placeholder: "Hoạt động",
        type: "text",
      },
      {
        field: "joinedDate",
        title: "Thời gian:",
        type: "date",
      },
    ],
  },
};

export default formTemplate;
