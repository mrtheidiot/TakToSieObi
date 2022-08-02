import React, { useState } from "react";
import classes from "./Test.module.css";

const ElementEdit = (props) => {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

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

  const changeTtitleHandler = (event) => {
    setTitle(event.target.value)
  }
  const changeDescHandler = (event) => {
    setDescription(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const patchedTutorial = {
        id: props.id,
        title: title,
        description: description
    }

    patchData(patchedTutorial);
  };

  return (
    <form className={classes.overlay} onSubmit={submitHandler}>
      <label>Title</label>
      <input type="text" onChange={changeTtitleHandler} value={title} />
      <label>Description</label>
      <input type="text" onChange={changeDescHandler} value={description} />
      <button type="submit">Edytuj</button>
      <button onClick={props.onClose}>Close</button>
    </form>
  );
};

export default ElementEdit;

{
  /* <div className={classes.tutorial}>
<h2>{props.title}</h2>
<p>{props.description}</p>
<p>{props.id}</p>
<button onClick={showEditHandler}>Change</button>
</div> */
}
