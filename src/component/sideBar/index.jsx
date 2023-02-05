import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faPlus } from "@fortawesome/free-solid-svg-icons";
import "../sideBar/SideBar.scss";
import { MenuIcon } from "../../component";

const SideBar = ({ className, designersName, logo, iconWidth, iconHeight }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className={`w-auto d-flex flex-column align-items-center border-end gap-5 p-3  rounded-start-4 position-relative bg-board sideBar-container ${className}`}
    >
      <MenuIcon
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        id="side-bar-menu"
      />
      <div
        className="p-1 d-flex align-items-center justify-content-center rounded-circle fs-5 fw-bold text-uppercase text-color-board-bg bg-purple profile-name-icon"
        style={{ width: iconWidth, height: iconHeight }}
      >
        {`${designersName.split(" ")[0][0]} ${designersName.split(" ")[1][0]}`}
      </div>
      <div
        className="rounded-circle bg-badge logo-container"
        style={{ width: iconWidth, height: iconHeight }}
      >
        {logo ? (
          <img
            src={logo}
            alt="logo"
            className="w-100 h-100 rounded-circle bg-badge"
          />
        ) : (
          <span className="w-100 h-100 rounded-circle d-flex align-items-center justify-content-center text-light bg-badge">
            Logo
          </span>
        )}
      </div>
      <div className="d-flex align-items-center justify-content-center rounded-circle cursor-pointer">
        <FontAwesomeIcon
          icon={faPlus}
          className="p-2 rounded-circle fs-4 fw-bolder text-color-board-bg bg-secondary-light bg-hover-secondary transition-all more-items"
        />
      </div>
      <div className="w-auto h-auto d-flex align-items-center justify-content-center position-fixed bottom-0 mb-5 rounded-circle text-color-secondary-light border-color-secondary-light cursor-pointer text-hover-secondary border-hover-secondary transition-all setting">
        <FontAwesomeIcon icon={faCog} className="fs-3 p-3" />
      </div>
    </div>
  );
};

SideBar.defaultProps = {
  className: "",
  designersName: "Maciej Kotula",
  logo: "",
  iconWidth: "5rem",
  iconHeight: "5rem",
};
SideBar.propTypes = {
  className: PropTypes.string,
  designersName: PropTypes.string,
  logo: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
};

export default SideBar;
