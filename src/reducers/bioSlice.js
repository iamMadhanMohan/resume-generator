import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const bioSlice = createSlice({
  name: "bio",
  initialState,
  reducers: {
    addBio: (state, action) => {
      return { ...action.payload };
    },

    deleteBio: (state) => {
      return {};
    },
  },
});

export default bioSlice.reducer;
export const { addBio, deleteBio } = bioSlice.actions;
