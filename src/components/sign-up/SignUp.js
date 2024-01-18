import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import orderAPI from "../../orderAPI";
import Input from "../ui-element/input/Input";
import Button from "../ui-element/button/Button";
import "./SignUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // !#######!   ERRORS   !#######!
  const [error, setError] = useState(null);
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [usernameError, setUsernameError] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  // !#######!   CHARS   !#######!
  const standardChars = /[^a-zA-Z0-9 ]/g;
  const digitChars = /[ 0-9 ]/g;
  const onlyDigits = /^[0-9]+$/;

  useEffect(() => {
    // ! FirstNameErrorHandler
    const firstNameErrorHandler = () => {
      if (firstName.match(standardChars)) {
        return "First Name cannot contain special characters.";
      }

      if (firstName.match(digitChars)) {
        return "First Name cannot contain numbers.";
      }
    };

    firstNameErrorHandler
      ? setFirstNameError(firstNameErrorHandler)
      : setFirstNameError(null);

    // ! LastNameErrorHandler
    const lastNameErrorHandler = () => {
      if (lastName.match(standardChars)) {
        return "Last Name cannot contain special characters.";
      }

      if (lastName.match(digitChars)) {
        return "Last Name cannot contain numbers.";
      }
    };

    lastNameErrorHandler
      ? setLastNameError(lastNameErrorHandler)
      : setLastNameError(null);

    // ! UserameErrorHandler
    const usernameErrorHandler = () => {
      if (username.match(standardChars)) {
        return "Username cannot contain special characters.";
      }
    };

    usernameErrorHandler
      ? setUsernameError(usernameErrorHandler)
      : setUsernameError(null);

    // ! PhoneNumberErrorHandler
    const phoneNumberErrorHandler = () => {
      if (phoneNumber && phoneNumber.length !== 11) {
        return "Phone Number must be exactly 11 characters.";
      }

      if (phoneNumber && !phoneNumber.startsWith("09")) {
        return "Phone Numbers should start with ' 09 . . . . . . . . . ' .";
      }

      if (phoneNumber && !phoneNumber.match(onlyDigits)) {
        return "Phone Number must be only Digits.";
      }
    };

    phoneNumberErrorHandler
      ? setPhoneNumberError(phoneNumberErrorHandler)
      : setPhoneNumberError(null);

    // ! EmailErrorHandler
    const emailErrorHandler = () => {
      if (email && email.indexOf("@") === -1) {
        return "Email Address must have '@' sign.";
      }

      if (email && !email.endsWith(".com")) {
        return "Email Address must ends with '.com'.";
      }
    };

    emailErrorHandler ? setEmailError(emailErrorHandler) : setEmailError(null);

    // ! PasswordErrorHandler
    const passwordErrorHandler = () => {
      if (password && password.length < 8) {
        return "Password must be at least 8 characters.";
      }
    };

    passwordErrorHandler
      ? setPasswordError(passwordErrorHandler)
      : setPasswordError(null);

    // ! ConfirmPasswordErrorHandler
    const confirmPasswordErrorHandler = () => {
      if (password && confirmPassword && password != confirmPassword) {
        return "Password doesn't match.";
      }
    };

    confirmPasswordErrorHandler
      ? setConfirmPasswordError(confirmPasswordErrorHandler)
      : setConfirmPasswordError(null);
  }, [
    firstName,
    lastName,
    username,
    phoneNumber,
    email,
    password,
    confirmPassword,
  ]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (firstName && lastName && username && phoneNumber && password) {
      const updatedFormData = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        phone: phoneNumber,
        password: password,
      };

      orderAPI
        .post("/users.json", updatedFormData)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      setError("All inputs must be filled.");
    }
  };

  return (
    <div className="sign-up">
      <p>Create your account here.</p>
      <p className="error-text">{error ? error : null}</p>
      <Input
        id="user-firstName"
        label="First Name"
        type="text"
        name="firstName"
        placeholder="Enter Your First Name ..."
        blur={(event) => setFirstName(event.target.value)}
      />
      <p className="error-text">{firstNameError ? firstNameError : null}</p>
      <Input
        id="user-lastName"
        label="Last Name"
        type="text"
        name="lastName"
        placeholder="Enter Your Last Name ..."
        blur={(event) => setLastName(event.target.value)}
      />
      <p className="error-text">{lastNameError ? lastNameError : null}</p>
      <Input
        id="user-name"
        label="User Name"
        type="text"
        name="username"
        placeholder="Enter Your User Name ..."
        blur={(event) => setUsername(event.target.value)}
      />
      <p className="error-text">{usernameError ? usernameError : null}</p>
      <Input
        id="phoneNumber"
        label="Phone Number"
        type="text"
        name="phoneNumber"
        placeholder="Enter Your Phone Number ..."
        blur={(event) => setPhoneNumber(event.target.value)}
      />
      <p className="error-text">{phoneNumberError ? phoneNumberError : null}</p>
      <Input
        id="emailAddress"
        label="Email Address"
        type="email"
        name="email"
        placeholder="Enter Your Email Address ..."
        blur={(event) => setEmail(event.target.value)}
      />
      <p className="error-text">{emailError ? emailError : null}</p>
      <Input
        id="password"
        label="Password"
        type="password"
        name="password"
        placeholder="Enter Password ..."
        blur={(event) => setPassword(event.target.value)}
      />
      <p className="error-text">{passwordError ? passwordError : null}</p>
      <Input
        id="confirm-password"
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="Enter Password again ..."
        blur={(event) => setConfirmPassword(event.target.value)}
      />
      <p className="error-text">
        {confirmPasswordError ? confirmPasswordError : null}
      </p>
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
