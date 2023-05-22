import React, { useState } from "react";
import ProjectInfo from "./ProjectInfo";
import { useDispatch, useSelector } from "react-redux";
import { addProject, updateProject } from "../reducers/projectSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const projectData = useSelector((state) => state.project.data);

  const [project, setProject] = useState({});

  const [isEdit, setIsEdit] = useState({
    status: false,
    id: "",
  });

  const projectComponent = projectData.map((item, key) => (
    <ProjectInfo
      key={key}
      project={item}
      id={key}
      setProject={setProject}
      setIsEdit={setIsEdit}
    />
  ));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProject((prev) => {
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
      dispatch(updateProject({ index: isEdit.id, data: project }));
    } else {
      dispatch(addProject(project));
    }
    setProject({
      name: "",
      description: "",
      codeLink: "",
      siteLink: "",
    });
  };

  return (
    <div className="Routes-sub-div">
      <div className="Projects">
        <h1 className="heading">Project Details</h1>
        <form action="">
          <label htmlFor="project-name">Project Name</label>
          <input
            type="text"
            id="project-name"
            name="name"
            value={project.name}
            onChange={handleChange}
            placeholder="your project name"
            required
          />

          <label htmlFor="project-description">Description</label>
          <input
            type="text"
            id="project-description"
            name="description"
            value={project.description}
            onChange={handleChange}
            placeholder="about your project"
            required
          />

          <label htmlFor="code-link">Code Link</label>
          <input
            type="text"
            id="code-link"
            name="codeLink"
            value={project.codeLink}
            onChange={handleChange}
            placeholder="project code link(optional)"
          />

          <label htmlFor="web-link">Site Link</label>
          <input
            type="text"
            id="web-link"
            name="siteLink"
            value={project.siteLink}
            onChange={handleChange}
            placeholder="project web link(optional)"
          />

          <button className="save-button" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </div>
      <div className="info-div">{projectComponent}</div>
    </div>
  );
};

export default Projects;
