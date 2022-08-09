import React, { useState, useEffect } from "react";
import classes from "./Test.module.css";
import { useDispatch } from "react-redux";
import { coursesActions } from "../../store/trainingCourses-slice";

import UploadBar from "../UploadBar/UploadBar";

import useUpload from "../../Temp/hooks/useUpload";

const Test = () => {
  const { handleChange, handleUpload, percent, fileLink, status } = useUpload();
  const dispatch = useDispatch();
  dispatch(coursesActions.addElement({ id: 1 }));

  const handleChangeHandler = (event) => {
    handleChange(event);
  };

  const handleUploadHandler = () => {
    handleUpload();
  };
  return (
    <div className={classes.uploadbar}>
      <UploadBar />
    </div>
  );
};

export default Test;
