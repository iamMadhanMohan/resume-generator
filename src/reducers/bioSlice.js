import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const bioSlice = createSlice({
  name: "bio",
  initialState,
  reducers: {
    addBio: (state, action) => {
      state.data.push(action.payload);
    },

    deleteBio: (state, action) => {
      const filteredState = state.data.filter(
        (item, id) => id != action.payload
      );
      state.data = [...filteredState];
    },

    updateBio: (state, action) => {
      state.data[action.payload.index] = action.payload.data;
    },
  },
});

export default bioSlice.reducer;
export const { addBio, deleteBio, updateBio } = bioSlice.actions;
