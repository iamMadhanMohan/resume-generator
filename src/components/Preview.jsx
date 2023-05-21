import React from "react";
import BioSection from "./BioSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import { useRef } from "react";

// https://www.telerik.com/kendo-react-ui/components/pdfprocessing/get-started/
import { PDFExport } from "@progress/kendo-react-pdf";

const Preview = () => {
  const pdfExportComponent = useRef(null);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };
  return (
    <div>
      <button className="download-button" onClick={handleExportWithComponent}>
        Download
      </button>
      <PDFExport ref={pdfExportComponent}>
        <div className="Preview">
          <BioSection />
          <ExperienceSection />
          <ProjectSection />
          <SkillsSection />
          <EducationSection />
        </div>
      </PDFExport>
    </div>
  );
};

export default Preview;
