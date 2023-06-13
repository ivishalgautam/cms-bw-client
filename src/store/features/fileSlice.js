import { createSlice } from "@reduxjs/toolkit";

const fileSlice = createSlice({
  name: "file",
  initialState: {
    filename: "",
    data: "",
    fileType: "",
  },
  reducers: {
    setFilename: (state, action) => {
      state.filename = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setFileType: (state, action) => {
      state.filename = action.payload;
    },
  },
});

export const { setFilename, setData, setFileType } = fileSlice.reducer;

export default fileSlice.reducer;
