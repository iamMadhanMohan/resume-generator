import React from "react";
import BioSection from "./BioSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import { useRef } from "react";
import ReactToPrint from "react-to-print";

// https://www.telerik.com/kendo-react-ui/components/pdfprocessing/get-started/

import { useSelector } from "react-redux";

const Preview = () => {
  const componentRef = useRef();

  const education = useSelector((state) => state.education.data);
  const experience = useSelector((state) => state.experience.data);
  const project = useSelector((state) => state.project.data);

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button className="download-button">Print | Download</button>
        )}
        content={() => componentRef.current}
      />

      <div className="Preview" ref={componentRef}>
        <BioSection />

        {experience.length > 0 && <h3>Experience</h3>}
        {experience.map((obj, id) => (
          <ExperienceSection key={id} experience={obj} />
        ))}

        {project.length > 0 && <h3>Projects</h3>}
        {project.map((obj, id) => (
          <ProjectSection key={id} project={obj} />
        ))}

        <SkillsSection />

        {education.length > 0 && <h3>Education</h3>}
        {education.map((obj, id) => (
          <EducationSection key={id} education={obj} />
        ))}
      </div>
    </div>
  );
};

export default Preview;
