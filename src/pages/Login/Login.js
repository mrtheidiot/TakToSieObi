import React, { useRef } from "react";
import classes from './Login.module.css'

const Login = () => {
  const loginInputRef = useRef();
  const passwordInputRef = useRef();

  const loginHandler = (event) => {
    event.preventDefault();
    let formIsValid = false;
    const enteredLogin = loginInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (enteredLogin.trim().length > 0 && enteredPassword.trim().length > 0) {
        formIsValid = true;
    }
    console.log(formIsValid)
    if (formIsValid) {
        window.localStorage.setItem("isLoggedIn", true)
    }
  }

  return (
    <form onSubmit={loginHandler} className={classes.loginForm}>
      <div>
        <label>Login</label>
        <input type='text' ref={loginInputRef} />
      </div>
      <div>
        <label>Password</label>
        <input type='text' ref={passwordInputRef} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
