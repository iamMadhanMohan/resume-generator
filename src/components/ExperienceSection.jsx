import React from "react";

const ExperienceSection = ({ experience }) => {
  return (
    <div className="ExperienceSection">
      <h3>Experience</h3>
      <div className="sub-div">
        <h2>
          {experience.role} | {experience.organization}
        </h2>
        <p>
          <i>
            {experience.startDate} - {experience.endDate}
          </i>
        </p>
      </div>
      <p>{experience.aboutWork}</p>
    </div>
  );
};

export default ExperienceSection;
