import React from "react";

const EducationSection = ({ education }) => {
  return (
    <div className="EducationSection">
      <h3>Education</h3>
      <div className="sub-div">
        <h2>{education.educationLevel}</h2>
        <span>
          <i>
            {education.startDate} - {education.endDate}
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
