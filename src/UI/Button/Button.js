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
      <div className={classes.button}>
        <Link to={address} style={styles}>
          {text}
        </Link>
      </div>
    ) : (
      <div className={classes.button}>
        <a
          href={address}
          target="_blank"
          rel="noreferrer noopener"
          style={styles}
        >
          {text}
        </a>
      </div>
    );

  return <div className={classes.wrapper}>
    {finalButton}
  </div>
};

export default Button;
