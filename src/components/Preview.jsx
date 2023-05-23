import React from "react";
import BioSection from "./BioSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import { useRef } from "react";

// https://www.telerik.com/kendo-react-ui/components/pdfprocessing/get-started/
import { PDFExport } from "@progress/kendo-react-pdf";
import { useSelector } from "react-redux";

const Preview = () => {
  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  const education = useSelector((state) => state.education.data);
  const experience = useSelector((state) => state.experience.data);
  const project = useSelector((state) => state.project.data);

  return (
    <div>
      <button className="download-button" onClick={handleExportWithComponent}>
        Download
      </button>

      <PDFExport ref={pdfExportComponent}>
        <div className="Preview">
          <BioSection />

          <h3>Experience</h3>
          {experience.map((obj, id) => (
            <ExperienceSection key={id} experience={obj} />
          ))}

          <h3>Projects</h3>
          {project.map((obj, id) => (
            <ProjectSection key={id} project={obj} />
          ))}

          <SkillsSection />

          <h3>Education</h3>
          {education.map((obj, id) => (
            <EducationSection key={id} education={obj} />
          ))}
        </div>
      </PDFExport>
    </div>
  );
};

export default Preview;
