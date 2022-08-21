import React, { useEffect, useRef, useState } from "react";
import Button from "../../../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateHomeSection } from "../../../store/FetchActions/put-actions";
import { addHomeSection } from "../../../store/FetchActions/post-actions";
import { removeSection } from "../../../store/FetchActions/delete-actions";

import classes from "./Actions.module.css";

const HomeActions = (props) => {
  const dispatch = useDispatch();
  const homePageContent = useSelector((state) => state.home.homePageContent);
  const [buttons, setButtons] = useState([]);

  let element;
  if (props.id) {
    element = homePageContent.find((item) => item.id === props.id);
  }

  useEffect(() => {
    if (element) {
      element.buttons.forEach((button) => {
        setButtons((prevList) => [...prevList, button]);
      });
    }
  }, []);

  const content1InputRef = useRef();
  const content2InputRef = useRef();
  const content3InputRef = useRef();

  const buttonTextRef = useRef();
  const buttonAddressRef = useRef();
  const buttonInternalRef = useRef();
  const buttonBackGroundColorRef = useRef();
  const buttonTextColorRef = useRef();

  const addButtonHandler = (event) => {
    event.preventDefault();
    const newButton = {
      text: buttonTextRef.current.value,
      address: buttonAddressRef.current.value,
      backgroundColor: buttonBackGroundColorRef.current.value,
      textColor: buttonTextColorRef.current.value,
      isInternal: buttonInternalRef.current.value,
    };

    setButtons((prevList) => [...prevList, newButton]);

    buttonTextRef.current.value = "";
    buttonAddressRef.current.value = "";
    buttonBackGroundColorRef.current.value = "";
    buttonTextColorRef.current.value = "";
    buttonInternalRef.current.value = "Tak";
  };

  const removeButtonHandler = (address) => {
    setButtons((prevList) =>
      prevList.filter(
        (item) =>
          item.address !==
          buttons.find((object) => object.address === address).address
      )
    );
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const section = {
      contentPart1: content1InputRef.current.value,
      contentPart2: content2InputRef.current.value,
      contentPart3: content3InputRef.current.value,
      buttons: buttons,
    };

    if (element) {
      dispatch(updateHomeSection(section, element.id));
    } else {
      dispatch(addHomeSection(section));
    }
  };

  return (
    <>
      <h1>Dodawanie nowej sekcji:</h1>
      <form className={classes["add-content-form"]}>
        <label htmlFor="homePart1">Część 1:</label>
        <textarea
          type="text"
          id="homePart1"
          ref={content1InputRef}
          defaultValue={element ? element.contentPart1 : ""}
        />
        <label htmlFor="homePart1">Część 2:</label>
        <textarea
          type="text"
          id="homePart2"
          ref={content2InputRef}
          defaultValue={element ? element.contentPart2 : ""}
        />
        <label htmlFor="homePart1">Część 3:</label>
        <textarea
          type="text"
          id="homePart3"
          ref={content3InputRef}
          defaultValue={element ? element.contentPart3 : ""}
        />
      </form>
      <div>
        {buttons.map((button) => (
          <div key={button.id}>
            <Button
              text={button.text}
              isInternal={button.isInternal}
              address={button.address}
              backgroundColor={button.backgroundColor}
              textColor={button.textColor}
            />
            <button
              onClick={() => {
                removeButtonHandler(button.address);
              }}
            >
              Usuń
            </button>
          </div>
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
        {element && (
          <button
            onClick={() => {
              dispatch(removeSection("home", element.id));
            }}
          >
            Usuń ta sekcje
          </button>
        )}
        <button onClick={submitHandler}>ZAAKCEPTUJ</button>
      </form>
    </>
  );
};

export default HomeActions;
