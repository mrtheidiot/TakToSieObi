import { upload } from "@testing-library/user-event/dist/upload";
import React from "react";
import useUpload from "../../hooks/useUpload";
import classes from "./UploadBar.module.css";

const UploadBar = (props) => {
  const {
    handleChange,
    handleUpload,
    removeSelected,
    percent,
    fileLink,
    status,
  } = useUpload();

  const handleChangeHandler = (event) => {
    handleChange(event);
  };

  const handleUploadHandler = () => {
    handleUpload();
  };

  const removeSelectedHandler = () => {
    removeSelected();
  };

  const barClasses =
    status !== "completed"
      ? `${classes.uploadBarInner}`
      : `${classes.uploadBarInner} ${classes.changeColor}`;

  return (
    <div className={classes.wrapper}>
      <input
        type="file"
        onChange={handleChangeHandler}
        className={classes.input}
      />
      <button className={classes.button} onClick={handleUploadHandler}>
        Dodaj
      </button>
      <button className={classes.button} onClick={removeSelectedHandler}>
        Usuń
      </button>
      <div className={classes.uploadBarOuter}>
        <div className={barClasses} style={{ width: `${percent}%` }}>
          ...
        </div>
      </div>
    </div>
  );
};

export default UploadBar;
