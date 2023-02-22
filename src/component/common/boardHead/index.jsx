import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faHeart, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const BoardHead = () => {
	return (
		<div className="w-100 h-auto d-flex align-items-center justify-content-between board-header">
			<p className="h5 m-0 text-capitalize text-color-secondary-dark">
				Dashboard / Project / <span className="text-color-secondary-light">Advanture 1290 Dashboard</span>
			</p>
			<ul className="w-auto h-auto d-flex flex-row align-items-center justify-content-between m-0 gap-4">
				<li className="rounded-circle d-flex align-items-center justify-content-center list-unstyled me-3 w-3rem h-3rem text-color-secondary-light border-color-secondary-light cursor-pointer transition-all text-hover-secondary border-hover-secondary">
					<FontAwesomeIcon icon={faQuestionCircle} className="h3 m-0" />
				</li>
				<li className="rounded-circle d-flex align-items-center justify-content-center list-unstyled me-3 w-3rem h-3rem text-color-secondary-light border-color-secondary-light cursor-pointer transition-all text-hover-secondary border-hover-secondary">
					<FontAwesomeIcon icon={faHeart} className="h3 m-0" />
				</li>
				<li className="rounded-circle d-flex align-items-center justify-content-center list-unstyled me-3 w-3rem h-3rem text-color-secondary-light border-color-secondary-light cursor-pointer transition-all text-hover-secondary border-hover-secondary">
					<FontAwesomeIcon icon={faEllipsisV} className="h3 m-0" />
				</li>
			</ul>
		</div>
	);
};

BoardHead.defaultProps = {
	className: "",
	designersName: "john doe",
	logo: "",
};
BoardHead.propTypes = {
	className: PropTypes.string,
	designersName: PropTypes.string,
	logo: PropTypes.string,
};

export default BoardHead;
