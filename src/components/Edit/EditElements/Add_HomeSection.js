import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { sendContent } from "../../../store/fetch-actions";

const url = "http://127.0.0.1:8000/api/homepage";

const Add_HomeSection = (props) => {
  const dispatch = useDispatch();

  const contentInputRef = useRef();
  const titleRef = useRef();
  const btn1Ref = useRef();
  const btn2Ref = useRef();
  const btn3Ref = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredContent = contentInputRef.current.value;
    const eButton1 = btn1Ref.current.value;
    const eButton2 = btn2Ref.current.value;
    const eButton3 = btn3Ref.current.value;
    const title = titleRef.current.value;

    const newSection = {
      title: title,
      content: enteredContent,
    };
    dispatch(sendContent(newSection));
  };

  return (
    <form onSubmit={submitHandler}>
      <>
      <div>
          <label>title 1</label>
          <input type="text" ref={titleRef} />
        </div>
        <div>
          <label>Content</label>
          <textarea ref={contentInputRef} type="text" rows="10" cols="50" />
        </div>
        <div>
          <label>Button 1</label>
          <input type="text" ref={btn1Ref} />
        </div>
        <div>
          <label>Button 2 () </label>
          <input type="text" ref={btn2Ref} />
        </div>
        <div>
          <label>Button 3 ()</label>
          <input type="text" ref={btn3Ref} />
        </div>
      </>
      <button type="submit">Make changes</button>
    </form>
  );
};

export default Add_HomeSection;
