import React from "react";
import PropTypes from "prop-types";
import "./Logo.scss";

function Logo({ variant }) {
	return (
		<div
			id="logo"
			className={`position-relative d-flex align-items-center justify-content-center ${variant}`}
		>
			<span
				id="circle-logo"
				className="position-absolute w-100 h-100 rounded-circle bg-purple"
			></span>
			<span
				id="fade-circle-logo"
				className="position-absolute h-100 top-100 translate-middle-y rounded-1"
			></span>
		</div>
	);
}

Logo.propTypes = {
	variant: PropTypes.string,
};
Logo.defaultProps = {
	variant: "normal",
};

export default Logo;

// ******************************USAGE******************************
// <Logo
// 	variant="huge" --> className that declares size of logo
// />
