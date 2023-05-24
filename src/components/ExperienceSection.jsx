import React from "react";
import dateConverter from "../dateConverter";

const ExperienceSection = ({ experience }) => {
  return (
    <div className="ExperienceSection">
      <div className="sub-div">
        <h2>
          {experience.role} | {experience.organization}
        </h2>
        <p>
          <i>
            {dateConverter(experience.startDate)} -{" "}
            {experience.endDate ? dateConverter(experience.endDate) : "present"}
          </i>
        </p>
      </div>
      <p>{experience.aboutWork}</p>
    </div>
  );
};

export default ExperienceSection;
