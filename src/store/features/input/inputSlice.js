import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../../../requesMethods";

const initialState = {
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

  // pricing
  basePrice: "",
  additionalCosts: "",
  partialPaid: "",
  totalCost: "",

  //amc
  amcStartDate: "",
  amcEndDate: "",
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
    calculateTotalCost: (state, action) => {
      state.totalCost =
        Number(state.basePrice) +
        Number(state.additionalCosts) -
        Number(state.partialPaid);
      // console.log(typeof state.totalCost);
    },
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

export const { setFieldValue, clearAllFields, calculateTotalCost } =
  inputSlice.actions;

export default inputSlice.reducer;
