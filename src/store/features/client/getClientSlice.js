import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../../../requesMethods";

export const getClient = createAsyncThunk(
  "get/client",
  async (clientId, thunkAPI) => {
    try {
      const resp = await publicRequest.get(`/client/${clientId}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const getClientSlice = createSlice({
  name: "Clients",
  initialState: {
    client: null,
    isPending: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getClient.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(getClient.fulfilled, (state, action) => {
      state.isPending = false;
      state.client = action.payload;
      // console.log(action.payload);
    });
    builder.addCase(getClient.rejected, (state, action) => {
      state.isPending = false;
      console.log(action.payload);
    });
  },
});

export default getClientSlice.reducer;
