import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../contributer/Contributer.scss";
import defaultProfileImage from "../../assets/avatars/profile.svg";

const Contributer = ({ contributers, isAddOptionOn, imageWidth }) => {
  const coefficientOfLeftPosition = 0.75 * imageWidth;
  const numberOfContributers = contributers.length;
  // following variable is to calculate width of component since it will be used both on the left side of the page and right side of the page
  const divParentWidth = isAddOptionOn
    ? widthCalculator(numberOfContributers + 1)
    : widthCalculator(numberOfContributers);
  // to make code clean the calc of width is seprated in the following function
  function widthCalculator(objectNumber) {
    return objectNumber * imageWidth - (objectNumber - 1) * (0.25 * imageWidth);
  }
  return (
    <div
      className="m-0 d-flex position-relative Contributer"
      style={{ width: divParentWidth + "rem", height: imageWidth + "rem" }}
    >
      {contributers.map((eachContributer) => {
        // the following calculation's purpose is making an index so we can put the first element in the left and last in the right. the first element index is zero so it is substracted form the total number of elements to give the biggest index to first elements. next -1 is added to calculation so the last elements index be equal to zero (as result right = 0rem). the +addOptionIndex in last term has two values, 0 when it is not needed and 1 when it's required and as result all the previous elements will be shifted to left for 1 index. (this comment should be updated)
        let leftPositionIndex = contributers.indexOf(eachContributer);
        return (
          <img
            src={eachContributer}
            alt="profile pic"
            className={`w-auto h-100 m-0 position-absolute rounded-circle`}
            style={{
              left: leftPositionIndex * coefficientOfLeftPosition + "rem",
              zIndex: numberOfContributers - leftPositionIndex,
            }}
            key={leftPositionIndex}
          />
        );
      })}
      {isAddOptionOn && (
        <div
          className=" position-absolute d-flex align-items-center justify-content-center p-2 m-0 add-contributer"
          style={{
            left: numberOfContributers * coefficientOfLeftPosition + "rem",
            zIndex: 0,
            height: imageWidth + "rem",
          }}
        >
          <button className="w-100 h-100 m-0 d-flex align-items-center justify-content-center bg-transparent rounded-circle text-color-secondary-light plus-sign">
            <FontAwesomeIcon icon={faPlus} className="fs-2" />
          </button>
        </div>
      )}
    </div>
  );
};

Contributer.defaultProps = {
  contributers: [defaultProfileImage],
  isAddOptionOn: false,
  imageWidth: 6,
};
Contributer.propTypes = {
  contributers: PropTypes.array,
  isAddOptionOn: PropTypes.bool,
  imageWidth: PropTypes.number,
};

export default Contributer;
