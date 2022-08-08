import { useReducer, useCallback } from "react";

import storage from "../firebaseConfig.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const initialState = {
  percent: 0,
  file: "",
  fileLink: "",
  error: null,
  status: "loading",
};

const uploadReducerFunction = (state, action) => {

  if (action.type === "SETFILE") {
    return {
      percent: 0,
      file: action.event,
      fileLink: "",
      error: null,
      status: "loading",
    };
  }
  if (action.type === "SENDING") {
    return {
      percent: action.percent,
      file: "",
      fileLink: "",
      error: null,
      status: "loading",
    };
  }
  if (action.type === "ERROR") {
    return {
      percent: state.percent,
      file: "",
      fileLink: "",
      error: action.error,
      status: "completed",
    };
  }
  if (action.type === "COMPLETED") {
    return {
      percent: state.percent,
      file: "",
      fileLink: action.url,
      error: null,
      status: "completed",
    };
  }
  if (action.type === "REMOVE") {
    return {
      percent: state.percent,
      file: "",
      fileLink:'',
      error: null,
      status: "completed",
    };
  }

  return state;
};

const useUpload = () => {
  const [uploadState, uploadReducer] = useReducer(
    uploadReducerFunction,
    initialState
  );

  function handleChange(event) {
    uploadReducer({
      type: "SETFILE",
      event: event.target.files[0],
    });
  }

  const removeSelected = () => {
    uploadReducer({
        type: "REMOVE"
    })
  }

  const handleUpload = useCallback(() => {
    const file = uploadState.file;
    if (!file) {
      alert("Please choose a file first!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        uploadReducer({
          type: "SENDING",
          percent: percent,
        });
      },
      (err) =>
        uploadReducer({
          type: "ERROR",
          error: err.message,
        }),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          uploadReducer({
            type: "COMPLETED",
            url: url,
          });
        });
      }
    );
  });
  return {
    handleChange,
    handleUpload,
    removeSelected,
    ...uploadState,
  };
};

export default useUpload;
