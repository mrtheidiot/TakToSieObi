import React, { useState, useEffect } from "react";
import classes from "./Test.module.css";
import { useSelector } from "react-redux";

import storage from "../../firebaseConfig.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
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
