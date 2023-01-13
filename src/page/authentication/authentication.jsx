import React from "react";
import PropTypes from "prop-types";
import { Logo } from "../../component";
function Authentication({ bgContainer, containerBorderRadius, logoVariant }) {
	return (
		<div
			className={`w-100 h-100 d-flex align-items-center justify-content-center 
      ${bgContainer} ${containerBorderRadius}`}
		>
			<Logo variant={logoVariant} />
		</div>
	);
}

Authentication.propTypes = {
	bgContainer: PropTypes.string,
	containerBorderRadius: PropTypes.string,
	logoVariant: PropTypes.string,
};
Authentication.defaultProps = {
	bgContainer: "bg-gray-light",
	containerBorderRadius: "rounded-end",
	logoVariant: "huge",
};
export default Authentication;

// ******************************USAGE******************************
// <Authentication
//   bgContainer="bg-gray-light" --> container background-color
//   containerBorderRadius="rounded-end" --> container border radius
//   logoVariant="huge" --> logo className which able it to be responsive
// />
