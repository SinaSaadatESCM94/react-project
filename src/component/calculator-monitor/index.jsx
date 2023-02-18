import React from "react";
import PropTypes from "prop-types";

function CalcMonitor({ firstNum, secondNum, operator, result }) {
  return (
    <div
      className="w-100 h-100 px-3 d-flex flex-column align-items-center justify-content-between scroll-design"
      style={{ overflowX: "scroll" }}
    >
      <div className="w-100 h-50 d-flex align-items-center justify-content-start text-white flex-wrap h2">
        {`${firstNum} ${operator} ${secondNum}`}
      </div>
      <div className="w-100 h-50 d-flex align-items-center justify-content-end text-white flex-wrap h3">
        {`${result}`}
      </div>
    </div>
  );
}

CalcMonitor.propTypes = {
  firstNum: PropTypes.string,
  secondNum: PropTypes.string,
  operator: PropTypes.string,
  result: PropTypes.string,
};
CalcMonitor.defaultProps = {
  firstNum: "",
  secondNum: "",
  operator: "",
  result: "",
};

export default CalcMonitor;
