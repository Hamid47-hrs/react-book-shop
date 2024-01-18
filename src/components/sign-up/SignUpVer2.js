import React, { useState } from "react";
import { Link } from "react-router-dom";
import orderAPI from "../../orderAPI";
import Input from "../ui-element/input/Input";
import Button from "../ui-element/button/Button";
import "./SignUp.css";

const SignUp = () => {
  // !#######!   CHARS   !#######!
  const [formData, setFormaData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const standardChars = /[^a-zA-Z0-9 ]/g;
  const digitChars = /[ 0-9 ]/g;
  const onlyDigits = /^[0-9]+$/;

  const inputItems = [
    {
      id: "user-firstName",
      label: "First Name",
      type: "text",
      name: "firstName",
      placeholder: "Enter Your First Name ...",
      errorCheck: (value) => {
        if (value.match(standardChars)) {
          return setError("First Name cannot contain special characters.");
        } else if (value.match(digitChars)) {
          return setError("First Name cannot contain numbers.");
        } else {
          setError(null);
        }
        setFormaData({
          firstName: value,
          lastName: formData.lastName,
          username: formData.username,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        });
      },
    },
    {
      id: "user-lastName",
      label: "Last Name",
      type: "text",
      name: "lastName",
      placeholder: "Enter Your Last Name ...",
      errorCheck: (value) => {
        if (value.match(standardChars)) {
          return setError("Last Name cannot contain special characters.");
        } else if (value.match(digitChars)) {
          return setError("Last Name cannot contain numbers.");
        } else {
          setError(null);
        }
        setFormaData({
          firstName: formData.firstName,
          lastName: value,
          username: formData.username,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        });
      },
    },
    {
      id: "user-name",
      label: "User Name",
      type: "text",
      name: "username",
      placeholder: "Enter Your User Name ...",
      errorCheck: (value) => {
        value.match(standardChars)
          ? setError("Username cannot contain special characters.")
          : setError(null);
        setFormaData({
          firstName: formData.firstName,
          lastName: formData.lastName,
          username: value,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        });
      },
    },
    {
      id: "phoneNumber",
      label: "Phone Number",
      type: "text",
      name: "phoneNumber",
      placeholder: "Enter Your Phone Number ...",
      errorCheck: (value) => {
        if (value.length !== 11) {
          return setError("Phone Number must be exactly 11 characters.");
        } else if (!value.startsWith("09")) {
          return setError(
            "Phone Number must starts with ' 09 . . . . . . . . . ' ."
          );
        } else if (!value.match(onlyDigits)) {
          return setError("Phone Number must be only Digits.");
        } else {
          setError(null);
        }
        setFormaData({
          firstName: formData.firstName,
          lastName: formData.lastName,
          username: formData.username,
          email: formData.email,
          phone: value,
          password: formData.password,
        });
      },
    },
    {
      id: "emailAddress",
      label: "Email Address",
      type: "email",
      name: "email",
      placeholder: "Enter Your Email Address ...",
      errorCheck: (value) => {
        if (value.indexOf("@") === -1) {
          return setError("Email Address must have '@' sign.");
        } else if (!value.endsWith(".com")) {
          return setError("Email Address must ends with '.com'.");
        } else {
          setError(null);
        }
        setFormaData({
          firstName: formData.firstName,
          lastName: formData.lastName,
          username: formData.username,
          email: value,
          phone: formData.phone,
          password: formData.password,
        });
      },
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      name: "password",
      placeholder: "Enter Password ...",
      errorCheck: (value) => {
        setFormaData({
          firstName: formData.firstName,
          lastName: formData.lastName,
          username: formData.username,
          email: formData.email,
          phone: formData.phone,
          password: value,
        });
        value.length < 8
          ? setError("Password must be at least 8 characters.")
          : setError(null);
      },
    },
    {
      id: "confirm-password",
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      placeholder: "Enter Password again ...",
      errorCheck: (value) => {
        value !== formData.password
          ? setError("Password doesn't match.")
          : setError(null);
      },
    },
  ];

  const submitFormHandler = (event) => {
    event.preventDefault();
    const updatedFormData = { ...formData };

    orderAPI
      .post("/users.json", updatedFormData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="sign-up">
      <p>Create your account here.</p>
      <div>
        <p className="error-text">{error ? error : null}</p>
        {inputItems.map((item, index) => {
          return (
            <div key={index}>
              <Input
                id={item.id}
                label={item.label}
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                blur={(event) => item.errorCheck(event.target.value)}
              />
            </div>
          );
        })}
      </div>
      <Button type="success" click={(event) => submitFormHandler(event)}>
        Sign Up
      </Button>
      <p>
        If you have an account, Click <Link to="/sign-in">HERE.</Link>
      </p>
    </div>
  );
};

export default SignUp;
