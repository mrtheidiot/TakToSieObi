import React, { useRef, useState } from "react";
import EditOverlay from "../../../components/Edit/EditOverlay";
import { useDispatch, useSelector } from "react-redux";
import { sendContent } from "../../../store/fetch-actions";
import { homePageActions } from "../../../store/homePage-slice";

const Add_HomeSection = (props) => {
  const dispatch = useDispatch();
  const newSectionButtons = useSelector(
    (state) => state.home.newSectionButtons
  );

  const titleInputRef = useRef();
  const contentInputRef = useRef();
  const buttonTitleRef = useRef();
  const buttonAddressRef = useRef();

  const addButtonHandler = (event) => {
    event.preventDefault();
    const newButton = {
      title: buttonTitleRef.current.value,
      address: buttonAddressRef.current.value,
    };

    dispatch(homePageActions.addButtonElement(newButton));

    buttonTitleRef.current.value = "";
    buttonAddressRef.current.value = "";
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newSectionElement = {
      title: titleInputRef.current.value,
      content: contentInputRef.current.value,
      buttons: newSectionButtons
    }

    dispatch(sendContent(newSectionElement))
  };

  return (
    <EditOverlay onClose={props.onClose}>
      <form onSubmit={submitHandler}>
        <label>Title</label>
        <input type="text" ref={titleInputRef} />
        <label>Content</label>
        <input type="text" ref={contentInputRef} />
        <button type="submit">Make changes</button>
      </form>
      <div>
        {newSectionButtons.map(button => (
          <div>{button && button.title}</div>
        ))}
      </div>
      <form onSubmit={addButtonHandler}>
        <label>Button Title</label>
        <input type="text" ref={buttonTitleRef} />
        <label>Button Address</label>
        <input type="text" ref={buttonAddressRef} />
        <button>Add Button</button>
      </form>
    </EditOverlay>
  );
};

export default Add_HomeSection;
