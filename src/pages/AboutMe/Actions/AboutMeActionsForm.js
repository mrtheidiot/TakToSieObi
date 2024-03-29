import React, { useState } from "react";
import UploadBar from "../../../components/UploadBar/UploadBar";
import ThumbnailGallery from "../../../components/Gallery/ThumbnailGallery";

import classes from "./../../Actions.module.css";

// ActionsForm handles the input of new or edited content. 
// Prefills the component if it's to be edited and handles the images/buttons upload and delete

const AboutMeActionsForm = (props) => {
  const [values, setValues] = useState(props.initialValues.baseContent);
  const [sectionGallery, setSectionGallery] = useState(
    props.initialValues.sectionGallery
  );

  const heading = props.edit ? "Edytuj sekcję:" : "Dodaj sekcję:";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleImageInputChange = (url, name) => {
    setValues({
      ...values,
      [name]: url,
    });
  };

  // add url to sectionGallery
  const addImageToSectionGalleryHandler = (url) => {
    setSectionGallery((prev) => [...prev, url]);
  };

  //remove url from sectionGallery (triggered in ThumbnailGallery)
  const removeImgageFromSectionGalleryHandler = (event) => {
    setSectionGallery((prev) => prev.filter((img) => img !== event.target.src));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const section = {
      title: values.title,
      parts: [
        { text: values.part1 },
        { text: values.part2 },
        { text: values.part3 },
        { text: values.part4 },
        { text: values.part5 },
        { text: values.part6 },
        { text: values.part7 },
        { text: values.part8 },
        { text: values.part9 },
        { text: values.part10 },
      ],
      sideImage: values.sideImage,
      sectionGallery: sectionGallery,
    };

    props.dispatchAction(section);
  };


  return (
    <>
      <form className={classes["add-content-form"]}>
        <h1>{heading}</h1>
        <p>
          Tytuł wyświetla się na środku strony, na górze sekcji. Części
          wyświetlają się po stronie lewej na środku, każdą z nich można: <br />
          1. Przenieść do nowej linii umieszczając w tekście '/nl/', <br />
          2. Pogrubić tekst umieszczając słowo w '/b/', np. /b/
          <b>Jestem Gruby</b>/b/, <br />
          3. Dodać link (jeden) umiesczając słowo w '/l/' oraz dodając na końcu
          '/addresses/' oraz zaraz link, np: /l/link/l/ do Fejsa
          /addresses/https://www.facebook.pl <br />
          Obok wyświetla się zdjęcie, dobrze jest dodać zdjęcie pionowe, żeby
          ładnie wyglądało. Galeria wyświetla się na dole. na pełnej długości.
          
        </p>
        <label htmlFor="title">Tytuł:</label>
        <textarea
          type="text"
          id="title"
          value={values.title}
          onChange={handleInputChange}
          name="title"
          data-testid="aboutMeActions-title"
        />
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
          type="text"
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
        <label htmlFor="part4">Część 4:</label>
        <textarea
          type="text"
          id="part4"
          value={values.part4}
          onChange={handleInputChange}
          name="part4"
        />
        <label htmlFor="part5">Część 5:</label>
        <textarea
          type="text"
          id="part5"
          value={values.part5}
          onChange={handleInputChange}
          name="part5"
        />
        <label htmlFor="part6">Część 6:</label>
        <textarea
          type="text"
          id="part6"
          value={values.part6}
          onChange={handleInputChange}
          name="part6"
        />
        <label htmlFor="part7">Część 7:</label>
        <textarea
          type="text"
          id="part7"
          value={values.part7}
          onChange={handleInputChange}
          name="part7"
        />
        <label htmlFor="part8">Część 8:</label>
        <textarea
          type="text"
          id="part8"
          value={values.part8}
          onChange={handleInputChange}
          name="part8"
        />
      </form>
      <label>
        Dodaj zdjęcie z boku (ponowne dodanie usunie poprzednie i doda nowe)
      </label>
      <UploadBar
        presetImage={values.sideImage}
        returnLink={(url) => handleImageInputChange(url, "sideImage")}
      />
      <ThumbnailGallery source={[values.sideImage]} />
      <label>
        Dodaj zdjęcia do galerii (można dodać kolejne a kliknięcie w zdjęcie
        spowoduje jego usunięcie)
      </label>
      <UploadBar returnLink={addImageToSectionGalleryHandler} />
      <ThumbnailGallery
        onDelete={removeImgageFromSectionGalleryHandler}
        source={sectionGallery}
      />
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

export default AboutMeActionsForm;
