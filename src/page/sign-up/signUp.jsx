import React, { useState } from "react";
import PropTypes from "prop-types";
import Authentication from "../authentication/authentication";
import { Input, Button } from "../../component";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

function SignUp(props) {
	const dataArray = ["firstName", "lastName", "email", "password"];
	const [firstName, setFirstName] = useState({
		value: "",
		hasError: true,
		touched: false,
	});
	const [lastName, setLastName] = useState({
		value: "",
		hasError: true,
		touched: false,
	});
	const [email, setEmail] = useState({
		value: "",
		hasError: true,
		touched: false,
	});
	const [password, setPassword] = useState({
		value: "",
		hasError: true,
		touched: false,
	});
	const [repeatPassword, setRepeatPassword] = useState({
		value: "",
		hasError: true,
		touched: false,
	});
	const [formError, setFormError] = useState({});
	const [formData, setFormData] = useState({});
	// form function
	const doSubmit = () => {};
	return (
		<div className="w-100 d-flex align-items-center justify-content-center py-2">
			<main className="col-8 d-flex justify-content-center align-items-stretch rounded shadow my-5">
				<section className="col-6 d-flex flex-column py-5 px-5 bg-white rounded-start">
					<header className="w-100 d-flex flex-column">
						<h5 className="text-muted fw-bold">Signup Now</h5>
					</header>
					<form>
						{/* firstname & lastname field */}
						<fieldset className="d-flex flex-row align-items-center justify-content-between mt-3">
							{/* firstname */}
							<div className="col-6 d-flex flex-column align-items-center justify-content-center pe-1">
								<Input
									tabIndex="1"
									label={"first name"}
									labelFontSize="h6"
									fontSize="h6 m-0"
									labelColor="text-muted"
									background="#fff"
									border="border border-secondary"
									borderRadius="rounded-2"
									icon={faUser}
									inputIconColor="text-purple"
									inputColor="text-muted"
									placeholder="John"
									type="text"
									id="firstName"
									name="firstName"
									value={firstName}
									setValue={setFirstName}
								/>
							</div>
							{/* lastname */}
							<div className="col-6 d-flex flex-column align-items-center justify-content-center ps-1">
								<Input
									tabIndex="2"
									label={"last name"}
									labelFontSize="h6"
									fontSize="h6 m-0"
									labelColor="text-muted"
									background="#fff"
									border="border border-secondary"
									borderRadius="rounded-2"
									icon={faUser}
									inputIconColor="text-purple"
									inputColor="text-muted"
									placeholder="Doe"
									type="text"
									id="lastName"
									name="lastName"
									value={lastName}
									setValue={setLastName}
								/>
							</div>
						</fieldset>
						{/* email */}
						<fieldset className="d-flex flex-column align-items-center justify-content-center mt-3">
							<Input
								tabIndex="3"
								label={"email"}
								labelFontSize="h6"
								fontSize="h6 m-0"
								labelColor="text-muted"
								background="#fff"
								border="border border-secondary"
								borderRadius="rounded-2"
								icon={faEnvelope}
								inputIconColor="text-purple"
								inputColor="text-muted"
								placeholder="abc@mail.com"
								type="email"
								id="email"
								name="email"
								value={email}
								setValue={setEmail}
							/>
						</fieldset>
						{/* password */}
						<fieldset className="d-flex flex-column align-items-center justify-content-center mt-3">
							<Input
								tabIndex="4"
								label={"password"}
								labelFontSize="h6"
								fontSize="h6 m-0"
								labelColor="text-muted"
								background="#fff"
								border="border border-secondary"
								borderRadius="rounded-2"
								icon={faKey}
								inputIconColor="text-purple"
								inputColor="text-muted"
								placeholder="******"
								type="password"
								id="password"
								name="password"
								value={password}
								setValue={setPassword}
							/>
						</fieldset>
						{/* confirm password */}
						<fieldset className="d-flex flex-column align-items-center justify-content-center mt-3">
							<Input
								tabIndex="5"
								label={"repeat password"}
								labelFontSize="h6"
								fontSize="h6 m-0"
								labelColor="text-muted"
								background="#fff"
								border="border border-secondary"
								borderRadius="rounded-2"
								icon={faKey}
								inputIconColor="text-purple"
								inputColor="text-muted"
								placeholder="******"
								type="password"
								id="repeatPassword"
								name="password"
								value={repeatPassword}
								setValue={setRepeatPassword}
							/>
						</fieldset>
						{/* button */}
						<fieldset className="d-flex flex-column align-items-center justify-content-center mt-3">
							<Button
								tabIndex="6"
								type="button"
								id="signup-submit-button"
								value="button"
								disabled={false}
								form="form"
								backgroundColor="bg-purple"
								borderRadius="rounded-2"
								showLoadingOnClick={true}
								onClick={() => {
									doSubmit();
								}}
								label="sign up"
							/>
						</fieldset>
					</form>
				</section>
				<section className="col-6 d-flex align-items-center justify-content-center">
					<Authentication />
				</section>
			</main>
		</div>
	);
}

SignUp.propTypes = {};

export default SignUp;
