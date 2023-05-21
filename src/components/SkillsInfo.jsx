import React from "react";
import { useDispatch } from "react-redux";
import { deleteSkill } from "../reducers/skillSlice";

const SkillsInfo = ({ skill, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteSkill(id));
  };
  return (
    <div>
      <div className="SkillsInfo">
        <div className="each-skill-div">
          <h2>{skill.name}</h2>
          <button onClick={handleDelete}>X</button>
        </div>
      </div>
    </div>
  );
};

export default SkillsInfo;
