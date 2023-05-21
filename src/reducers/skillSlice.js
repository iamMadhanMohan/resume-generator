import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    addSkill: (state, action) => {
      console.log(action.payload);
      state.data.push(action.payload);
    },

    deleteSkill: (state, action) => {
      const filteredState = state.data.filter(
        (item, id) => id != action.payload
      );
      state.data = [...filteredState];
    },
  },
});

export const { addSkill, deleteSkill } = skillSlice.actions;
export default skillSlice.reducer;
