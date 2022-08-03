import React, { useState } from "react";
import ElementEdit from "./ElementEdit";
import classes from "./Test.module.css";

const TestItem = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const isLogged = window.localStorage.getItem("isLoggedIn");

  const showEditHandler = () => {
    setShowEdit((prevState) => !prevState);
  };

  const handleMouseOver = () => {
    setIsHovering(true)
  };
  const handleMouseOut = () => {
    setIsHovering(false)
  };

  return (
    <>
      {showEdit && (
        <ElementEdit
          title={props.title}
          description={props.description}
          id={props.id}
          onClose={showEditHandler}
        />
      )}
      <div
        className={classes.tutorial}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.id}</p>
        {isHovering && (
          <button onClick={showEditHandler} className={classes.hoverr}>
            Hover Me
          </button>
        )}
      </div>
    </>
  );
};

export default TestItem;
