import React from "react";

const ProjectSection = ({ project }) => {
  return (
    <div className="ProjectSection">
      <h3>Projects</h3>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <span>Code : {project.codeLink}</span>
      <span style={{ marginLeft: "1rem" }}>Site :{project.siteLink}</span>
    </div>
  );
};

export default ProjectSection;
