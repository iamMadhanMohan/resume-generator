import React, { useState, useEffect } from "react";
import EducationInfo from "./EducationInfo";
import { useDispatch, useSelector } from "react-redux";
import { addEducation, updateEducation } from "../reducers/educationSlice";
// import { nanoid } from "@reduxjs/toolkit";

const Education = () => {
  const dispatch = useDispatch();
  const educationData = useSelector((state) => state.education.data);

  const [education, setEducation] = useState({});

  const [isEdit, setIsEdit] = useState({
    status: false,
    id: "",
  });

  let renderEducation;
  if (educationData) {
    renderEducation = educationData.map((item, key) => (
      <EducationInfo
        key={key}
        education={item}
        id={key}
        setEducation={setEducation}
        setIsEdit={setIsEdit}
      />
    ));
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEducation((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEdit.status) {
      setIsEdit((prev) => {
        return {
          id: "",
          status: false,
        };
      });
      dispatch(updateEducation({ index: isEdit.id, data: education }));
    } else {
      dispatch(addEducation(education));
    }

    setEducation({
      educationLevel: "",
      schoolName: "",
      score: "",
      city: "",
      state: "",
      country: "",
      startDate: "",
      endDate: "",
    });
  };
  return (
    <div className="Routes-sub-div">
      <div className="Education">
        <h1 className="heading">Education Details</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="education-level" className="label">
            Education Level
          </label>
          <input
            type="text"
            id="education-level"
            placeholder="education year"
            name="educationLevel"
            value={education.educationLevel}
            onChange={handleChange}
            required
          />

          <label htmlFor="school-name" className="label">
            School Name
          </label>
          <input
            type="text"
            placeholder="name of your school"
            name="schoolName"
            value={education.schoolName}
            onChange={handleChange}
            required
          />

          <label htmlFor="score" className="label">
            Score
          </label>
          <input
            type="text"
            id="score"
            name="score"
            value={education.score}
            placeholder="score (optional)"
            onChange={handleChange}
          />

          <div>
            <label htmlFor="start-date" className="label">
              Start Date
            </label>
            <input
              type="month"
              id="start-date"
              name="startDate"
              value={education.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="end-date" className="label">
              End Date
            </label>
            <input
              type="month"
              id="end-date"
              name="endDate"
              value={education.endDate}
              onChange={handleChange}
            />
          </div>

          <label htmlFor="address" className="label">
            Address
          </label>
          <input
            type="text"
            placeholder="city"
            id="address"
            name="city"
            value={education.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="state"
            name="state"
            value={education.state}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="country"
            name="country"
            value={education.country}
            onChange={handleChange}
            required
          />

          <button className="save-button" type="submit">
            {isEdit.status ? "UPDATE" : "ADD"}
          </button>
        </form>
      </div>
      <div className="info-div">{renderEducation}</div>
    </div>
  );
};

export default Education;
