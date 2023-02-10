import React from "react";
import PropTypes from "prop-types";
// importing style
import "./Loading.scss";

function LoadingButton({ paddingY, backgroundColor }) {
	return (
		<div
			className={`w-100 d-flex align-items-center justify-content-center ${paddingY}`}
		>
			<div
				className={`position-relative rounded-circle loading-button-dot-pulse ${backgroundColor}`}
			>
				<div
					className={`position-absolute w-100 h-100 d-flex top-0 rounded-circle dot-pulse-before ${backgroundColor}`}
				></div>
				<div
					className={`position-absolute w-100 h-100 d-flex top-0 rounded-circle dot-pulse-after ${backgroundColor}`}
				></div>
			</div>
		</div>
	);
}

LoadingButton.propTypes = {
	paddingY: PropTypes.string,
	backgroundColor: PropTypes.string,
};
LoadingButton.defaultProps = {
	paddingY: "py-2",
	backgroundColor: "bg-white",
};

export default LoadingButton;

// this component's design is taken from the following codePen page:
// https://codepen.io/nzbin/pen/GGrXbp
