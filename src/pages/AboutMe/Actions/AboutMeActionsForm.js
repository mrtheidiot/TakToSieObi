import React, { useState } from "react";
import UploadBar from "../../../components/UploadBar/UploadBar";
import classes from "./AboutMeActions.module.css";

const AboutMeActionsForm = (props) => {
  const [values, setValues] = useState(props.initialValues);
  const [sectionGallery, setSectionGallery] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleImageInputChange = (name, url) => {
    setValues({
      ...values,
      [name]: url,
    });
  };

  const removeImageFromGalleryHandler = (image) => {
    setSectionGallery((prev) => prev.filter((item) => item !== image));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const updatedObject = {
      title: values.title,
      parts: [
        values.part1,
        values.part2,
        values.part3,
        values.part4,
        values.part5,
        values.part6,
        values.part7,
        values.part8,
        values.part9,
        values.part10,
      ],
      sideImage: values.sideImage,
      sectionGallery: sectionGallery,
    };

    props.updateSection(updatedObject);
  };

  return (
    <div>
      <form className={classes["add-content-form"]} onSubmit={submitHandler}>
        <h1>Dodawanie nowej sekcji:</h1>
        <label htmlFor="title">Tytuł:</label>
        <textarea
          type="text"
          id="title"
          value={values.title}
          onChange={handleInputChange}
          name="title"
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
      <UploadBar
        presetImage={values.sideImage}
        name="sideImage"
        returnLink={handleImageInputChange}
      />
      <UploadBar
        name="gallery"
        returnLink={(name, url) => {
          setSectionGallery((prev) => [...prev, url]);
        }}
      />
      <div className={classes.galleryWrapper}>
        {sectionGallery.map((image, index) => (
          <div key={index} className={classes.galleryImage}>
            <img src={image} />
            <button
              onClick={() => {
                removeImageFromGalleryHandler(image);
              }}
            >
              Usun
            </button>
          </div>
        ))}
      </div>
      <button onClick={submitHandler}>ZAAKCEPTUJ</button>
    </div>
  );
};

export default AboutMeActionsForm;
