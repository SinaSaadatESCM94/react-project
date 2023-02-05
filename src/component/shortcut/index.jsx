import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Shortcut = ({ className, textContainerClassName, badgeClassName, onClick, icon, label, badgeLabel }) => {
	return (
		<div className={`w-100 position-relative cursor-pointer shortcut-container ${className}`} onClick={onClick}>
			<div className={`w-auto h-auto d-flex align-items-center ${textContainerClassName}`}>
				{icon && <FontAwesomeIcon icon={icon} className="m-0" />}
				{label && <p className="m-0 ms-auto text-capitalize">{label}</p>}
			</div>
			{badgeLabel && (
				<span
					className={`w-auto position-absolute top-0 start-100 translate-middle badge d-flex align-items-center justify-content-center ${badgeClassName}`}
				>
					{badgeLabel}
				</span>
			)}
		</div>
	);
};

Shortcut.defaultProps = {
	className: "fs-6 text-color-secondary-light border-color-secondary-light",
	textContainerClassName: "px-2 py-1 gap-3",
	badgeClassName: "px-2 py-1 m-0 rounded-3 fs-6 bg-badge text-color-board-bg",
	onClick: () => {
		console.log("clicked");
	},
	icon: "",
	label: "",
	badgeLabel: "",
};
Shortcut.propTypes = {
	shortcutClassName: PropTypes.string,
	textContainerClassName: PropTypes.string,
	badgeClassName: PropTypes.string,
	onClick: PropTypes.func,
	icon: PropTypes.object,
	label: PropTypes.string,
	badgeLabel: PropTypes.string,
};

export default Shortcut;
