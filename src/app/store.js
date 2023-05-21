import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "../reducers/educationSlice";
import bioReducer from "../reducers/bioSlice";
import experienceReducer from "../reducers/experienceSlice";
import projectReducer from "../reducers/projectSlice";
import skillReducer from "../reducers/skillSlice";

export default configureStore({
  reducer: {
    education: educationReducer,
    bio: bioReducer,
    experience: experienceReducer,
    project: projectReducer,
    skill: skillReducer,
  },
});
