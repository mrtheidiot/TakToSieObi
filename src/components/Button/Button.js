import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {

  console.log(props)
  const classTitle = "button_link-1";

  return props.internal === true ? (
    <div className="button__main">
      <Link to={props.redirectTo}>
        <div className={`button__sub ${classTitle}`}>{props.title}</div>
      </Link>
    </div>
  ) : (
    <div className="button__main">
      <a href={props.redirectTo} target="_blank" rel="noreferrer noopener">
        <div className={`button__sub ${classTitle}`}>{props.title}</div>
      </a>
    </div>
  );
};

export default Button;
