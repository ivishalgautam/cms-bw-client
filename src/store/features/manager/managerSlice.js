import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicRequest } from "../../../requesMethods";

export const getManagers = createAsyncThunk(
  "api/get-managers",
  async (thunkAPI) => {
    try {
      const resp = await publicRequest.get("/project-manager");
      return resp.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const managerSlice = createSlice({
  name: "manager",
  initialState: {
    managers: [],
    isPending: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getManagers.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(getManagers.fulfilled, (state, action) => {
      state.isPending = false;
      state.managers = action.payload;
    });
    builder.addCase(getManagers.rejected, (state, action) => {
      state.isPending = false;
    });
  },
});

export default managerSlice.reducer;
