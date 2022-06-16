import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Kiem tra user đã đăng nhập chưa, cookie còn hạn hay không
export const checkLoggedIn = createAsyncThunk("users/checkLoggedIn", async (thunkAPI) => {
  try {
    const URL = process.env.REACT_APP_BACKEND_URL;
    const response = await fetch(`${URL}/users/logined`, {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    // console.log("data", data);

    if (response.status === 200) {
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const signUpUser = createAsyncThunk("users/signUp", async ({ email, password, fullName }, thunkAPI) => {
  try {
    const URL = process.env.REACT_APP_BACKEND_URL;
    const response = await fetch(`${URL}/api/signup`, {
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
    const URL = process.env.REACT_APP_BACKEND_URL;
    const response = await fetch(`${URL}/api/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      // localStorage.setItem("token", data.token);
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    thunkAPI.rejectWithValue(e.response.data);
  }
});

export const signOut = createAsyncThunk("users/signOut", async (thunkAPI) => {
  try {
    const URL = process.env.REACT_APP_BACKEND_URL;
    const response = await fetch(`${URL}/api/signout`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
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

export const changePassword = createAsyncThunk("users/changePassword", async ({ password, newPassword }, thunkAPI) => {
  try {
    const URL = process.env.REACT_APP_BACKEND_URL;
    const response = await fetch(`${URL}/users/change_password`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        password,
        newPassword,
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

export const getInfo = createAsyncThunk("users/getInfo", async (thunkAPI) => {
  try {
    const URL = process.env.REACT_APP_BACKEND_URL;

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
      // console.log(data);
      return data;
    } else {
      return thunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    thunkAPI.rejectWithValue(e.response.data);
  }
});

export const updateInfo = createAsyncThunk("users/updateInfo", async ({ info }, thunkAPI) => {
  try {
    const URL = process.env.REACT_APP_BACKEND_URL;
    const response = await fetch(`${URL}/users/update_info`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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
// Cần xem xét thêm
// Lấy thông tin email => gửi mail xác thực => sang trang xác thực => đôi mật khẩu mới
export const forgetPassword = createAsyncThunk("users/forgetPassword", async ({ email }, thunkAPI) => {
  try {
    const URL = process.env.REACT_APP_BACKEND_URL;
    const response = await fetch(`${URL}/users/forget_password`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
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

export const checkFpsSession = createAsyncThunk(
  "users/checkFpsSession",
  async ( token ,thunkAPI) => {
    try {
      const URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${URL}/users/check_fps_session`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      });
      let data = await response.json();
      console.log("Response",data);

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

export const changeForgottenPwd = createAsyncThunk("users/changeForgottenPwd", async ({ token, newPwd }, thunkAPI) => {
  try {
    const URL = process.env.REACT_APP_BACKEND_URL;
    const response = await fetch(`${URL}/users/change_forgotten_pwd`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        newPwd,
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

/*-----------------------------------------------------------------------------------*/

export const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    fullName: "",
    image:"",
    cvDatas: [],
    infoData: {
      profile: {},
      objectives: {},
      work: {},
      education: {},
      skills: {},
      hobbies: {},
      awards: {},
    },
    isLoggedIn: false,
    isFetching: false,
    isSuccess: false,
    isError: false,
    isVerifyEmail: false,
    forgetPasswordToken: null,
    errorMessage: "",
  },
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state; // why have to return
    },
    setLogin: (state) => {
      state.isLoggedIn = true;
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
      console.log("payload", payload);
      state.email = payload.email;
      state.username = payload.name;
      state.isFetching = false;
      state.isSuccess = true;
      state.isLoggedIn = true;
      return state;
    });
    builder.addCase(signInUser.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
    builder.addCase(signInUser.pending, (state) => {
      state.isFetching = true;
    });
    // sign out
    builder.addCase(signOut.fulfilled, (state) => {
      state.isError = false;
      state.isSuccess = true;
      state.isFetching = false;
      state.isLoggedIn = false;
    });
    builder.addCase(signOut.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(signOut.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
    builder.addCase(checkLoggedIn.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(checkLoggedIn.fulfilled, (state, { payload }) => {
      // console.log("payload check logIn", payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.isLoggedIn = true;
      // state.email = payload.user.email;
      // state.fullName = payload.user.fullName;
      // state.cvDatas = payload.user.cvDatas;
    });
    builder.addCase(checkLoggedIn.rejected, (state) => {
      state.isFetching = false;
      state.isError = true;
      state.isLoggedIn = false;
    });
    // changePassword -> có bắt đăng nhập lại khong
    builder.addCase(changePassword.fulfilled, (state) => {
      state.isError = false;
      state.isSuccess = true;
      state.isFetching = false;
      // state.isLoggedIn = false;
    });
    builder.addCase(changePassword.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(changePassword.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
    // get info
    builder.addCase(getInfo.fulfilled, (state, { payload }) => {
      // console.log("Payload: ", payload);
      state.infoDatas = payload.result;
      state.isError = false;
      state.isSuccess = true;
      state.isFetching = false;
      state.fullName = payload.result.profile.fullName;
    });
    builder.addCase(getInfo.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getInfo.rejected, ({ payload }, state) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
    // update Info -> need to reload by getInfo
    builder.addCase(updateInfo.fulfilled, (state, {payload}) => {
      state.isError = false;
      state.isSuccess = true;
      state.isFetching = false;
    });
    builder.addCase(updateInfo.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(updateInfo.rejected, ({payload},state) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
    // forgetPassword
    builder.addCase(forgetPassword.fulfilled, (state, {payload}) => {
      state.forgetPasswordToken = payload.FPStoken;
      state.isError = false;
      state.isSuccess = true;
      state.isFetching = false;
    });
    builder.addCase(forgetPassword.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(forgetPassword.rejected, ({payload},state) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
    //checkFpsSession
    builder.addCase(checkFpsSession.fulfilled, (state, {payload}) => {
      state.isVerifyEmail = true;
      state.isError = false;
      state.isSuccess = true;
      state.isFetching = false;
    });
    builder.addCase(checkFpsSession.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(checkFpsSession.rejected, ({payload},state) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
    // change password for forget password
    builder.addCase(changeForgottenPwd.fulfilled, (state, {payload}) => {
      state.isVerifyEmail = false;
      state.isError = false;
      state.isSuccess = true;
      state.isFetching = false;
    });
    builder.addCase(changeForgottenPwd.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(changeForgottenPwd.rejected, ({payload},state) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = payload.message;
    });
  },
});

export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;
