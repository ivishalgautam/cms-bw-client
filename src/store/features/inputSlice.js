import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../../requesMethods";

const initialState = {
  clientInput: [],
  isPending: false,
  // client details
  clientName: "",
  clientEmail: "",
  clientPhone: "",
  // project details
  proName: "",
  proStartDate: "",
  proExpDate: "",
  proEndDate: "",
  proManagers: [],

  // domain details
  domainName: "",
  domainId: "",
  domainPass: "",
  domainStartDate: "",
  domainEndDate: "",

  // hosting details
  hostingName: "",
  hostingId: "",
  hostingPass: "",
  hostingStartDate: "",
  hostingEndDate: "",

  // socials
  facebookUsername: "",
  facebookPass: "",
  facebookPath: "",

  instaUsername: "",
  instaPass: "",
  instaPath: "",

  linkedInUsername: "",
  linkedInPass: "",
  linkedInPath: "",

  twitterUsername: "",
  twitterPass: "",
  twitterPath: "",

  // files
  filename: "",
  fileData: null,
  fileContentType: "",
};

export const getInputValues = createAsyncThunk(
  "get/inputValues",
  async (clientId, thunkAPI) => {
    try {
      const resp = await publicRequest.get(`/client/${clientId}`);
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setFieldValue: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    // setFileData: (state, action) => {
    //   const { name, size, lastModified } = action.payload;
    //   state.fileData = { name, size, lastModified };
    // },
    clearAllFields: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getInputValues.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(getInputValues.fulfilled, (state, action) => {
      state.isPending = false;
      state.clientInput = [];
      state.clientInput = action.payload;
      // console.log(action.payload);
    });
    builder.addCase(getInputValues.rejected, (state) => {
      state.isPending = false;
    });
  },
});

export const { setFieldValue, clearAllFields } = inputSlice.actions;

export default inputSlice.reducer;
