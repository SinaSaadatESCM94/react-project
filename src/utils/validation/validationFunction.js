import { fieldInputRegEx } from "./regEx";
// function to set RegEx pattern
// whether to use defualt RegEx or user has passed one
export const setRegExPattern = (regEx, name) => {
	let regExPattern;
	if (regEx) {
		regExPattern = regEx;
	} else {
		regExPattern = fieldInputRegEx[name];
	}
	return regExPattern;
};
// function to check if the input value is valid
export const isValid = (regExPattern, value) => {
	let hasError = false;
	if (!regExPattern.test(value)) {
		hasError = true;
	}
	return hasError;
};
