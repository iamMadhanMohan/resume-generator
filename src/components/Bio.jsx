import React, { useState } from "react";
import BioInfo from "./BioInfo";
import { useDispatch, useSelector } from "react-redux";
import { addBio } from "../reducers/bioSlice";

const Bio = () => {
  const [bio, setBio] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    aboutMe: "",
  });

  const dispatch = useDispatch();

  const bioData = useSelector((state) => state.bio);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBio((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBio(bio));

    setBio({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      aboutMe: "",
    });
  };

  return (
    <div className="Routes-sub-div">
      <div className="Bio">
        <h1 className="heading">Personal Information</h1>
        <form>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            placeholder="first name"
            name="firstName"
            value={bio.firstName}
            id="first-name"
            onChange={handleChange}
            required
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            placeholder="last name"
            name="lastName"
            value={bio.lastName}
            id="last-name"
            onChange={handleChange}
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            value={bio.email}
            id="email"
            placeholder="email id"
            onChange={handleChange}
            required
          />

          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="tel"
            placeholder="xxx-xxx-xxxx"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            id="phone-number"
            name="phoneNumber"
            value={bio.phoneNumber}
            onChange={handleChange}
            required
          />

          <label htmlFor="about-me">About Me</label>
          <textarea
            name="aboutMe"
            value={bio.aboutMe}
            id="about-me"
            cols="30"
            rows="6"
            onChange={handleChange}
          ></textarea>

          <button className="save-button" onClick={handleSubmit}>
            Save
          </button>
        </form>
      </div>
      <div className="info-div">
        {Object.keys(bioData).length !== 0 && <BioInfo bio={bioData} />}
      </div>
    </div>
  );
};

export default Bio;
