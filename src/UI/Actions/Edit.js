import { useState } from "react";
import Overlay from "./Overlay";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import classes from "./Edit.module.css";

const Edit = (props) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const dispatch = useDispatch();
  const [isHovering, setIsHovering] = useState(false);
  // const isOverlayVisible = useSelector((state) => state.ui.isOverlayVisible);

  const onMouseOverHandler = () => {
    setIsHovering(true);
  };

  const onMouseOutHandler = () => {
    setIsHovering(false);
  };

  const toggleOverlayHandler = () => {
    setIsOverlayVisible((prev) => !prev);
  };

  const hoverClasses = isHovering
    ? `${classes["edit-section"]} ${classes.hover}`
    : `${classes["edit-section"]}`;

  return (
    <>
      <div
        className={hoverClasses}
        // onMouseOver={onMouseOverHandler}
        // onMouseOut={onMouseOutHandler}
      >
        <button
          className={classes["edit-button"]}
          onClick={toggleOverlayHandler}
        >
          Edit
        </button>
      </div>
      {isOverlayVisible && (
        <Overlay onClose={toggleOverlayHandler}>{props.children}</Overlay>
      )}
    </>
  );
};

export default Edit;
