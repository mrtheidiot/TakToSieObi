import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendContent, updateContent } from "../../store/fetch-actions";
import UploadBar from "../../components/UploadBar/UploadBar";

import classes from "./Actions.module.css";

const Add = (props) => {
  const dispatch = useDispatch();
  const [images, setImages] = useState([])

  const titleInputRef = useRef();
  const description1InputRef = useRef();
  const description2InputRef = useRef();
  const description3InputRef = useRef();
  const linkInputRef = useRef();
  const organizatorInputRef = useRef();
  const priceInputRef = useRef();

  //   {
  //     title: "TRENING INDYWIDUALNY",
  //     link: "trening-indywidualny",
  //     description: [
  //       "Zajęcia przeznaczone dla pojedynczego teamu przewodnik-pies niezależnie od poziomu zaawansowania.",
  //       "Miejsce spotkania wyznaczamy indywidualnie, ale generalnie spotykamy się w terenie.",
  //       "Program nie jest z góry ustalony - trenujemy to, co jest Wam w tym momencie potrzebne.",
  //     ],
  //     image: `${piesek}`,
  //     organizator: "Tak to się Obi",
  //     koszt: "1 spotkanie (ok. 50min.) – 70 zł",
  //     koszt2: "Pakiet 6 treningów – 380 zł",
  //   },
  let element = null;
  //   let element;
  //   if (props.id) {
  //     element = homePageContent.find((item) => item.id === props.id);
  //   }

  //   useEffect(() => {
  //     if (element) {
  //       element.buttons.forEach((button) => {
  //         setButtons((prevList) => [...prevList, button]);
  //       });
  //     }
  //   }, []);

  const submitHandler = (event) => {
    event.preventDefault();

    const newOrUpdatedSectionElement = {
      id: props.id,
      title: titleInputRef.current.value,
      desription_1: description1InputRef.current.value,
      desription_2: description2InputRef.current.value,
      desription_3: description3InputRef.current.value,
      link: linkInputRef.current.value,
      organizator: organizatorInputRef.current.value,
      price: priceInputRef.current.value,
    };

    if (element) {
      // edit dispatch
      dispatch(
        updateContent(
          "https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/homePage",
          element.id,
          newOrUpdatedSectionElement
        )
      );
    } else {
      const returnNewElementId = (id) => {};
      // add dispatch
      dispatch(
        sendContent(
          "https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/homePage.json",
          newOrUpdatedSectionElement,
          returnNewElementId
        )
      );
    }
  };

  //   const titleInputRef = useRef();
  //   const description1InputRef = useRef();
  //   const description2InputRef = useRef();
  //   const description3InputRef = useRef();
  //   const link = useRef();
  //   const organizator = useRef();
  //   const price = useRef();
  //   const price2 = useRef();

  const addToImagesList = (imageLink) => {
    setImages(prevList => [...prevList, imageLink])
  }

  console.log(images)

  return (
    <>
      <h1>Dodawanie nowej sekcji:</h1>
      <form className={classes["add-content-form"]}>
        <label htmlFor="title">Tytuł:</label>
        <textarea
          type="text"
          id="title"
          ref={titleInputRef}
          defaultValue={element ? element.contentPart1 : ""}
        />
        <label htmlFor="descPart1">Opis, część 1:</label>
        <textarea
          type="text"
          id="descPart1"
          ref={description1InputRef}
          defaultValue={element ? element.contentPart2 : ""}
        />
        <label htmlFor="descPart2">Opis, część 2:</label>
        <textarea
          type="text"
          id="descPart2"
          ref={description2InputRef}
          defaultValue={element ? element.contentPart3 : ""}
        />
        <label htmlFor="descPart3">Opis, część 3:</label>
        <textarea
          type="text"
          id="descPart3"
          ref={description3InputRef}
          defaultValue={element ? element.contentPart3 : ""}
        />
        <label htmlFor="link">Link do trenignu, co ma byc po slash</label>
        <input type="text" id="link" ref={linkInputRef} />
        <label htmlFor="organizator">Organizator</label>
        <input type="text" id="organizator" ref={organizatorInputRef} />
        <label htmlFor="price">Koszt</label>
        <input type="text" id="price" ref={priceInputRef} />
      </form>
      <UploadBar returnURL={addToImagesList}/>
      {/* <div className={classes.images_wrapper}>
        {images.map((image) => (
          <img src={image} alt="image" />
        ))}
      </div> */}
      <button onClick={submitHandler}>ZAAKCEPTUJ</button>
    </>
  );
};

export default Add;
