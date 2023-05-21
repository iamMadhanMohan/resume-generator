import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { deleteEducation } from "../reducers/educationSlice";
import { useDispatch } from "react-redux";

const EducationInfo = ({ education, id, setIsEdit, setEducation }) => {
  const dispatch = useDispatch();

  const deleteOnCLick = () => {
    dispatch(deleteEducation(id));
  };

  const editOnClick = () => {
    setIsEdit((prev) => {
      return { id: id, status: true };
    });
    setEducation(education);
  };

  return (
    <div className="EducationInfo">
      <div className="info-top">
        <h2 className="heading">EDUCATION DETAILS</h2>
        <div className="buttons-div">
          <button className="edit-button">
            <div className="button-icon">
              <FaEdit onClick={editOnClick} />
            </div>
          </button>
          <button className="delete-button">
            <div className="button-icon">
              <FaTrashAlt onClick={deleteOnCLick} />
            </div>
          </button>
        </div>
      </div>
      <p>
        <span className="heading">Education Level: </span>
        {education.educationLevel}
      </p>
      <p>
        <span className="heading">School Name : </span>
        {education.schoolName}
      </p>
      <p>
        <span className="heading">Score : </span>
        {education.score}
      </p>
      <div style={{ display: "flex", margin: "-1rem 0 -1rem 0" }}>
        <p>
          <span className="heading">Start Date </span>
          {education.startDate}
        </p>
        <p>
          <span className="heading">End Date </span>
          {education.endDate}
        </p>
      </div>
      <p>
        <span className="heading">Address : </span>
        {education.city}, {education.state}, {education.country}
      </p>
    </div>
  );
};

export default EducationInfo;
