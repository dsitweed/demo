import { configureStore } from "@reduxjs/toolkit";
import infoSlide from "./infoSlide";
import { userSlice } from "./userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    info: infoSlide.reducer,
  },
});

export default store;
