import React, { useState } from "react";
import { sendContent } from "./../../../store/fetch-actions";
import { homePageActions } from "../../../store/homePage-slice";
import { useSelector, useDispatch } from "react-redux";

const url = "http://127.0.0.1:8000/api/homepage";

const Edit_HomeSection = (props) => {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.home.homePageContent);
  const element = elements.find((element) => element.id === props.id);

  const [content, setContent] = useState(element.content);
  const [button1, setButton1] = useState(element.button_1);
  const [button2, setButton2] = useState(element.button_2);
  const [button3, setButton3] = useState(element.button_3);

  const contentHandler = (event) => {
    setContent(event.target.value);
  };
  const b1Handler = (event) => {
    setButton1(event.target.value);
  };
  const b2Handler = (event) => {
    setButton2(event.target.value);
  };
  const b3Handler = (event) => {
    setButton3(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredContent = content;
    const eButton1 = button1;
    const eButton2 = button2;
    const eButton3 = button3;

    const changedData = {
      id: props.id,
      title: element.title,
      content: enteredContent,
      button_1: eButton1,
      button_2: eButton2,
      button_3: eButton3,
    };

    console.log(url, changedData);
    dispatch(homePageActions.changeHomeElement(changedData));
    dispatch(sendContent(url, changedData));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Content</label>
        <textarea
          onChange={contentHandler}
          type="text"
          rows="10"
          cols="50"
          value={content}
        />
      </div>
      <div>
        <label>Button 1</label>
        <input onChange={b1Handler} type="text" value={button1} />
      </div>
      <div>
        <label>Button 2 () </label>
        <input onChange={b2Handler} type="text" />
      </div>
      <div>
        <label>Button 3 ()</label>
        <input onChange={b3Handler} type="text" />
      </div>
      <button type="submit">Make changes</button>
    </form>
  );
};

export default Edit_HomeSection;
