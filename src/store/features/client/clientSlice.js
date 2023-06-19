import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { publicRequest } from "../../../requesMethods";

export const getClients = createAsyncThunk("get/clients", async (thunkAPI) => {
  try {
    const resp = await publicRequest.get("/client");
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const clientSlice = createSlice({
  name: "Clients",
  initialState: {
    clients: [],
    isPending: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getClients.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(getClients.fulfilled, (state, action) => {
      state.isPending = false;
      state.clients = action.payload;
      // console.log(action.payload);
    });
    builder.addCase(getClients.rejected, (state, action) => {
      state.isPending = false;
      console.log(action.payload);
    });
  },
});

export default clientSlice.reducer;
