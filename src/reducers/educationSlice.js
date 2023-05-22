import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    addEducation: (state, action) => {
      console.log(action.payload);
      state.data.push(action.payload);
    },

    deleteEducation: (state, action) => {
      const filteredState = state.data.filter(
        (item, id) => id != action.payload
      );
      state.data = [...filteredState];
    },

    updateEducation: (state, action) => {
      state.data[action.payload.index] = action.payload.data;
    },
  },
});

export const { addEducation, deleteEducation, updateEducation } =
  educationSlice.actions;
export default educationSlice.reducer;
