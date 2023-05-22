import React from "react";
import { useSelector } from "react-redux";

const SkillsSection = () => {
  const skills = useSelector((state) => state.skill.data);
  const technicalSkills = skills.filter((obj) => obj.type == "technical skill");
  const softSkills = skills.filter((obj) => obj.type == "soft skill");

  return (
    <div className="SkillsSection">
      {(technicalSkills.length !== 0 || softSkills.length !== 0) && (
        <h3>Skills</h3>
      )}
      {technicalSkills.length !== 0 && <h2>Technical Skill</h2>}
      <ul>
        {technicalSkills.map((obj) => (
          <li>{obj.name}</li>
        ))}
      </ul>
      {softSkills.length !== 0 && <h2>Soft Skill</h2>}
      <ul>
        {softSkills.map((obj) => (
          <li>{obj.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;
