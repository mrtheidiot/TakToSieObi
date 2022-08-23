import { useState } from "react";
import Overlay from "./Overlay";
import classes from "./AddOrEdit.module.css";

const AddOrEdit = (props) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const classesSelector =
    props.edit === true ? `${classes.edit_btn}` : `${classes.add_btn}`;
  const text = props.edit === true ? "Edytuj" : "Dodaj";

  const showOverlayHandler = () => {
    setIsOverlayVisible(true);
  };

  const hideOverlayHandler = () => {
    setIsOverlayVisible(false);
    document.body.style.position = "";
    document.body.style.top = "";
  };

  return (
    <div className={classesSelector}>
      <button className={classes.btn} onClick={showOverlayHandler}>
        {text}
      </button>
      {isOverlayVisible && (
        <Overlay onClose={hideOverlayHandler}>{props.children}</Overlay>
      )}
    </div>
  );
};

export default AddOrEdit;
