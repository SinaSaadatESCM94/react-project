import React from "react";
import PropTypes from "prop-types";
import { Shortcut } from "../../component";

const TabBar = ({ className, tabList }) => {
  // console.log();
  return (
    <ul
      className={`w-auto h-auto d-flex align-items-center m-0 p-0 tabs-container`}
    >
      {/* map method is applied to create each header tab */}
      {tabList.map((eachTabItem) => {
        return (
          <li
            key={eachTabItem.key}
            className={`list-unstyled w-auto d-flex flex-row align-items-center justify-content-between px-3 py-2 me-3 rounded-4 cursor-pointer transition-all ${className}`}
          >
            <Shortcut
              className={`h4 mb-0`}
              onClick="null"
              icon={eachTabItem.icon}
              label={eachTabItem.label}
            />
          </li>
        );
      })}
    </ul>
  );
};

TabBar.defaultProps = {
  className: "primary",
  tabList: [],
};
TabBar.propTypes = {
  className: PropTypes.string,
  tabList: PropTypes.array,
};

export default TabBar;
