import React, { useRef, useEffect } from "react";
import useHTTP from "../../../hooks/useHTTP";
import { getHomePageSection } from "./../../../store/API/api-functions";
import LoadingSpinner from "../../../UI/LoadingSpinner";
const Edit_HomeSection = (props) => {
  const contentInputRef = useRef();
  const {
    sendRequest,
    status,
    error,
    data: loadedSection,
  } = useHTTP(getHomePageSection, true);

  useEffect(() => {
    sendRequest(props.id);
  }, [sendRequest]);

  let content;

  if (status === "loading") {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  // if (error) {
  //   content = <p>{error}</p>;
  // }

  if (status === "completed") {
    content = (
      <>
        <div>
          <label>Content</label>
          <textarea
            ref={contentInputRef}
            type="text"
            rows="10"
            cols="50"
            defaultValue={loadedSection.content}
          />
        </div>
        <div>
          <label>Button 1</label>
          <input type="text" />
        </div>
        <div>
          <label>Button 2 () </label>
          <input type="text" />
        </div>
        <div>
          <label>Button 3 ()</label>
          <input type="text" />
        </div>
      </>
    );
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredContent = contentInputRef.current.value;
    console.log(enteredContent);
    // const enteredContent = content;
    // const eButton1 = button1;
    // const eButton2 = button2;
    // const eButton3 = button3;

    // const changedData = {
    //   id: props.id,
    //   title: element.title,
    //   content: enteredContent,
    //   button_1: eButton1,
    //   button_2: eButton2,
    //   button_3: eButton3,
    // };
  };

  return (
    <form onSubmit={submitHandler}>
      {content}
      <button type="submit">Make changes</button>
    </form>
  );
};

export default Edit_HomeSection;
