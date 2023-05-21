import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteExperience } from "../reducers/experienceSlice";

const ExperienceInfo = ({ experience, id, setIsEdit, setExperience }) => {
  const dispatch = useDispatch();

  const deleteOnClick = () => {
    dispatch(deleteExperience(id));
  };

  const editOnClick = () => {
    setIsEdit((prev) => {
      return { id: id, status: true };
    });
    setExperience(experience);
  };
  return (
    <div className="ExperienceInfo">
      <div className="info-top">
        <h2 className="heading">EXPERIENCE DETAILS</h2>
        <div className="buttons-div">
          <button className="edit-button">
            <div className="button-icon">
              <FaEdit onClick={editOnClick} />
            </div>
          </button>
          <button className="delete-button">
            <div className="button-icon">
              <FaTrashAlt onClick={deleteOnClick} />
            </div>
          </button>
        </div>
      </div>
      <p>
        <span className="heading">Role Name: </span>
        {experience.role}
      </p>
      <p>
        <span className="heading">Organization Name : </span>
        {experience.organization}
      </p>

      <div style={{ display: "flex", margin: "-1rem 0 -1rem 0" }}>
        <p>
          <span className="heading">Start Date </span>
          {experience.startDate}
        </p>
        <p>
          <span className="heading">End Date </span>
          {experience.endDate}
        </p>
      </div>
      <p>
        <span className="heading">
          About Work : <br />
        </span>
        {experience.aboutWork}
      </p>
    </div>
  );
};

export default ExperienceInfo;
