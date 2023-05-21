import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action) => {
      console.log(action.payload);
      state.data.push(action.payload);
    },

    deleteProject: (state, action) => {
      const filteredState = state.data.filter(
        (item, id) => id != action.payload
      );
      state.data = [...filteredState];
    },

    updateProject: (state, action) => {
      state.data[action.payload.index] = action.payload.data;
    },
  },
});

export const { addProject, deleteProject, updateProject } =
  projectSlice.actions;
export default projectSlice.reducer;
