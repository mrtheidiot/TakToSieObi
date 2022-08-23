import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
  const { backgroundColor, textColor, address, text, internal } = props.button;

  const style = {
    backgroundColor: `#${backgroundColor}`,
    color: `#${textColor}`,
  };

  return internal === "1" ? (
    <div className="button__main">
      <Link to={address}>
        <div className="button__sub" style={style}>
          {text}
        </div>
      </Link>
    </div>
  ) : (
    <div className="button__main">
      <a href={address} target="_blank" rel="noreferrer noopener">
        <div className="button__sub" style={style}>
          {text}
        </div>
      </a>
    </div>
  );
};

export default Button;
