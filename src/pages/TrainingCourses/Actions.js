import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendContent, updateContent } from "../../store/fetch-actions";
import UploadBar from "../../components/UploadBar/UploadBar";

import classes from "./Actions.module.css";
import { coursesActions } from "../../store/trainingCourses-slice";

const Add = (props) => {
  const dispatch = useDispatch();
  const [sectionImage, setSectionImage] = useState();
  const [images, setImages] = useState([]);

  const titleInputRef = useRef();
  const description1InputRef = useRef();
  const description2InputRef = useRef();
  const description3InputRef = useRef();
  const linkInputRef = useRef();
  const organizatorInputRef = useRef();
  const priceInputRef = useRef();
  const list1InputRef = useRef();
  const list2InputRef = useRef();
  const list3InputRef = useRef();
  const list4InputRef = useRef();
  const list5InputRef = useRef();
  const list6InputRef = useRef();

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
    const splitedList1 = list1InputRef.current.value.split("/,");

    const newOrUpdatedSectionElement = {
      id: props.id,
      title: titleInputRef.current.value,
      desription_1: description1InputRef.current.value,
      desription_2: description2InputRef.current.value,
      desription_3: description3InputRef.current.value,
      link: linkInputRef.current.value,
      organizator: organizatorInputRef.current.value,
      price: priceInputRef.current.value,
      list1: splitedList1,
      sectionImage: sectionImage,
      galleryImages: images,
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
      dispatch(
        sendContent(
          "https://taktosieobi-94781-default-rtdb.europe-west1.firebasedatabase.app/trainingCourses.json",
          newOrUpdatedSectionElement,
          "courses"
        )
      );
    }
  };

  const newSectionImage = (imageLink) => {
    setSectionImage(imageLink);
  };

  const addToImagesList = (imageLink) => {
    setImages((prevList) => [...prevList, imageLink]);
  };

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
      <div className={classes["add-content-form"]}>
        <h3>Dodaj zdjęcie do sekcji:</h3>
        <UploadBar returnURL={newSectionImage} />
      </div>
      <form className={classes["add-content-form"]}>
        <h2>Strona podtreningu:</h2>
        <label>Lista 1</label>
        <textarea type="text" ref={list1InputRef} />
        <label>Lista 2</label>
        <textarea type="text" ref={list2InputRef} />
        <label>Lista 3</label>
        <textarea type="text" ref={list3InputRef} />
        <label>Lista 4</label>
        <textarea type="text" ref={list4InputRef} />
        <label>Lista 5</label>
        <textarea type="text" ref={list5InputRef} />
        <label>Lista 6</label>
        <textarea type="text" ref={list6InputRef} />
        <label>Lista 6</label>
        <textarea type="text" ref={list6InputRef} />
        <h2>Zdjecia do galerii:</h2>
      </form>
      <UploadBar returnURL={addToImagesList} />
      <div className={classes["add-content-form"]}>
        <div className={classes.images_wrapper}>
          {images.map((image) => (
            <img src={image} />
          ))}
        </div>
      </div>
      <button onClick={submitHandler}>ZAAKCEPTUJ</button>
    </>
  );
};

export default Add;
