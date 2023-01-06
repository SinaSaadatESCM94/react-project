import React from "react";
import PropTypes from "prop-types";
// importing style
import "./menuIcon.scss";

function MenuIcon({
	id,
	buttonWidth,
	buttonHeight,
	backgroundColor,
	isMenuOpen,
	setIsMenuOpen,
}) {
	// functions
	// toggleFunction add/remove a toggle class from bars-container for animation
	const toggleFunction = () => {
		document.querySelector(`#${id} .bars-container`).classList.toggle("toggle");
	};
	return (
		<button
			id={id}
			className={`border-0 bg-transparent menu-btn h-auto`}
			style={{ width: `${buttonWidth}`, height: `${buttonHeight}` }}
			onClick={() => {
				toggleFunction();
				setIsMenuOpen((prev) => {
					return !prev;
				});
			}}
		>
			<div
				className={`w-100 h-100 d-flex flex-column align-items-center justify-content-between gap-1 bars-container ${
					// to see if the menu icon must be open or close initially
					isMenuOpen ? "toggle" : ""
				}`}
			>
				<span
					className={`w-100 rounded-pill transition-all bar-top menu-icon-bar-height ${backgroundColor}`}
				></span>
				<span
					className={`w-100 rounded-pill bg-secondary transition-all bar-middle menu-icon-bar-height ${backgroundColor}`}
				></span>
				<span
					className={`w-100 rounded-pill bg-secondary transition-all bar-bottom menu-icon-bar-height ${backgroundColor}`}
				></span>
			</div>
		</button>
	);
}

MenuIcon.propTypes = {
	id: PropTypes.string,
	buttonWidth: PropTypes.string,
	buttonHeight: PropTypes.string,
	backgroundColor: PropTypes.string,
	isMenuOpen: PropTypes.bool,
	setIsMenuOpen: PropTypes.any,
};
MenuIcon.defaultProps = {
	id: "",
	buttonWidth: "3rem",
	buttonHeight: "3rem",
	backgroundColor: "bg-secondary",
	isMenuOpen: false,
	setIsMenuOpen: null,
};
export default MenuIcon;
