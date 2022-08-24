import React from "react";
import { Link } from "react-router-dom";

import classes from "./Button.module.css";

const Button = (props) => {
  const { backgroundColor, textColor, address, text, internal } = props.button;
  console.log(props);

  const styles = {
    backgroundColor: `#${backgroundColor}`,
    color: `#${textColor}`,
  };

  const finalButton =
    internal === "1" ? (
      <Link to={address} style={styles}>
        <div className={classes.button}>{text}</div>
      </Link>
    ) : (
      <a
        href={address}
        target="_blank"
        rel="noreferrer noopener"
        style={styles}
      >
        <div className={classes.button}>{text}</div>
      </a>
    );

  return <div className={classes.wrapper}>{finalButton}</div>;
};

export default Button;
