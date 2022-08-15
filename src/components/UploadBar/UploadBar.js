import React, { useState } from "react";
import palceholder from "./../../assets/placeholder.png";
import storage from "../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import classes from "./UploadBar.module.css";

const UploadBar = (props) => {
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);
  const [fileLink, setFileLink] = useState(props.presetImage);



  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);
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
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setFileLink(url);
          props.returnLink(url);
        });
      }
    );
  };

  return (
    <div className={classes.wrapper}>
      <section className={classes.image_container}>
        <img src={fileLink ? fileLink : palceholder} alt="uploaded image" />
      </section>
      <section className={classes.inputs_container}>
        <div className={classes.inputs}>
          <h3>Wybierz zdjęcie:</h3>
          <input
            type="file"
            onChange={handleChange}
            className={classes.input}
          />
          <button onClick={handleUpload}>Dodaj</button>
        </div>
        <div className={classes.loadingBar_container}>
          <div className={classes.loadingBar} style={{ width: `${percent}%` }}>
            .
          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadBar;

// <img src={fileLink} />
// <input type="file" onChange={handleChange} className={classes.input} />
// <button className={classes.button} onClick={handleUpload}>
//   Dodaj
// </button>
// {fileLink && (
//   <button className={classes.button} onClick={handleRemove}>
//     Usuń
//   </button>
// )}
// <div className={classes.uploadBarOuter}>
//   <div className={barClasses} style={{ width: `${percent}%` }}>
//     ...
//   </div>
// </div>
