import React, { useState } from "react";
import EditOverlay from "./EditOverlay";

import classes from "./EditSection.module.css";

const EditSection = (props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [showEditOverlay, setShowEditOverlay] = useState(false);

  const mouseOverHandler = () => {
    setIsHovering(true);
  };
  const mouseOutHandler = () => {
    setIsHovering(false);
  };

  const toggleEditOverlay = () => {
    setShowEditOverlay((prevState) => !prevState);
  };

  const hoverClasses = isHovering
    ? `${classes["edit-section"]} ${classes.hover}`
    : `${classes["edit-section"]}`;

  return (
    <>
      <div
        className={hoverClasses}
        onMouseOver={mouseOverHandler}
        onMouseOut={mouseOutHandler}
      >
        {isHovering && (
          <button
            className={classes["edit-button"]}
            onClick={toggleEditOverlay}
          >
            Edit this section
          </button>
        )}
      </div>
      {showEditOverlay && (
        <EditOverlay
          path={props.path}
          id={props.id}
          onClose={toggleEditOverlay}
        />
      )}
    </>
  );
};

export default EditSection;
