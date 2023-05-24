import React from "react";
import dateConverter from "../dateConverter";

const EducationSection = ({ education }) => {
  return (
    <div className="EducationSection">
      <div className="sub-div">
        <h2>{education.educationLevel}</h2>
        <span>
          <i>
            {dateConverter(education.startDate)} -{" "}
            {education.endDate ? dateConverter(education.endDate) : "present"}
          </i>
        </span>
      </div>
      <p>{education.score && <i>score : {education.score}</i>}</p>
      <p>{education.schoolName}</p>
      <p>
        {education.city}, {education.state}, {education.country}
      </p>
    </div>
  );
};

export default EducationSection;
