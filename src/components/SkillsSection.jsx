import React from "react";
import { useSelector } from "react-redux";

const SkillsSection = () => {
  const skills = useSelector((state) => state.skill.data);

  return (
    <div className="SkillsSection">
      {skills.length > 0 && <h3>Skills</h3>}
      <ul>
        {skills.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsSection;
