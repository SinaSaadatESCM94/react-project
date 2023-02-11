import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { getDataToArray } from "../../utils";
import Authentication from "../authentication/authentication";
import { Input, Button } from "../../component";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

function Login(props) {
  const [loading, isLoading] = useState(false);
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
  const navigate = useNavigate();
  // form function
  const doSubmit = () => {
    isLoading(true);
    let users;
    if (!getDataToArray("users")) users = [];
    else users = getDataToArray("users");
    let isAllowed = false;
    let message = "Oops, there is no registered account with this email!";
    users.map((user) => {
      switch (email.value === user.email) {
        case true:
          if (password.value === user.password) {
            isAllowed = true;
            message = "you're loged in successfully.";
          } else {
            message = "wrong password";
            setPassword({ ...password, hasError: true });
          }
          break;

        default:
          break;
      }
    });
    setTimeout(() => {
      isLoading(false);
      alert(message);
      if (isAllowed) navigate("board");
    }, 1000);
  };
  return (
    <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
      <main className="col-11 col-sm-9 d-flex justify-content-center align-items-stretch bg-white rounded shadow my-5">
        <section className="col-12 col-md-6 d-flex flex-column p-5 bg-white rounded rounded-md-start">
          <header className="w-100 d-flex flex-column">
            <h2 className="text-muted fw-bold">Login</h2>
          </header>
          <form>
            {/* email */}
            <fieldset className="d-flex flex-column align-items-center justify-content-center mt-4">
              <Input
                tabIndex="1"
                label={"email"}
                labelFontSize="h4"
                fontSize="h4 m-0"
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
            <fieldset className="d-flex flex-column align-items-center justify-content-center mt-4">
              <Input
                tabIndex="2"
                label={"password"}
                labelFontSize="h4"
                fontSize="h4 m-0"
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
            <fieldset className="d-flex flex-column align-items-center justify-content-center mt-4">
              <Button
                tabIndex="3"
                fontSize="h4"
                type="button"
                id="signup-submit-button"
                value="button"
                loading={loading}
                disabled={email.hasError || password.hasError || loading}
                form="form"
                backgroundColor="btn-purple"
                borderRadius="rounded-2"
                showLoadingOnClick={true}
                onClick={() => {
                  doSubmit();
                }}
                label="login"
              />
            </fieldset>
            <fieldset className="w-100 d-flex flex-column flex-md-row align-items-center justify-content-center mt-4 h4">
              <span className="me-2 text-muted">Don't have an account?</span>
              <Link to="signup" className="text-purple">
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
