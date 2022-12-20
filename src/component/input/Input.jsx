import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
// import { FormattedMessage } from "react-intl";

function Input ({
	containerClass,
	label,
	labelFontSize,
	labelColor,
	background,
	border,
	borderRadius,
	icon,
	inputIconColor,
	fontSize,
	inputColor,
	placeholder,
	type,
	id,
	name,
	required,
	tabIndex,
	autoComplete,
	disabled,
	value,
	setValue,
	regEx,
	onChange,
	onBlur,
}){
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
	const changeHandler = (e) => {
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
	const blurHandler = (e) => {
		// when user focus on input once, the input is touched and the value will be set to true
		setValue((curentValue) => {
			return { ...curentValue, touched: true };
		});
	};
	// to change password icon and show/hide password
	const [ passIcon, setPassIcon ] = useState(faEyeSlash);
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
			<label
				htmlFor="name"
				className={`w-100 h-auto d-flex flex-column justify-content-between align-items-start gap-2 ${containerClass}`}
			>
				<span
					className={`px-3 m-0 text-capitalize ${labelFontSize ? labelFontSize : "h3"}`}
					style={{ color: `${labelColor}` }}
				>
					{label}
				</span>
				<div
					className={`w-100 d-flex align-items-center justify-conetnt-between rounded-4 h4 m-0 border 
					${value.hasError && value.touched ? "border-danger" : ""}
					${!value.hasError && value.touched ? "border-success" : ""}	
					`}
					style={{ backgroundColor: "#adb5bd" }}
				>
					<FontAwesomeIcon icon={icon} className="p-3 text-primary" />
					{/* {icon} */}
					<input
						type={type}
						name={name}
						id={id}
						className="bg-transparent w-100 border-0"
						required={true}
						// tabIndex={tabIndex}
						// autoComplete={autoComplete}
						placeholder={placeholder}
						// disabled={disabled}
						onChange={changeHandler}
						onBlur={blurHandler}
					/>
					{type === "password" &&
					value.value && (
						<FontAwesomeIcon
							icon={passIcon}
							className="p-3 text-dark"
							style={{ cursor: "pointer" }}
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

Input.propTypes = {};

export default Input;
