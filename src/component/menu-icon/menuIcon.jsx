import React from "react";
import PropTypes from "prop-types";
// importing style
import "./menuIcon.scss";

function MenuIcon({
	id,
	iconSizeVariant,
	bgBars,
	bgCross,
	isMenuOpen,
	setIsMenuOpen,
}) {
	// functions
	// toggleFunction add/remove a toggle class from bars-container for animation
	const toggleFunction = () => {
		document.getElementById(`${id}`).classList.toggle("toggle");
	};
	return (
		// this icon is originally a button
		// passed props to this element as class:
		// 		-iconSizevariant
		<button
			id={id}
			className={`d-flex flex-column align-items-center justify-content-around border-0 bg-transparent menu-btn ${
				// to see if the menu icon must be open or close initially
				isMenuOpen ? "toggle" : ""
			} ${iconSizeVariant}`}
			onClick={() => {
				toggleFunction();
				setIsMenuOpen((prev) => {
					return !prev;
				});
			}}
		>
			{/* following spans are for creating bars and cross during animations 
					passed props to this element as class:
						-bgBars
						-bgCross
			*/}
			<span
				className={`w-100 rounded-pill transition-all bar-top bar-height ${
					!isMenuOpen ? bgBars : bgCross
				}`}
			></span>
			<span
				className={`w-100 rounded-pill transition-all bar-middle bar-height ${
					!isMenuOpen ? bgBars : bgCross
				}`}
			></span>
			<span
				className={`w-100 rounded-pill transition-all bar-bottom bar-height ${
					!isMenuOpen ? bgBars : bgCross
				}`}
			></span>
		</button>
	);
}

MenuIcon.propTypes = {
	id: PropTypes.string,
	iconSizeVariant: PropTypes.string,
	bgBars: PropTypes.string,
	bgCross: PropTypes.string,
	isMenuOpen: PropTypes.bool,
	setIsMenuOpen: PropTypes.any,
};
MenuIcon.defaultProps = {
	id: "",
	iconSizeVariant:
		"icon-smaller icon-xs-normal icon-sm-normal icon-md-normal icon-lg-normal icon-xl-normal icon-xxl-normal",
	bgBars: "bg-secondary",
	bgCross: "bg-danger",
	isMenuOpen: false,
	setIsMenuOpen: null,
};
export default MenuIcon;

// ******************************USAGE******************************
// <MenuIcon
//	 id="button1" --> this id should be unique for each btn, click action depends on it
//	 iconSizeVariant="icon-normal" --> pass as className and able the component to be responsive
//	 bgBars="bg-secondary" --> color for time that icon is bars
//	 bgCross="bg-danger" --> color for time that icon is cross
//	 isMenuOpen={isMenuOpen} --> state that passes as prom from parent so menu could be open and close with icon accordingly
// 	setIsMenuOpen={setIsMenuOpen} --> setState to change the state, passed as prop from parent
// />
