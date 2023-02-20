import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { isValid } from "../../utils/validation/validationFunction";
const emailRegExPattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
function CypressLogin(props) {
  const [usersList, setUsersList] = useState([]);
  const [email, setEmail] = useState({
    value: "",
    hasError: true,
    touched: false,
  });
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(`${props.url}`).then((res) => {
        return res.json();
      });
      setUsersList(response.data);
    } catch (error) {
      document.getElementById(`text`).innerHTML = `${error}`;
      document.getElementById(`text`).classList.add("text-secondary");
    }
  };
  const handleClick = () => {
    const email = document.getElementById(`${props.id1}`);
    const password = document.getElementById(`${props.id2}`);
    const text = document.getElementById(`text`);
    if (
      !!usersList.length &&
      usersList.some((user) => user.email === email.value)
    ) {
      switch (
        password.value ===
        usersList.find((user) => user.email === email.value).first_name
      ) {
        case true:
          text.innerHTML = `login successfully`;
          text.classList.add("text-success");
          break;

        default:
          text.innerHTML = `wrong password`;
          text.classList.add("text-danger");
          break;
      }
    } else if (!!usersList.length) {
      text.innerHTML = "Invalid email";
      text.classList.add("text-primary");
    }
  };
  const handleChange = (e) => {
    let hasError = isValid(emailRegExPattern, e.target.value);
    setEmail((curentEmail) => {
      return {
        ...curentEmail,
        value: e.target.value,
        hasError,
      };
    });
  };
  const handleBlur = () => {
    setEmail((curentValue) => {
      return {
        ...curentValue,
        touched: true,
      };
    });
  };
  return (
    <div className="d-flex flex-column px-3">
      <input
        id={props.id1}
        name="email"
        type="email"
        value={email.value}
        className={`mt-5 border ${
          email.touched && email.hasError && "border-success"
        } ${email.touched && !email.hasError && "border-danger"}`}
        onChange={(e) => handleChange(e)}
        onBlur={handleBlur}
      />
      <input
        id={props.id2}
        name="password"
        type="password"
        value={props.value2}
        onChange={props.onChange}
        className="mt-5"
      />
      <button
        id={props.id3}
        name="submit"
        type="submit"
        className="d-flex align-items-center justify-content-center mt-5"
        onClick={handleClick}
      >
        Submit
      </button>
      <p
        id="text"
        className="w-100 mt-5 h1 d-flex align-items-center justify-content-center"
      ></p>
    </div>
  );
}

CypressLogin.propTypes = {};

export default CypressLogin;
