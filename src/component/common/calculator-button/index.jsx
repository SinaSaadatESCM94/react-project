import React from "react";
import PropTypes from "prop-types";
import "./calculatorButton.scss";
function CalcButton({ label, isNumber, onClick }) {
  return (
    <button
      className={`w-5rem h-5rem bg-secondary-light d-flex align-items-center justify-content-center h3 m-0 p-0 rounded-circle border-0 ${
        isNumber ? "calcBtn-type-one" : "calcBtn-type-two"
      }`}
      onClick={() => {
        onClick();
      }}
    >
      {label}
    </button>
  );
}

CalcButton.propTypes = {
  label: PropTypes.string,
  isNumber: PropTypes.bool,
  onClick: PropTypes.func,
};
CalcButton.defaultProps = {
  label: "",
  isNumber: true,
  onClick: () => console.log("clicked"),
};
export default CalcButton;
