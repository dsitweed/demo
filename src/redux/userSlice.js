import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signUpUser = createAsyncThunk("users/signUp", async ({ email, password, fullName }, thunkAPI) => {
  try {
    const response = await fetch("http://localhost:8000/api/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        fullName,
      }),
    });
    let data = await response.json();
    console.log("data", data);

    if (response.status === 200) {
      localStorage.setItem("token", data.token);
      return { ...data, email: email };
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const signInUser = createAsyncThunk("users/signIn", async ({ email, password }, thunkAPI) => {
  try {
    const response = await fetch("http://localhost:8000/api/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      document.cookie = `token=${data.token};`;
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    thunkAPI.rejectWithValue(e.response.data);
  }
});

export const fetchUserByToken = createAsyncThunk("users/fetchUserByToken", async ({ token }, thunkAPI) => {
  try {
    const response = await fetch("http://localhost:8000/api/sign-in-by-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    let data = await response.json();
    if (response.status === 200) {
      return { ...data };
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    fullName: "",
    cvDatas: [],
    isLoggedIn: false,
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpUser.fulfilled, (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.email = payload.user.email;
      state.username = payload.user.name;
      state.isLoggedIn = true;
    });
    builder.addCase(signUpUser.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(signUpUser.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
    builder.addCase(signInUser.fulfilled, (state, { payload }) => {
      state.email = payload.email;
      state.username = payload.name;
      state.isFetching = false;
      state.isSuccess = true;
      state.isLoggedIn = true;
      return state;
    });
    builder.addCase(signInUser.rejected, (state, { payload }) => {
      console.log("payload", payload);
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
    builder.addCase(signInUser.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(fetchUserByToken.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(fetchUserByToken.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.isLoggedIn = true;
      state.email = payload.user.email;
      state.fullName = payload.user.fullName;
      state.cvDatas = payload.user.cvDatas;
    });
    builder.addCase(fetchUserByToken.rejected, (state) => {
      state.isFetching = false;
      state.isError = true;
      state.isLoggedIn = false;
    });
  },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;
