import React, { useState } from "react";

import storage from "../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import classes from "./UploadBar.module.css";

const UploadBar = (props) => {
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [fileLink, setFileLink] = useState(null);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setFileLink(url)
          props.returnURL(url);
        });
      }
    );
  };

  const handleRemove = (fileLink) => {
    console.log(fileLink);
  };

  const barClasses =
    percent !== 100
      ? `${classes.uploadBarInner}`
      : `${classes.uploadBarInner} ${classes.changeColor}`;

  return (
    <div className={classes.wrapper}>
      <img src={fileLink} />
      <input type="file" onChange={handleChange} className={classes.input} />
      <button className={classes.button} onClick={handleUpload}>
        Dodaj
      </button>
      {fileLink && (
        <button className={classes.button} onClick={handleRemove}>
          Usuń
        </button>
      )}
      <div className={classes.uploadBarOuter}>
        <div className={barClasses} style={{ width: `${percent}%` }}>
          ...
        </div>
      </div>
    </div>
  );
};

export default UploadBar;
