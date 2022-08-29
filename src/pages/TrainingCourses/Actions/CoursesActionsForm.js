import { useState } from "react";
import UploadBar from "../../../components/UploadBar/UploadBar";
import ThumbnailGallery from "../../../components/Gallery/ThumbnailGallery";

import classes from "./../../Actions.module.css";

const CoursesActionsForm = (props) => {
  const [values, setValues] = useState(props.initialValues.baseContent);
  const [sectionGallery, setSectionGallery] = useState(
    props.initialValues.sectionGallery
  );
  var slugify = require("slugify");

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
      description1: values.description1,
      description2: values.description2,
      description3: values.description3,
      link: slugify(values.title),
      organizer: values.organizer,
      price: values.price,
      sectionImage: values.sectionImage,
      bannerImage: values.bannerImage,
      sectionGallery: sectionGallery,
      subsite: [
        { title: "Title1", content: values.list1 },
        { title: values.list2Title, content: values.list2 },
        { title: values.list3Title, content: values.list3 },
        { title: values.list4Title, content: values.list4 },
        { title: "Title5", content: values.list5 },
        { title: values.list6Title, content: values.list6 },
        { title: values.list7Title, content: values.list7 },
        { title: values.list8Title, content: values.list8 },
        { title: values.list9Title, content: values.list9 },
        { title: "TItle10", content: values.list10 },
      ],
    };

    props.dispatchAction(section);
  };

  const heading = props.edit ? "Edytuj sekcję:" : "Dodaj sekcję:";

  return (
    <>
      <form className={classes["add-content-form"]}>
        <h1>{heading}</h1>
        <label htmlFor="title">Tytuł:</label>
        <textarea
          type="text"
          id="title"
          value={values.title}
          onChange={handleInputChange}
          name="title"
        />
        <label htmlFor="descPart1">Opis, część 1:</label>
        <textarea
          type="text"
          id="descPart1"
          onChange={handleInputChange}
          value={values.description1}
          name="description1"
        />
        <label htmlFor="descPart2">Opis, część 2:</label>
        <textarea
          type="text"
          id="descPart2"
          onChange={handleInputChange}
          value={values.description2}
          name="description2"
        />
        <label htmlFor="descPart3">Opis, część 3:</label>
        <textarea
          type="text"
          id="descPart3"
          onChange={handleInputChange}
          value={values.description3}
          name="description3"
        />
        {/* <label htmlFor="link">Link do trenignu, co ma byc po slash</label>
        <input
          type="text"
          id="link"
          value={values.link}
          name="link"
          onChange={handleInputChange}
        /> */}
        <label htmlFor="organizator">Organizator</label>
        <input
          type="text"
          id="organizator"
          value={values.organizer}
          name="organizer"
          onChange={handleInputChange}
        />
        <label htmlFor="price">Koszt</label>
        <input
          type="text"
          id="price"
          value={values.price}
          name="price"
          onChange={handleInputChange}
        />
      </form>
      <h3>
        Dodaj zdjęcie, które będzie się wyświetlało przy treningu, na liście
        "/treningi":
      </h3>
      <UploadBar
        presetImage={values.sectionImage}
        returnLink={(url) => handleImageInputChange(url, "sectionImage")}
      />
      <ThumbnailGallery source={[values.sectionImage]} />
      <h2>Podstrona treningu:</h2>
      <h3>Dodaj baner, który będzie się wyświetlał na górze podstrony:</h3>
      <UploadBar
        presetImage={values.bannerImage}
        returnLink={(url) => handleImageInputChange(url, "bannerImage")}
      />
      <ThumbnailGallery source={[values.bannerImage]} />
      <form className={classes["add-content-form"]}>
        <label htmlFor="title">Lista 1 (wyśrodkowana na początku strony)</label>
        <textarea
          type="text"
          id="list"
          onChange={handleInputChange}
          value={values.list1}
          name="list1"
        />
        <label htmlFor="title">Lista 2 </label>
        <input
          type="text"
          id="list"
          placeholder="Tytuł listy 2:"
          onChange={handleInputChange}
          value={values.list2Title}
          name="list2Title"
        />
        <textarea
          type="text"
          id="list2"
          onChange={handleInputChange}
          value={values.list2}
          name="list2"
        />
        <label htmlFor="title">Lista 3</label>
        <input
          type="text"
          id="list"
          placeholder="Tytuł listy 3:"
          onChange={handleInputChange}
          value={values.list3Title}
          name="list3Title"
        />
        <textarea
          type="text"
          id="list3"
          onChange={handleInputChange}
          value={values.list3}
          name="list3"
        />
        <label htmlFor="title">Lista 4</label>
        <input
          type="text"
          id="list"
          placeholder="Tytuł listy 4:"
          onChange={handleInputChange}
          value={values.list4Title}
          name="list4Title"
        />
        <textarea
          type="text"
          id="list4"
          onChange={handleInputChange}
          value={values.list4}
          name="list4"
        />
        <label htmlFor="title">
          Lista 5 (wyśrodkowana, pomiędzy listami 1-4 a 6-9)
        </label>
        <textarea
          type="text"
          id="list"
          onChange={handleInputChange}
          value={values.list5}
          name="list5"
        />
        <label htmlFor="title">Lista 6</label>
        <input
          type="text"
          id="list"
          placeholder="Tytuł listy 6:"
          onChange={handleInputChange}
          value={values.list6Title}
          name="list6Title"
        />
        <textarea
          type="text"
          id="list"
          onChange={handleInputChange}
          value={values.list6}
          name="list6"
        />
        <label htmlFor="title">Lista 7</label>
        <input
          type="text"
          id="list"
          placeholder="Tytuł listy 7:"
          onChange={handleInputChange}
          value={values.list7Title}
          name="list7Title"
        />
        <textarea
          type="text"
          id="list"
          onChange={handleInputChange}
          value={values.list7}
          name="list7"
        />
        <label htmlFor="title">Lista 8</label>
        <input
          type="text"
          id="list"
          placeholder="Tytuł listy 8:"
          onChange={handleInputChange}
          value={values.list8Title}
          name="list8Title"
        />
        <textarea
          type="text"
          id="list"
          onChange={handleInputChange}
          value={values.list8}
          name="list8"
        />
        <label htmlFor="title">Lista 9</label>
        <input
          type="text"
          id="list"
          placeholder="Tytuł listy 9:"
          onChange={handleInputChange}
          value={values.list9Title}
          name="list9Title"
        />
        <textarea
          type="text"
          id="list"
          onChange={handleInputChange}
          value={values.list9}
          name="list9"
        />
        <label htmlFor="title">Lista 10 (wyśrodkowana, na końcu strony)</label>
        <textarea
          type="text"
          id="list"
          onChange={handleInputChange}
          value={values.list10}
          name="list10"
        />
      </form>
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

export default CoursesActionsForm;
