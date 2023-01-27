import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { getDataToArray, setDataObject, asyncLocalStorage } from "../../utils";

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
  // form function
  const doSubmit = () => {
    let tempData = {};
    let formError = false;
    if (!firstName.hasError) tempData.firstName = firstName.value;
    else formError = true;
    if (!lastName.hasError) tempData.lastName = lastName.value;
    else formError = true;
    if (!email.hasError) tempData.email = email.value;
    else formError = true;
    if (!password.hasError && password.value === repeatPassword.value)
      tempData.password = password.value;
    else formError = true;
    //
    let message;
    if (!formError) {
      let users = [];
      if (!getDataToArray("users")) {
        users.push(tempData);
        setDataObject("users", users);
        message = "you are signed up successfully";
      } else {
        let isUnique = true;
        users = getDataToArray("users");
        users.map((eachUser) => {
          switch (eachUser.email === tempData.email) {
            case true:
              message = "an other account exists with this email address";
              isUnique = false;
              break;
            default:
              message = "you are signe up successfully";
          }
        });
        if (isUnique) {
          users.push(tempData);
          setDataObject("users", users);
        }
      }
    } else {
      message = "please fill all required fields properly";
    }
    alert(message);
  };
  return (
    <div className="w-100 d-flex align-items-center justify-content-center py-2">
      <main className="col-11 col-sm-9 d-flex justify-content-center align-items-stretch bg-white rounded shadow my-5">
        <section className="col-12 col-md-6 d-flex flex-column py-5 px-2 px-sm-5 px-md-3 px-xl-5 bg-white rounded rounded-md-start">
          <header className="w-100 d-flex flex-column">
            <h5 className="text-muted fw-bold">Signup Now</h5>
          </header>
          <form>
            {/* firstname & lastname field */}
            <fieldset className="d-flex flex-column flex-lg-row align-items-center justify-content-between mt-3">
              {/* firstname */}
              <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center pe-0 pe-lg-1">
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
              <div className="col-12 col-lg-6 mt-3 mt-lg-0 d-flex flex-column align-items-center justify-content-center ps-0 ps-lg-1">
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
                label="sign up"
              />
            </fieldset>
            {/* <fieldset className="w-100 d-flex flex-column flex-md-row align-items-center justify-content-center mt-2">
              <span className="me-2 text-muted">Have an account already?</span>
              <Link replace to={""} className="text-purple">
                login
              </Link>
            </fieldset> */}
          </form>
        </section>
        <section className="col-md-6 d-none d-md-flex align-items-center justify-content-center">
          <Authentication />
        </section>
      </main>
    </div>
  );
}

SignUp.propTypes = {};

export default SignUp;
