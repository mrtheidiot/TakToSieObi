import React, { useRef } from "react";
import classes from "./Test.module.css";

const PatchTutorial = () => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const idInputRef = useRef();

  const patchData = async (patchedTutorial) => {
    const response = await fetch(
      `http://localhost:8000/api/tutorials/${patchedTutorial.id}/`,
      {
        method: "PUT",
        body: JSON.stringify({
          title: patchedTutorial.title,
          description: patchedTutorial.description,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const patchedTutorial = {
      title: titleInputRef.current.value,
      description: descriptionInputRef.current.value,
      id: idInputRef.current.value,
    };
    patchData(patchedTutorial);
  };

  return (
    <div>
      Change
      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input type="text" ref={titleInputRef} />
        </div>
        <div>
          <label>Description</label>
          <input type="text" ref={descriptionInputRef} />
        </div>
        <div>
          <label>ID</label>
          <input type="text" ref={idInputRef} />
        </div>
        <button type="submit">Subbmit</button>
      </form>
    </div>
  );
};

export default PatchTutorial;
