import useInputReducer from "../../hooks/useInputReducer";
import Banner from "./../Banner/Banner";

import classes from "./Login.module.css";

const Login = () => {
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInputReducer((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInputReducer((value) => value.includes("@"));

  let formIsValid = false;
  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredPasswordIsValid) {
      passwordBlurHandler();
      return;
    }

    if (!enteredEmailIsValid) {
      emailBlurHandler();
      return;
    }

    if (formIsValid) {
      window.localStorage.setItem("isLoggedIn", true);
    }

    resetPasswordInput();
    resetEmailInput();
  };

  const passwordInputClasses = passwordInputHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : classes["form-control"];

  const emailInputClasses = emailInputHasError
    ? `${classes["form-control"]} ${classes.invalid}`
    : classes["form-control"];

  return (
    <>
      <Banner />
      <form onSubmit={formSubmissionHandler} className={classes.loginForm}>
        <div className={emailInputClasses}>
          <label htmlFor="e ail">Email:</label>
          <input
            type="text"
            id="email"
            onChange={emailChangeHandler}
            value={enteredEmail}
            onBlur={emailBlurHandler}
          />
          {emailInputHasError && (
            <p className={classes["error-text"]}>Email musi zawierać "@"!</p>
          )}
        </div>
        <div className={passwordInputClasses}>
          <label htmlFor="password">Hasło:</label>
          <input
            type="text"
            id="password"
            onChange={passwordChangeHandler}
            value={enteredPassword}
            onBlur={passwordBlurHandler}
          />
          {passwordInputHasError && (
            <p className={classes["error-text"]}>Hasło nie może być puste</p>
          )}
        </div>
        <div className={classes["form-actions"]}>
          <button disabled={!formIsValid}>Login</button>
        </div>
      </form>
    </>
  );
};

export default Login;
