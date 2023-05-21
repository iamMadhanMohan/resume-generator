import React, { useState } from "react";
import SkillsInfo from "./SkillsInfo";
import { useSelector, useDispatch } from "react-redux";
import { addSkill } from "../reducers/skillSlice";

const skillType = ["soft skill", "technical skill"];

const Skills = () => {
  const dispatch = useDispatch();
  const skillData = useSelector((state) => state.skill.data);

  const [skill, setSkill] = useState({
    name: "",
    type: "",
  });

  const skillComponent = skillData.map((item, id) => (
    <SkillsInfo key={id} id={id} skill={item} />
  ));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSkill((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    dispatch(addSkill(skill));

    setSkill({
      name: "",
      type: "",
    });
  };

  return (
    <div className="Routes-sub-div">
      <div className="Skills">
        <h1 className="heading">Skills Details</h1>
        <form action="">
          <label htmlFor="skill-name">Skill Name</label>
          <input
            type="text"
            id="skill-name"
            name="name"
            value={skill.name}
            onChange={handleChange}
            placeholder="skill name"
            required
          />

          <label htmlFor="skill">Skill Type</label>
          <select
            id="skill"
            name="type"
            value={skill.type}
            onChange={handleChange}
          >
            {skillType.map((item, key) => {
              return <option key={key}>{item}</option>;
            })}
          </select>

          <button className="save-button" onClick={handleSubmit}>
            Add
          </button>
        </form>
      </div>
      <div className="info-div">{skillComponent}</div>
    </div>
  );
};

export default Skills;
