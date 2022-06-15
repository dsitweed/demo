import { createSlice } from "@reduxjs/toolkit";
import { get, set } from "lodash";

const infoSlide = createSlice({
  name: "info",
  initialState: {
    objectives: [],
    work: {
      id: "work",
      heading: "Kinh nghiệm",
      visible: true,
      items: [
        {
          company: "BKC LAB",
          position: "Lập trình viên full stack",
          startDate: "2021/08/01",
          endDate: "2021/08/02",
          summary: "111111111111111111111111111111111111111111",
        },
        {
          company: "Hanoi university of science and technology",
          position: "Lập trình viên full stack",
          startDate: "2021/08/01",
          endDate: "2021/08/02",
          summary: "111111111111111111111111111111111111111111",
        },
      ],
    },
    education: [],
    skills: [],
    hobbies: [],
    awards: [],
  },
  reducers: {
    updateInfo: (state, { payload }) => {
      console.log(get(state, payload.path, payload.value));
      set(state, payload.path, payload.value);
      console.log(get(state, payload.path, payload.value));
    },
  },
});

export const infoSelector = (state) => state.info;

export const { updateInfo } = infoSlide.actions;

export default infoSlide;
