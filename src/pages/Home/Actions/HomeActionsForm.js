import { useState } from "react";
import classes from "./../../Actions.module.css";

const initialButton = {
  text: "",
  address: "",
  backgroundColor: "",
  textColor: "",
};

const HomeActionsForm = (props) => {
  const [values, setValues] = useState(props.initialValues.baseContent);
  const [buttons, setButtons] = useState(props.initialValues.buttons);
  const [button, setButton] = useState(initialButton);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleAddButton = (e) => {
    const { name, value } = e.target;
    setButton({
      ...button,
      [name]: value,
    });
  };

  const addButtonHandler = (event) => {
    event.preventDefault();

    const internal = button.address.substring(0, 4) === "http" ? "0" : "1";

    const newButton = {
      text: button.text,
      address: button.address,
      backgroundColor: button.backgroundColor,
      textColor: button.textColor,
      internal: internal,
    };
    setButtons((prev) => [...prev, newButton]);
    setButton(initialButton);
  };

  const removeButton = (address) => {
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
      part1: values.part1,
      part2: values.part2,
      part3: values.part3,
      buttons: buttons,
    };

    props.dispatchAction(section);
  };

  const heading = props.edit ? "Edytuj sekcję:" : "Dodaj sekcję:";

  return (
    <>
      <form className={classes["add-content-form"]}>
        <h1>{heading}</h1>
        <label htmlFor="part1">Część 1:</label>
        <textarea
          type="text"
          id="part1"
          value={values.part1}
          onChange={handleInputChange}
          name="part1"
        />
        <label htmlFor="part2">Część 2:</label>
        <textarea
          type="part2"
          id="part2"
          value={values.part2}
          onChange={handleInputChange}
          name="part2"
        />
        <label htmlFor="part3">Część 3:</label>
        <textarea
          type="text"
          id="part3"
          value={values.part3}
          onChange={handleInputChange}
          name="part3"
        />
        <div className={classes.add_button}>
          <input
            type="text"
            name="text"
            onChange={handleAddButton}
            value={button.text}
            placeholder="Tekst"
          />
          <input
            type="text"
            name="backgroundColor"
            onChange={handleAddButton}
            value={button.backgroundColor}
            placeholder="Kolor tła"
          />
          <input
            type="text"
            name="textColor"
            onChange={handleAddButton}
            value={button.textColor}
            placeholder="Kolor tekstu"
          />
          <input
            type="text"
            name="address"
            onChange={handleAddButton}
            value={button.address}
            placeholder="Strona docelowa"
          />
          <button onClick={addButtonHandler}>Dodaj</button>
        </div>
        <div className={classes.buttons_list}>
          Aktualne przyciski:
          {buttons.map((preview, index) => (
            <div
              key={index}
              onClick={() => removeButton(preview.address)}
              style={{
                color: `#${preview.textColor}`,
                backgroundColor: `#${preview.backgroundColor}`,
              }}
            >
              {preview.text}
            </div>
          ))}
        </div>
      </form>
      <div className={classes.bottom_buttons}>
        {props.edit && (
          <button
            onClick={props.removeSectionHandler}
            data-testid="delete-button"
          >
            Usuń tę sekcję
          </button>
        )}
        <button onClick={submitHandler}>ZAAKCEPTUJ</button>
      </div>
    </>
  );
};

export default HomeActionsForm;

// const removeButtonHandler = (address) => {
//     setButtons((prevList) =>
//       prevList.filter(
//         (item) =>
//           item.address !==
//           buttons.find((object) => object.address === address).address
//       )
//     );
//   };
