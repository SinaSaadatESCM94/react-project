export const fieldInputRegEx = {
	firstName: /^[a-zA-Zا-ی ]*$/,
	lastName: /^[a-zA-Zا-ی ]*$/,
	fullName: /^[a-zA-Zا-ی ]*$/,
	email: /^[a-zA-Z0-9_.-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
	userName: /^[a-zA-Z0-9_./]+.{3,}$/,
	password: /^(?=.*\d)(?=.*[!@#$%^&*/])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
	confirmPassword: /^(?=.*\d)(?=.*[!@#$%^&*/])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
};
