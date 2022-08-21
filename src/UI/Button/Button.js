import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  const style={
    backgroundColor: `#${props.backgroundColor}`,
    color: `#${props.textColor}`
  }

  return props.isInternal === "1" ? (
    <div className="button__main">
      <Link to={props.address}>
        <div className="button__sub" style={style}>
          {props.text}
        </div>
      </Link>
    </div>
  ) : (
    <div className="button__main">
      <a href={props.address} target="_blank" rel="noreferrer noopener">
        <div className="button__sub" style={style}>
          {props.text}
        </div>
      </a>
    </div>
  );
};

export default Button;
