import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { set } from "lodash";

export const getInfoServer = createAsyncThunk("info/getInfo", async (thunkAPI) => {
  try {
    const URL = process.env.REACT_APP_BACKEND_URL;
    console.log("Fetch", `${URL}/users/get_info`);
    const response = await fetch(`${URL}/users/get_info`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    let data = await response.json();

    if (response.status === 200) {
      console.log(data);
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    thunkAPI.rejectWithValue(e.response.data);
  }
});

export const updateInfoServer = createAsyncThunk("info/updateInfo", async ({ info }, thunkAPI) => {
  try {
    console.log(info);
    const URL = process.env.REACT_APP_BACKEND_URL;
    const response = await fetch(`${URL}/users/update_info`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        info,
      }),
    });
    let data = await response.json();
    console.log(data);

    if (response.status === 200) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    thunkAPI.rejectWithValue(e.response.data);
  }
});

const infoSlide = createSlice({
  name: "info",
  initialState: {
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
    work: { items: [{}] },
    education: { items: [{}] },
    skills: { items: [{}] },
    hobbies: { items: [{}] },
    projects: { items: [{}] },
    awards: { items: [{}] },
    certifications: { items: [{}] },
    results: { items: [{}] },
    publications: { items: [{}] },
    activities: { items: [{}] },
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
    },
    updateInfo: (state, { payload }) => {
      set(state, payload.path, payload.value);
    },
    addItem: (state, { payload }) => {
      state[payload]?.items.push({});
    },
    removeItem: (state, { payload }) => {
      state[payload.name].items = state[payload.name].items.splice(payload.index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInfoServer.fulfilled, (state, { payload }) => {
      console.log("Payload: ", payload);
      if (payload === {}) {
      }
      state.work = payload.work;
      state.education = payload.education;
      state.isError = false;
      state.isSuccess = true;
      state.isFetching = false;
    });
    builder.addCase(getInfoServer.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getInfoServer.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
    builder.addCase(updateInfoServer.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(updateInfoServer.fulfilled, (state, { payload }) => {
      state.isSuccess = true;
      console.log(payload);
    });
    builder.addCase(updateInfoServer.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
  },
});

export const infoSelector = (state) => state.info;

export const { clearState, updateInfo, addItem, removeItem } = infoSlide.actions;

export default infoSlide;
