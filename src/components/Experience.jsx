import React from "react";
import ExperienceInfo from "./ExperienceInfo";
import { useState } from "react";
import { addExperience, updateExperience } from "../reducers/experienceSlice";
import { useSelector, useDispatch } from "react-redux";

const Experience = () => {
  const dispatch = useDispatch();
  const experienceData = useSelector((state) => state.experience.data);

  const [experience, setExperience] = useState({
    role: "",
    organization: "",
    startDate: "",
    endDate: "",
    aboutWork: "",
  });

  const [isEdit, setIsEdit] = useState({
    status: false,
    id: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExperience((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    if (isEdit.status) {
      setIsEdit((prev) => {
        return {
          id: "",
          status: false,
        };
      });
      dispatch(updateExperience({ index: isEdit.id, data: experience }));
    } else {
      dispatch(addExperience(experience));
    }

    setExperience({
      role: "",
      organization: "",
      startDate: "",
      endDate: "",
      aboutWork: "",
    });
  };

  const experienceComponent = experienceData.map((item, key) => (
    <ExperienceInfo
      key={key}
      experience={item}
      id={key}
      setExperience={setExperience}
      setIsEdit={setIsEdit}
    />
  ));

  return (
    <div className="Routes-sub-div">
      <div className="Experience">
        <h1 className="heading">Work Experience</h1>
        <form action="">
          <label htmlFor="role-name">Role Name</label>
          <input
            type="text"
            id="role-name"
            name="role"
            value={experience.role}
            onChange={handleChange}
            placeholder="enter your role"
            required
          />

          <label htmlFor="organization-name">Orginization Name</label>
          <input
            type="text"
            id="organization-name"
            name="organization"
            value={experience.organization}
            onChange={handleChange}
            placeholder="enter organization name"
            required
          />

          <div className="form-div">
            <div>
              <label htmlFor="start-date" className="label">
                Start Date
              </label>
              <input
                type="date"
                id="start-date"
                name="startDate"
                value={experience.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="end-date" className="label">
                End Date
              </label>
              <input
                type="date"
                id="end-date"
                name="endDate"
                value={experience.endDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <label htmlFor="about-experience">About Work</label>
          <textarea
            id="about-experience"
            cols="30"
            rows="6"
            name="aboutWork"
            value={experience.aboutWork}
            onChange={handleChange}
          ></textarea>

          <button className="save-button" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </div>
      <div className="info-div">{experienceComponent}</div>
    </div>
  );
};

export default Experience;
