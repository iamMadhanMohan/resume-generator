import "./Sidebar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsCardHeading } from "react-icons/bs";
import { GrWorkshop, GrProjects } from "react-icons/gr";
import { BsTools } from "react-icons/bs";
import { MdFormatAlignCenter } from "react-icons/md";
import { VscOpenPreview } from "react-icons/vsc";
import { BiHelpCircle } from "react-icons/bi";
import { SlGraduation } from "react-icons/sl";

import logo from "../logo.png";

const navItems = [
  {
    path: "/bio",
    name: "Bio",
    icon: <BsCardHeading />,
  },
  {
    path: "/education",
    name: "Education",
    icon: <SlGraduation />,
  },
  {
    path: "/Experience",
    name: "Experience",
    icon: <GrWorkshop />,
  },
  {
    path: "/skills",
    name: "Skills",
    icon: <BsTools />,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: <GrProjects />,
  },
  {
    path: "/format",
    name: "Format",
    icon: <MdFormatAlignCenter />,
  },
  {
    path: "/preview",
    name: "Preview",
    icon: <VscOpenPreview />,
  },
  {
    path: "/help",
    name: "Help",
    icon: <BiHelpCircle />,
  },
];

const Sidebar = () => {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={logo} alt="logo" className="image" />

        <FaBars className="bar-icon" onClick={handleClick} />
      </div>
      <div className={isClicked ? "menu-items hide-menu" : "menu-items"}>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="link"
            activeclassName="active"
            onClick={() => setIsClicked(!isClicked)}
          >
            <div className="icon">{item.icon}</div>
            <div className="link-text">{item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
