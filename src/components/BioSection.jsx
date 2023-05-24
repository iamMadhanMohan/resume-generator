import React from "react";
import { useSelector } from "react-redux";

const BioSection = () => {
  const bio = useSelector((state) => state.bio);

  return (
    <div className="BioSection">
      <h1>
        {bio.firstName} {bio.lastName}
      </h1>
      <div className="contactInfo">
        Email:<span>{bio.email}</span>
        Phone:<span>{bio.phoneNumber}</span>
      </div>
      <div className="aboutMe">
        {Object.keys(bio).length !== 0 && bio.aboutMe.length !== 0 && (
          <>
            <h3>About me</h3>
            <p>{bio.aboutMe}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BioSection;
