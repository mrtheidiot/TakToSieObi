import { useState } from "react";
import Overlay from "./Overlay";
import classes from './AddOrEdit.module.css'

const AddOrEdit = (props) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const classesSelector = props.edit === true ? `${classes.editButton}` : `${classes.addButton}`
  const text = props.edit === true ? "Edytuj" : "Dodaj"

  const toggleOverlayHandler = () => {
    setIsOverlayVisible((prev) => !prev);
  };

  return (
    <div className={classesSelector}>
      <button onClick={toggleOverlayHandler}>{text}</button>
      {isOverlayVisible && (
        <Overlay onClose={toggleOverlayHandler}>{props.children}</Overlay>
      )}
    </div>
  );
};

export default AddOrEdit;
