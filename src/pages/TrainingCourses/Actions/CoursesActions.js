import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoursesSection } from "../../../store/FetchActions/post-actions";
import { updateCourseSection } from "../../../store/FetchActions/put-actions";
import { removeSection } from "../../../store/FetchActions/delete-actions";
import CoursesActionsForm from "./CoursesActionsForm";

const CoursesActions = (props) => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.coursesContent);

  let initialValues,
    objectToEdit,
    edit = false;

  if (props.id) {
    edit = true;
    objectToEdit = courses.find((item) => item.id === props.id);
    initialValues = {
      baseContent: {
        ...objectToEdit,
        list1: objectToEdit.subsite[0].content,
        list2: objectToEdit.subsite[1].content,
        list3: objectToEdit.subsite[2].content,
        list4: objectToEdit.subsite[3].content,
        list5: objectToEdit.subsite[4].content,
        list6: objectToEdit.subsite[5].content,
        list7: objectToEdit.subsite[6].content,
        list8: objectToEdit.subsite[7].content,
        list9: objectToEdit.subsite[8].content,
        list10: objectToEdit.subsite[9].content,
        list1Title: objectToEdit.subsite[0].title,
        list2Title: objectToEdit.subsite[1].title,
        list3Title: objectToEdit.subsite[2].title,
        list4Title: objectToEdit.subsite[3].title,
        list5Title: objectToEdit.subsite[4].title,
        list6Title: objectToEdit.subsite[5].title,
        list7Title: objectToEdit.subsite[6].title,
        list8Title: objectToEdit.subsite[7].title,
        list9Title: objectToEdit.subsite[8].title,
        list10Title: objectToEdit.subsite[9].title,
      },
      sectionGallery: objectToEdit.sectionGallery,
    };
  } else {
    initialValues = {
      baseContent: {
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
      },
      sectionGallery: [],
    };
  }

  const removeSectionHandler = () => {
    dispatch(removeSection("courses", objectToEdit.id));
  };

  const dispatchAction = (section) => {
    if (objectToEdit) {
      dispatch(updateCourseSection(section, objectToEdit.id));
    } else {
      dispatch(addCoursesSection(section));
    }
  };

  return (
    <CoursesActionsForm
      edit={edit}
      dispatchAction={dispatchAction}
      initialValues={initialValues}
      removeSectionHandler={removeSectionHandler}
    />
  );
};

export default CoursesActions;
