import React, { useState } from "react";
import PropTypes from "prop-types";

// importing components
import { LoadingButton } from "../../component";
function Button({
	containerClass,
	fontSize,
	disableColor,
	inableColor,
	backgroundColor,
	border,
	borderRadius,
	paddingY,
	type,
	id,
	value,
	disabled,
	form,
	className,
	label,
	tabindex,
	showLoadingOnClick,
	onClick,
}) {
	// components states
	const [isClicked, setIsClicked] = useState(false);

	// functions
	// doSubmit is for action on button, there are two actions that are requiered to be done after a click:
	// 		1. update isClicked value to true
	// 		2. do required actions of onClicked passed as prop to component
	const doSubmit = () => {
		// by clicking the button the value true will be returned for isClicked
		setIsClicked(true);
		// onClick function is passed to component as props from parent
		onClick();
	};
	return (
		// container of the whole button element.
		// 		passed props to this element as class:
		// 			- fontSize
		// 			- containerClass
		<div
			className={`w-100 d-flex align-items-center ${fontSize} ${containerClass}`}>
			{/* main button element of course
						passed props to this element as class:
							- backgroundColor
							- border
							- borderRadius
							- paddingY
							- disabledColor
							- inableColor
							- className
					 */}
			<button
				type={type}
				id={id}
				value={value}
				tabIndex={tabindex}
				// there are two conditions that the button is supposed to be disabled:
				// 		1. when the user has set disabled to true
				// 		2. when the button is clicked, so the button won't respond to more clickes and with that it is possible to prevent to many request from api
				disabled={!disabled ? isClicked : true}
				form={form}
				className={`w-100 text-center text-capitalize m-0 d-flex align-items-center justify-content-center ${backgroundColor} ${border} ${borderRadius} ${paddingY}  ${
					disabled ? disableColor : inableColor
				} ${className}`}
				onClick={doSubmit}>
				{/* the following is label of the button, is the user wants to use LoadingButton after button is clicked can pass showLoadingOnClock prop as true (which is its defualt value), but in case of false value for this prop label will not change after click.  */}
				{showLoadingOnClick && isClicked ? <LoadingButton /> : label}
			</button>
		</div>
	);
}

Button.propTypes = {
	containerClass: PropTypes.string,
	fontSize: PropTypes.string,
	disableColor: PropTypes.string,
	inableColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	border: PropTypes.string,
	borderRadius: PropTypes.string,
	paddingY: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.string,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	form: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string,
	tabIndex: PropTypes.string,
	showLoadingOnClick: PropTypes.bool,
	onClick: PropTypes.func,
};
Button.defaultProps = {
	containerClass: "",
	fontSize: "h5",
	disableColor: "text-muted",
	inableColor: "text-white",
	backgroundColor: "bg-primary",
	border: "border-0",
	borderRadius: "rounded-4",
	paddingY: "py-2",
	type: PropTypes.oneOf[("button", "submit", "reset")],
	id: "form-button",
	value: "button",
	disabled: false,
	form: "",
	className: "",
	label: "submit",
	tabIndex: "",
	showLoadingOnClick: true,
	onClick: () => {},
};

export default Button;

// ******************************USAGE******************************
//	<Button
//		containerClass=""	--> class for main parent
//		fontSize="h5"	--> font size for label applied to container
//		disableColor="text-muted"	--> text color while button is disabled
//		inableColor="text-white"	--> text color when button is inabled
//		backgroundColor="bg-primary"	--> button background color
//		border="border-0"	--> button border
//		borderRadius="rounded-pill"	--> button border radius
//		paddingY="p-2"	--> button padding-y
//		type="button"	--> button type
//		id="form-button"	--> button id
//		value="button"	--> button value
//		disabled={false}	--> disabled true or false
//		form=""	--> form that this button belongs to
//		className=""	--> botton className
//		label="submit"	--> button label
// 		tabindex="1" --> button tabindex
//		showLoadingOnClick={true}	--> boolean value, whether using loading or not
//		onClick={() => {}} --> onClick function
//	/>;
