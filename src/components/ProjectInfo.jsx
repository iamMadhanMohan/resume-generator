import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { deleteProject } from "../reducers/projectSlice";
import { useDispatch } from "react-redux";

const ProjectInfo = ({ project, id, setIsEdit, setProject }) => {
  const dispatch = useDispatch();

  const deleteOnCLick = () => {
    dispatch(deleteProject(id));
  };

  const editOnClick = () => {
    setIsEdit((prev) => {
      return { id: id, status: true };
    });
    setProject(project);
  };
  return (
    <div className="ProjectInfo">
      <div className="info-top">
        <h2 className="heading">PROJECT DETAILS</h2>
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
        <span className="heading">Project Name : </span>
        {project.name}
      </p>
      <p>
        <span className="heading">
          Description : <br />
        </span>
        {project.description}
      </p>
      <p>
        <span className="heading">Code link: </span>
        {project.codeLink}
      </p>
      <p>
        <span className="heading">Site link : </span>
        {project.siteLink}
      </p>
    </div>
  );
};

export default ProjectInfo;
