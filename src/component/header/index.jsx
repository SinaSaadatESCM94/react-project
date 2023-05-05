import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faSheetPlastic,
  faCalendar,
  faListCheck,
  faCalculator,
  faEnvelope,
  faTable,
  faSearch,
  faFilePowerpoint,
} from "@fortawesome/free-solid-svg-icons";
import { TabBar, Shortcut } from "../../component";
import defualtProfilePic from "../../assets/avatars/profile.svg";
import "../header/Header.scss";

const Header = ({
  logo,
  tabList,
  notificationNumbers,
  profileImage,
  className,
}) => {
  return (
    <div
      className={`w-auto h-auto d-flex align-items-center justify-content-between text-color-primary-light shadow Header-container ${className}`}
    >
      <div className="w-auto h-auto d-flex me-5 align-items-center header-start">
        <div className={`w-4rem me-3`}>
          {logo ? (
            <img
              src={logo}
              alt="Logo"
              className={`ratio ratio-1x1 $rounded-3`}
            />
          ) : (
            <span className="ratio ratio-1x1 d-flex align-items-center justify-content-center rounded-circle bg-secondary-dark text-color-board-bg">
              Logo
            </span>
          )}
        </div>
        <TabBar tabList={tabList} className={"shortcut-hover-primary"} />
      </div>
      <div className="w-auto d-flex h-auto header-end">
        <ul className="w-100 h-auto d-flex justify-content-between align-items-center m-0 p-0 ">
          <li
            key="search"
            className={`list-unstyled col-6 h-auto p-0 position-relative`}
          >
            <input
              type="text"
              className={`w-100 h-100 d-flex py-2 ps-5 bg-transparent h4 m-0 rounded-3 text-color-primary-light border-color-primary-light`}
              placeholder="Search"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="h4 ps-2 m-0 top-50 translate-middle-y position-absolute text-color-primary-light"
            />
          </li>
          <li
            key="icon"
            className="list-unstyled d-flex w-auto h-auto text-color-primary-light"
          >
            <Shortcut
              icon={faTable}
              className="h3 m-0 transition-all rounded-3 shortcut-hover-primary"
              textContainerClassName=""
            />
          </li>
          <li
            key="email"
            className={`list-unstyled d-flex w-auto h-auto position-relative text-color-primary-light email`}
          >
            <Shortcut
              icon={faEnvelope}
              badgeLabel={notificationNumbers}
              className="h3 m-0 transition-all rounded-3 shortcut-hover-primary"
              textContainerClassName=""
            />
          </li>
          <li
            key="profile"
            className={`w-4rem list-unstyled position-relative d-flex rounded-circle me-3 profile-pic-container`}
          >
            {/* border for img tag is defined in Header.scss to make a gap between bg-rainbow and image */}
            <img
              src={profileImage}
              alt="Pic"
              className="w-100 m-auto rounded-circle"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

Header.defaultProps = {
  logo: "",
  tabList: [
    { icon: faDashboard, label: "dashboard", key: "dashboard", link: "board" },
    {
      icon: faSheetPlastic,
      label: "slide show",
      key: "slideShow",
      link: "slide-show",
    },
    {
      icon: faCalculator,
      label: "calculator",
      key: "calculator",
      link: "calculator",
    },
    {
      icon: faFilePowerpoint,
      label: "presentation",
      key: "presentation",
      link: "presentation",
    },
    { icon: faCalendar, label: "calender", key: "calender" },
    { icon: faListCheck, label: "todo", key: "todo" },
  ],
  notificationNumbers: "2",
  profileImage: defualtProfilePic,
  className: "rounded-top-4 p-3",
};
Header.propTypes = {
  logo: PropTypes.string,
  tabList: PropTypes.array,
  notificationNumbers: PropTypes.string,
  profileImage: PropTypes.string,
  className: PropTypes.string,
};

export default Header;
