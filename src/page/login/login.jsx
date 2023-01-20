import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Authentication from "../authentication/authentication";
import { Input, Button } from "../../component";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

function Login(props) {
	const dataArray = ["email", "password"];
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
	const [formError, setFormError] = useState({});
	const [formData, setFormData] = useState({});
	// form function
	const doSubmit = () => {};
	return (
		<div className="w-100 d-flex align-items-center justify-content-center py-2">
			<main className="col-11 col-sm-9 d-flex justify-content-center align-items-stretch bg-white rounded shadow my-5">
				<section className="col-12 col-md-6 d-flex flex-column py-5 px-2 px-sm-5 px-md-3 px-xl-5 bg-white rounded rounded-md-start">
					<header className="w-100 d-flex flex-column">
						<h5 className="text-muted fw-bold">Login</h5>
					</header>
					<form>
						{/* email */}
						<fieldset className="d-flex flex-column align-items-center justify-content-center mt-3">
							<Input
								tabIndex="1"
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
								tabIndex="2"
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
						{/* button */}
						<fieldset className="d-flex flex-column align-items-center justify-content-center mt-3">
							<Button
								tabIndex="3"
								fontSize="h6"
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
								label="login"
							/>
						</fieldset>
						<fieldset className="w-100 d-flex flex-column flex-md-row align-items-center justify-content-center mt-2">
							<span className="me-2 text-muted">Don't have an account?</span>
							{/* <span className="text-purple">Sign up</span> */}
							<Link
								to="signup"
								className="text-purple">
								Sign up
							</Link>
						</fieldset>
					</form>
				</section>
				<section className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
					<Authentication />
				</section>
			</main>
		</div>
	);
}

Login.propTypes = {};

export default Login;
