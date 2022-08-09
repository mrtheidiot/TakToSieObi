import React, { useState, useEffect } from "react";
import classes from "./Test.module.css";

import UploadBar from "../UploadBar/UploadBar";

import useUpload from "../../hooks/useUpload";

const Test = () => {
  const { handleChange, handleUpload, percent, fileLink, status } = useUpload();

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
