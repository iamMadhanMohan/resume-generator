import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    addExperience: (state, action) => {
      console.log(action.payload);
      state.data.push(action.payload);
    },

    deleteExperience: (state, action) => {
      const filteredState = state.data.filter(
        (item, id) => id != action.payload
      );
      state.data = [...filteredState];
    },

    updateExperience: (state, action) => {
      state.data[action.payload.index] = action.payload.data;
    },
  },
});

export default experienceSlice.reducer;
export const { addExperience, deleteExperience, updateExperience } =
  experienceSlice.actions;
