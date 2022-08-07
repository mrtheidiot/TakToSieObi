import React, { useEffect, useRef } from "react";
import EditOverlay from "../../../components/Edit/EditOverlay";
import LoadingSpinner from "../../../UI/LoadingSpinner";
import Button from "../../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { sendContent } from "../../../store/fetch-actions";
import { homePageActions } from "../../../store/homePage-slice";

import classes from "./HomeActions.module.css";
import { uiActions } from "../../../store/ui-slice";

const Add = (props) => {
  const dispatch = useDispatch();
  const newSectionButtons = useSelector(
    (state) => state.home.newSectionButtons
  );
  // const {status, error} = useSelector(state => state.ui.requestState)

  const content1InputRef = useRef();
  const content2InputRef = useRef();
  const content3InputRef = useRef();

  const buttonTextRef = useRef();
  const buttonAddressRef = useRef();
  const buttonInternalRef = useRef();
  const buttonBackGroundColorRef = useRef();
  const buttonTextColorRef = useRef();

  let requestStatus = <div />


  const addButtonHandler = (event) => {
    event.preventDefault();
    const newButton = {
      text: buttonTextRef.current.value,
      address: buttonAddressRef.current.value,
      backgroundColor: buttonBackGroundColorRef.current.value,
      textColor: buttonTextColorRef.current.value,
      isInternal: buttonInternalRef.current.value,
    };

    dispatch(homePageActions.addButtonElement(newButton));

    buttonTextRef.current.value = "";
    buttonAddressRef.current.value = "";
    buttonBackGroundColorRef.current.value = "";
    buttonTextColorRef.current.value = "";
    buttonInternalRef.current.value = "Tak";
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newSectionElement = {
      contentPart1: content1InputRef.current.value,
      contentPart2: content2InputRef.current.value,
      contentPart3: content3InputRef.current.value,
      buttons: newSectionButtons,
    };

    dispatch(sendContent(newSectionElement));
  };

  return (
    <EditOverlay
      onClose={props.onClose}
      className={classes.overlay}
      accept={submitHandler}
    >
      {/* {requestStatus} */}
      <h1>Dodawanie nowej sekcji:</h1>
      <form className={classes["add-content-form"]}>
        <label htmlFor="homePart1">Część 1:</label>
        <textarea type="text" id="homePart1" ref={content1InputRef} />
        <label htmlFor="homePart1">Część 2:</label>
        <textarea type="text" id="homePart2" ref={content2InputRef} />
        <label htmlFor="homePart1">Część 3:</label>
        <textarea type="text" id="homePart3" ref={content3InputRef} />
      </form>
      <div>
        {newSectionButtons.map((button) => (
          <Button
            key={button.id}
            text={button.text}
            isInternal={button.isInternal}
            address={button.address}
            backgroundColor={button.backgroundColor}
            textColor={button.textColor}
          />
        ))}
      </div>
      <form onSubmit={addButtonHandler} className={classes["add-button-form"]}>
        <input type="text" placeholder="tekst" ref={buttonTextRef} />
        <input
          type="text"
          placeholder="strona docelowa"
          ref={buttonAddressRef}
        />
        <input
          type="text"
          placeholder="kolor tła"
          ref={buttonBackGroundColorRef}
        />
        <input
          type="text"
          placeholder="kolor tekstu"
          ref={buttonTextColorRef}
        />
        <select name="internal" ref={buttonInternalRef}>
          <option value="1">Tak</option>
          <option value="0">Nie</option>
        </select>
        <button>DODAJ NOWY PRZYCISK</button>
      </form>
    </EditOverlay>
  );
};

export default Add;
