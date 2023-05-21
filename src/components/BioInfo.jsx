import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteBio } from "../reducers/bioSlice";

const BioInfo = ({ id, bio, setBio, setIsEdit }) => {
  const dispatch = useDispatch();

  const deleteOnCLick = () => {
    dispatch(deleteBio(id));
  };

  const editOnClick = () => {
    setIsEdit((prev) => {
      return { id: id, status: true };
    });
    setBio(bio);
  };

  return (
    <div className="BioInfo">
      <div className="info-top">
        <h2 className="heading">PERSON DETAILS</h2>
        <div className="buttons-div">
          <button className="edit-button">
            <div className="button-icon">
              <FaEdit onClick={editOnClick} />
            </div>
          </button>
          <button className="delete-button">
            <div className="button-icon">
              <FaTrashAlt onClick={deleteOnCLick} />
            </div>
          </button>
        </div>
      </div>
      <p>
        <span className="heading">First Name : </span>
        {bio.firstName}
      </p>
      <p>
        <span className="heading">Last Name : </span>
        {bio.lastName}
      </p>
      <p>
        <span className="heading">E-mail : </span>
        {bio.email}
      </p>
      <p>
        <span className="heading">Phone Number : </span>
        {bio.phoneNumber}
      </p>
      <p>
        <span className="heading">
          About me : <br />
        </span>
        {bio.aboutMe}
      </p>
    </div>
  );
};

export default BioInfo;
