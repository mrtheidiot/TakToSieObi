import React, { useRef } from "react";
import classes from "./Test.module.css";

const NewTutorial = () => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const sendData = async (newTutorial) => {
    const response = await fetch("http://localhost:8000/api/tutorials", {
      method: "POST",
      body: JSON.stringify(newTutorial),
    });
    const data = await response.json();
    console.log(data);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newTutorial = {
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
    };
    sendData(newTutorial);
  };

  return (
    <div>
      Add New:
      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input type="text" ref={titleInputRef} />
        </div>
        <div>
          <label>Description</label>
          <input type="text" ref={descriptionInputRef} />
        </div>
        <button type="submit">Subbmit</button>
      </form>
    </div>
  );
};

export default NewTutorial;
