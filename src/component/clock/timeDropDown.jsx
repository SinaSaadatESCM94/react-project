import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function TimeDropDown({ data, show }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-100 d-flex flex-column align-items-center justify-content-center position-relative">
      <div className="w-100 d-flex align-items-center justify-content-between px-2 border">
        <input
          className="w-75 border-0 bg-transparent input-number-arrow-none h6 m-0 h-timeDropDown-element"
          type="number"
        ></input>
        <span
          className="w-25 d-flex align-items-center justify-content-center"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faChevronDown} className="fs-6 m-0" />
        </span>
      </div>
      <ul
        className={`w-100 d-flex flex-column align-items-center justify-content-start position-absolute m-0 list-unstyled h-timeDropDown-list overflow-auto transition-all list-open-${isOpen}`}
      >
        {data.map((item) => {
          return (
            <li
              key={item?.id}
              className="w-100 d-flex align-items-center justify-content-start px-2 border h-timeDropDown-element option"
            >
              {item[show]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

TimeDropDown.propTypes = {};

export default TimeDropDown;
