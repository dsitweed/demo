import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getManyCv = createAsyncThunk(
  "cv/getManyCv",
  async ( thunkAPI ) => {
    try {
      const URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${URL}/api/cv`, {
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
  }
);

export const getOneCv = createAsyncThunk(
  "cv/getOneCv",
  async ({cvId}, thunkAPI ) => {
    try {
      const URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${URL}/api/cv/${cvId}`, {
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
  }
);
// create new one CV
export const addCv = createAsyncThunk(
  "cv/addCv",
  async ({cvData}, thunkAPI ) => {
    try {
      const URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${URL}/api/cv`, {
        method: "POST",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cvData),
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
  }
);
export const updateCv = createAsyncThunk(
  "cv/updateCv",
  async ({cvId, cvData}, thunkAPI ) => {
    try {
      const URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${URL}/api/cv/${cvId}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cvData),
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
  }
);
export const deleteCv = createAsyncThunk(
  "cv/deleteCv",
  async ({cvId}, thunkAPI ) => {
    try {
      const URL = process.env.REACT_APP_BACKEND_URL;
      const response = await fetch(`${URL}/api/cv/${cvId}`, {
        method: "DELETE",
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
  }
);
/*------------------------------------------------------------ */
export const cvSLice = createSlice({
  name:"cv",
  initialState:{
    resumeName: "civizen",
    templateId: "60d08ec6563b0766097b069e",
    metadata: {
      ownerId: "60cf4def4ced9b8065b5ce69", 
      createdAt: 1629429322.058818,
      updatedAt: 1630382763.8490574,
    },
    imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/civipro-4d091.appspot.com/o/templates%2FCastform.png?alt=media&token=c1b11a52-0d3d-4c1a-be97-08415fa49727",
    struct: {},
    layout: [],
    options: {},
    sections: {},
    id: "611f1e4a5def342b1925d38e",
    templateName: "Template1",
  },
  reducers:{

  },
  extraReducers: (builder) => {
    
  },
});