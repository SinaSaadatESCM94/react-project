import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
// import { FormattedMessage } from "react-intl";

function Input({
	containerClass = "",
	label,
	lableMargin = "mb-2",
	labelFontSize = "h5 m-0",
	labelColor = "text-muted",
	background = "bg-default-input",
	border = "border border-secondary",
	borderRadius = "rounded-4",
	paddingY = "py-2",
	icon,
	inputIconColor = "text-primary",
	iconPaddingX = "px-3",
	fontSize = "h6",
	inputColor = "text-muted",
	placeholder,
	type = "text",
	id,
	name,
	required = true,
	tabIndex = "",
	autoComplete = "false",
	disabled = false,
	value,
	setValue,
	regEx = "",
	onChange,
	onBlur,
	...rest
}) {
	// defualt regEx for validation in case none is imported
	const fieldInputRegEx = {
		firstName: /^[a-zA-Zا-ی ]*$/,
		lastName: /^[a-zA-Zا-ی ]*$/,
		fullName: /^[a-zA-Zا-ی ]*$/,
		email: /^[a-zA-Z0-9_.-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
		userName: /^[a-zA-Z0-9_./]+.{3,}$/,
		password: /^(?=.*\d)(?=.*[!@#$%^&*/])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
		confirmPassword: /^(?=.*\d)(?=.*[!@#$%^&*/])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
	};
	// functions:
	// onChange function
	const defaultChangeHandler = (e) => {
		// check if any regEx is passed as props for validation, if not defualt regEx will be used
		let regExPattern;
		if (regEx) {
			regExPattern = regEx;
		} else {
			regExPattern = fieldInputRegEx[name];
		}
		// check if value is valid according to specified regEx
		let hasError = false;
		if (!regExPattern.test(e.target.value)) {
			hasError = true;
		}
		// set value and hasError of value object based on previous results
		setValue((curentValue) => {
			return { ...curentValue, value: e.target.value, hasError };
		});
	};
	// onBlur function
	const defaultBlurHandler = (e) => {
		// when user focus on input once, the input is touched and the value will be set to true
		setValue((curentValue) => {
			return { ...curentValue, touched: true };
		});
	};
	// to change password icon and show/hide password
	const [passIcon, setPassIcon] = useState(faEyeSlash);
	const showHidePassword = () => {
		let inputElement = document.querySelector(`input#${id}`);
		switch (inputElement.type === "password") {
			case true:
				setPassIcon(faEye);
				inputElement.type = "text";
				break;
			default:
				setPassIcon(faEyeSlash);
				inputElement.type = "password";
				break;
		}
	};
	return (
		<div className="w-100">
			{/* container of the whole input element.
					passed props to this element as class:
						-containerClass
			*/}
			<label
				htmlFor={name}
				className={`w-100 h-auto d-flex flex-column justify-content-between align-items-start ${containerClass}`}>
				{/* following span contains lable of the inpput
						passed props to this element as class:
							-labelMargin
							-labelFontSize
							-labelColor
				*/}
				<span
					className={`text-capitalize ${lableMargin} ${labelFontSize} ${labelColor}`}>
					{label}
				</span>
				{/* following div contains icons and input
						passed props to this element as class:
							-fontSize
							-inputColor
							-background
						border color is going to be changed according to validity of the input when the input value is changed and also is foucued out for the first time
				*/}
				<div
					className={`w-100 d-flex align-items-center justify-conetnt-between ${fontSize} ${inputColor} ${background} ${border} ${borderRadius} ${paddingY}
					${value.hasError && value.touched ? "border-danger" : ""}
					${!value.hasError && value.touched ? "border-success" : ""}	
					m-0`}>
					{/* the following element is to create icon for input, if nothing is passed as icon nothing will be rendered on DOM
					passed props to this element as class:
						-inputIconColor
						-iconPaddingX
					*/}
					{icon && (
						<FontAwesomeIcon
							icon={icon}
							className={`${inputIconColor} ${iconPaddingX}`}
						/>
					)}
					{/* main input element of course
							passed props to this element as class:
								-iconPaddingX
								this class is passed only for the times that no icon is passed so with this padding design won't be broken
					*/}
					<input
						{...rest}
						type={type}
						name={name}
						id={id}
						className={`bg-transparent w-100 border-0 ${
							icon ? "ps-0" : iconPaddingX
						}`}
						required={required}
						tabIndex={tabIndex}
						autoComplete={autoComplete}
						placeholder={placeholder}
						disabled={disabled}
						value={value.value}
						onChange={(e) => {
							onChange(e);
							defaultChangeHandler(e);
						}}
						onBlur={onBlur ? onBlur : defaultBlurHandler}
					/>
					{/* the following element is shown only for password type input and this icon works as a button to show and hide input's value
					passed props to this element as class:
						-iconPaddingX
					*/}
					{type === "password" && value.value && (
						<FontAwesomeIcon
							icon={passIcon}
							className={`cursor-pointer text-dark ${iconPaddingX}`}
							onClick={() => {
								showHidePassword();
							}}
						/>
					)}
				</div>
			</label>
		</div>
	);
}

Input.propTypes = {
	containerClass: PropTypes.string,
	label: PropTypes.string,
	lableMargin: PropTypes.string,
	labelFontSize: PropTypes.string,
	labelColor: PropTypes.string,
	background: PropTypes.string,
	border: PropTypes.string,
	borderRadius: PropTypes.string,
	paddingY: PropTypes.string,
	icon: PropTypes.object,
	inputIconColor: PropTypes.string,
	iconPaddingX: PropTypes.string,
	fontSize: PropTypes.string,
	inputColor: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	required: PropTypes.bool,
	tabIndex: PropTypes.string,
	autoComplete: PropTypes.string,
	disabled: PropTypes.bool,
	value: PropTypes.object,
	setValue: PropTypes.func,
	regEx: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
};
Input.defaultProps = {
	containerClass: "",
	label: "",
	lableMargin: "mb-2",
	labelFontSize: "h5 m-0",
	labelColor: "text-muted",
	background: "bg-default-input",
	border: "border border-secondary",
	borderRadius: "rounded-4",
	paddingY: "py-2",
	icon: null,
	inputIconColor: "text-primary",
	iconPaddingX: "px-3",
	fontSize: "h6",
	inputColor: "text-muted",
	placeholder: "",
	type: "text",
	id: "",
	name: "",
	required: true,
	tabIndex: "",
	autoComplete: "false",
	disabled: false,
	value: {},
	setValue: null,
	regEx: "",
	onChange: null,
	onBlur: null,
};
export default Input;

// ******************************USAGE******************************
// <Input
// 	containerClass="" --> class for main parent
// 	label="email" --> text that is shown as lable
// 	lableMargin="mb-2" --> class for lable's margin bottom
// 	labelFontSize="h5 m-0" --> class for lable font size
// 	labelColor= "text-muted" --> class for lable color
// 	background="bg-default-input" --> class for input background color
// 	border= "border border-secondary" --> class for border and its color
// 	borderRadius= "rounded-4" --> class for border radius
// 	paddingY= "py-3" --> class for input paddingY
// 	icon= {faEnvelope} --> icon from fontawsome
// 	inputIconColor= "text-primary" --> class for icon color
// 	iconPaddingX= "px-3" --> class for icon's paddingX
// 	fontSize= "h6" --> class for input font size
// 	inputColor= "text-muted" --> class for input text color
// 	placeholder= "abc@gmail.com" --> placeholder text
// 	type= "email" --> input type
// 	id= "email" --> input id
// 	name= "email" --> input name
// 	required= {true} --> input requirty
// 	tabIndex= "" --> input tabIndex
// 	autoComplete= "false" --> input autoComplete
// 	disabled= {false} --> input disablity
// 	value= {email} --> object e.g {value:"",hasError:true,touched:false}
// 	setValue= {setEmail} --> useState function
// 	regEx="" --> required for input validation
// 	onChange= {null} --> onChange function
// 	onBlur= {null} --> onBlure function
// />
