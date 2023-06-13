import { createSlice } from "@reduxjs/toolkit";

const updateModalSlice = createSlice({
  name: "UpdateModal",
  initialState: {
    isOpened: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpened = true;
    },
    closeModal: (state) => {
      state.isOpened = false;
    },
  },
});

export const { openModal, closeModal } = updateModalSlice.actions;
export default updateModalSlice.reducer;
