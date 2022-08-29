import { useState } from "react";
import storage from "../../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import classes from "./UploadBar.module.css";

// This component renders an upload bar, then sends the data to backend server (firebase)
// Component takes text (optional) and function on props, sends the image and trigger the return function with the url returned from a server.

const UploadBar = (props) => {
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  const text = props.text ? props.text : "Dodano pomyślnie!";
  const bar_text = percent === 100 ? { display: "block" } : { display: "none" }; // styles for text inside the upload bar

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Proszę najpierw wybrać plik!");
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
          {
            props.returnLink && props.returnLink(url);
          }
        });
      }
    );
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.inputs}>
        <p>Wybierz zdjęcie:</p>
        <input type="file" onChange={handleChange} className={classes.input} />
        <button onClick={handleUpload}>Dodaj</button>
      </div>
      <div className={classes.bar_container}>
        <div className={classes.bar} style={{ width: `${percent}%` }}>
          <span style={bar_text}>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default UploadBar;
