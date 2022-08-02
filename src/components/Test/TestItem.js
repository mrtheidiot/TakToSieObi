import React, { useState } from "react";
import ElementEdit from "./ElementEdit";
import classes from "./Test.module.css";

const TestItem = (props) => {
  const [showEdit, setShowEdit] = useState(false);
  const showEditHandler = () => {
    setShowEdit((prevState) => !prevState);
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
      <div className={classes.tutorial}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.id}</p>
        <button onClick={showEditHandler}>Change</button>
      </div>
    </>
  );
};

export default TestItem;
