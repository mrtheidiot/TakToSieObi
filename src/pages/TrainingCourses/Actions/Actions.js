import React, { useState } from "react";
import UploadBar from "../../../components/UploadBar/UploadBar";
import { useDispatch, useSelector } from "react-redux";
import { coursesActions } from "../../../store/coursesList-slice";
import { addCoursesSection } from "../../../store/FetchActions/post-actions";
import { updateCourseSection } from "../../../store/FetchActions/put-actions";
import { removeSection } from "../../../store/FetchActions/delete-actions";

import classes from "./Actions.module.css";

const Actions = (props) => {
  const dispatch = useDispatch();
  const [sectionGallery, setSectionGallery] = useState([]);
  const courses = useSelector((state) => state.courses.coursesContent);

  let initialValues = {
    title: "",
    description1: "",
    description2: "",
    description3: "",
    link: "",
    organizer: "",
    price: "",
    sectionImage: "",
    bannerImage: "",
    list1: "",
    list2: "",
    list3: "",
    list4: "",
    list5: "",
    list6: "",
    list7: "",
    list8: "",
    list9: "",
    list10: "",
    list1Title: "",
    list2Title: "",
    list3Title: "",
    list4Title: "",
    list5Title: "",
    list6Title: "",
    list7Title: "",
    list8Title: "",
    list9Title: "",
    list10Title: "",
  };

  let course;

  if (props.id) {
    course = courses.find((item) => item.id === props.id);
    initialValues = {
      ...course,
      list1: course.subsite[0].content,
      list2: course.subsite[1].content,
      list3: course.list3,
      list4: course.list4,
      list5: course.list5,
      list6: course.list6,
      list7: course.list7,
      list8: course.list8,
      list9: course.list9,
      list10: course.list10,
      list2Title: course.title2,
      list3Title: course.title2,
      list4Title: course.title4,
      list6Title: course.title4,
      list7Title: course.title4,
      list8Title: course.title4,
      list9Title: course.title9,
    };
  }

  const [values, setValues] = useState(initialValues);

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

    const section = {
      title: values.title,
      description1: values.description1,
      description2: values.description2,
      description3: values.description3,
      link: `/treningi/${values.link}`,
      organizer: values.organizer,
      price: values.price,
      sectionImage: values.sectionImage,
      bannerImage: values.bannerImage,
      sectionGallery: sectionGallery,
      subsite: [
        { title: values.list1Title, content: values.list1 },
        { title: values.list2Title, content: values.list2 },
        { title: values.list3Title, content: values.list3 },
        { title: values.list4Title, content: values.list4 },
        { title: values.list5Title, content: values.list5 },
        { title: values.list6Title, content: values.list6 },
        { title: values.list7Title, content: values.list7 },
        { title: values.list8Title, content: values.list8 },
        { title: values.list9Title, content: values.list9 },
        { title: values.list10Title, content: values.list10 },
      ],
    };

    if (course) {
      dispatch(updateCourseSection(section, course.id));
    } else {
      dispatch(addCoursesSection(section));
    }
  };

  console.log(sectionGallery);

  return (
    <div className={classes.wrapper}>
      <form className={classes["add-content-form"]}>
        <h1>Dodawanie nowej sekcji:</h1>
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
        <label htmlFor="link">Link do trenignu, co ma byc po slash</label>
        <input
          type="text"
          id="link"
          value={values.link}
          name="link"
          onChange={handleInputChange}
        />
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
        name="sectionImage"
        returnLink={handleImageInputChange}
      />
      <h2 className={classes.subSection_heading}>Podstrona treningu:</h2>
      <h3>Dodaj baner, który będzie się wyświetlał na górze podstrony:</h3>
      <UploadBar
        presetImage={values.bannerImage}
        returnLink={handleImageInputChange}
        name="bannerImage"
      />
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
      {course && (
        <button
          onClick={() => {
            dispatch(removeSection("courses", course.id));
          }}
        >
          Usuń ta sekcje
        </button>
      )}
      <button onClick={submitHandler}>ZAAKCEPTUJ</button>
    </div>
  );
};

export default Actions;

// sectionImage = course.sectionImage;
// bannerImage = course.bannerImage;
// initialValues = {
//   title: course.title,
//   description1: course.description1,
//   description2: course.description2,
//   description3: course.description3,
//   link: course.link,
//   organizer: course.organizer,
//   price: course.price,
//   list1: course.list1,
//   list2: course.list2,
//   list3: course.list3,
//   list4: course.list4,
//   list5: course.list5,
//   list6: course.list6,
//   list7: course.list7,
//   list8: course.list8,
//   list9: course.list9,
//   list10: course.list10,
//   list2Title: course.title2,
//   list3Title: course.title2,
//   list4Title: course.title4,
//   list6Title: course.title4,
//   list7Title: course.title4,
//   list8Title: course.title4,
//   list9Title: course.title9,
// };

// title: values.title,
// description1: values.description1,
// description2: values.description2,
// description3: values.description3,
// link: values.link,
// organizer: values.organizer,
// price: values.price,
// sectionImage: sectionImage,
// bannerImage: bannerImage,
// list1: values.list1,
// list2: values.list2,
// list3: values.list3,
// list4: values.list4,
// list5: values.list5,
// list6: values.list6,
// list7: values.list7,
// list8: values.list8,
// list9: values.list9,
// list10: values.list10,
// title2: values.list2Title,
// title3: values.list3Title,
// title4: values.list4Title,
// title6: values.list6Title,
// title7: values.list7Title,
// title8: values.list8Title,
// title9: values.list9Title,
