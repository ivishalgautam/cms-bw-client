import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../../../requesMethods";

export const createClient = createAsyncThunk(
  "get/createClient",
  async (formData, thunkAPI) => {
    try {
      e.preventDefault();
      const resp = await publicRequest.post("/client", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(resp.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const createCLientSlice = createSlice({
  name: "Clients",
  initialState: {
    isPending: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createClient.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(createClient.fulfilled, (state, action) => {
      state.isPending = false;
      // console.log(action.payload);
    });
    builder.addCase(createClient.rejected, (state, action) => {
      state.isPending = false;
      console.log(action.payload);
    });
  },
});

export default createCLientSlice.reducer;
