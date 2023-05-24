import React, { useState } from "react";
import SkillsInfo from "./SkillsInfo";
import { useSelector, useDispatch } from "react-redux";
import { addSkill } from "../reducers/skillSlice";

const Skills = () => {
  const dispatch = useDispatch();
  const skillData = useSelector((state) => state.skill.data);

  const [skill, setSkill] = useState({});

  const skillComponent = skillData.map((item, id) => (
    <SkillsInfo key={id} id={id} skill={item} />
  ));

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSkill((prev) => {
      return {
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addSkill(skill));

    setSkill({ name: "" });
  };

  return (
    <div className="Routes-sub-div">
      <div className="Skills">
        <h1 className="heading">Skills Details</h1>

        <form onSubmit={handleSubmit}>
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

          <button className="save-button" type="submit">
            Add
          </button>
        </form>
      </div>

      <div className="info-div">{skillComponent}</div>
    </div>
  );
};

export default Skills;
