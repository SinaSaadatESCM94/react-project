import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import defualImage from "../../assets/images/drive-poster.jpg";

const DrivePoster = ({ className, posterTitle, posterImg, lastTimeEdited }) => {
  return (
    <div
      className={`w-100 p-3 d-flex flex-column gap-2 rounded-4 border-color-secondary-lighter ${className}`}
    >
      <div className="w-100 ratio ratio-21x9 d-flex poster-contaner">
        <img src={posterImg} alt="Poster" className="w-100 h-100 rounded-4" />
      </div>
      <div className="w-100 h-auto d-flex align-items-center">
        <FontAwesomeIcon
          icon={faImages}
          className="h4 m-0 me-3 text-color-secondary-light"
        />
        <h4 className="h4 m-0 text-capitalize text-color-secondary-dark">
          {posterTitle}
        </h4>
      </div>
      <h5 className="h5 m-0 text-capitalize text-color-secondary-light">
        {lastTimeEdited}
      </h5>
    </div>
  );
};

DrivePoster.defaultProps = {
  className: "",
  posterTitle: "Input field master",
  posterImg: defualImage,
  lastTimeEdited: "Edited today",
};
DrivePoster.propTypes = {
  className: PropTypes.string,
  posterTitle: PropTypes.string,
  posterImg: PropTypes.string,
  lastTimeEdited: PropTypes.string,
};

export default DrivePoster;
