import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { set } from "lodash";

export const getInfoServer = createAsyncThunk("info/getInfoServer", async (thunkAPI) => {
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
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    thunkAPI.rejectWithValue(e.response.data);
  }
});

export const updateInfoServer = createAsyncThunk("info/updateInfoServer", async ({ info }, thunkAPI) => {
  try {
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
    loading: "idle",
    data: {
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
  },
  reducers: {
    clearState: (state) => {
      state.loading = "idle";
    },
    updateInfo: (state, { payload }) => {
      set(state, payload.path, payload.value);
    },
    addItem: (state, { payload }) => {
      state.data[payload].items.push({});
    },
    removeItem: (state, { payload }) => {
      state.data[payload.name].items = state.data[payload.name].items.splice(payload.index, 1);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInfoServer.fulfilled, (state, { payload }) => {
      console.log("Payload: ", payload);
      for (const key in payload) {
        if (Object.hasOwnProperty.call(payload, key)) {
          const element = payload[key];
          if (element !== {}) {
            set(state.data, key, payload[key]);
          }
        }
      }
      state.loading = "idle";
    });
    builder.addCase(getInfoServer.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getInfoServer.rejected, (state, { payload }) => {
      state.loading = "failed";
      state.errorMessage = payload.message;
    });
    builder.addCase(updateInfoServer.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(updateInfoServer.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(updateInfoServer.rejected, (state, { payload }) => {
      state.loading = "failed";
    });
  },
});

export const infoSelector = (state) => state.info;

export const { clearState, updateInfo, addItem, removeItem } = infoSlide.actions;

export default infoSlide;
