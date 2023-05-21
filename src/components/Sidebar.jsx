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
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Sidebar" style={{ width: isOpen ? "200px" : "70px" }}>
      <div className="logo">
        <img
          src="./images/logo.png"
          alt="logo"
          className="image"
          style={{ display: isOpen ? "" : "none" }}
        />
        <FaBars
          className="bar-icon"
          onClick={toggle}
          style={{
            marginTop: isOpen ? "" : "1rem",
            marginBottom: isOpen ? "" : "1rem",
          }}
        />
      </div>
      <div className="menu-items">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className="link"
            activeclassName="active"
          >
            <div className="icon" style={{ margin: isOpen ? "" : "0 auto" }}>
              {item.icon}
            </div>
            <div
              className="link-text"
              style={{ display: isOpen ? "block" : "none" }}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
