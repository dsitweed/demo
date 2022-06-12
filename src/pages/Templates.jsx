import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
const templateList = [
  {
    title: "Mẫu 1",
    imgURL:
      "https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/basic_5.png?v=1.0.3",
    url: `${process.env.REACT_APP_BUILDER_URL}/app/builder/create/template2`,
  },
  {
    title: "Mẫu 2",
    imgURL:
      "https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/basic_5.png?v=1.0.3",
    url: `${process.env.REACT_APP_BUILDER_URL}/app/builder/create/template2`,
  },
  {
    title: "Mẫu 3",
    imgURL:
      "https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/basic_5.png?v=1.0.3",
    url: `${process.env.REACT_APP_BUILDER_URL}/app/builder/create/template2`,
  },
  {
    title: "Mẫu 4",
    imgURL:
      "https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/basic_5.png?v=1.0.3",
    url: `${process.env.REACT_APP_BUILDER_URL}/app/builder/create/template2`,
  },
  {
    title: "Mẫu 5",
    imgURL:
      "https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/basic_5.png?v=1.0.3",
    url: `${process.env.REACT_APP_BUILDER_URL}/app/builder/create/template2`,
  },
  {
    title: "Mẫu 6",
    imgURL:
      "https://www.topcv.vn/images/cv/screenshots/thumbs/cv-template-thumbnails-v1.2/basic_5.png?v=1.0.3",
    url: `${process.env.REACT_APP_BUILDER_URL}/app/builder/create/template2`,
  },
];

function Templates() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="flex flex-col bg-slate-100 py-4 px-5 md:px-10 lg:px-40">
      <span className="text-rose-500 text-xl font-bold mb-2">
        Danh sách mẫu CV
      </span>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-5 lg:gap-10">
        {templateList.map((template, index) => (
          <button
            onFocus={() => {
              setTimeout(() => setSelected(template.title), 50);
            }}
            onBlur={() => {
              setTimeout(() => setSelected(null), 50);
            }}
            key={index}
            className="relative flex flex-col rounded-lg shadow hover:shadow-2xl hover:text-rose-500"
          >
            {selected === template.title && (
              <div className="flex items-center justify-center rounded-lg bg-slate-800 absolute top-0 left-0 w-full h-full bg-opacity-50">
                <a href={template.url} className="btn-contained">
                  <MdEdit className="icon-sm" />
                  <span>Dùng mẫu này</span>
                </a>
              </div>
            )}
            <img className="rounded-t-lg" src={template.imgURL} alt="" />
            <span className="w-full bg-white rounded-b-lg px-4 py-3 font-semibold">
              {template.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Templates;
