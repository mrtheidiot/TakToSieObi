import AboutMeActionsForm from "./AboutMeActionsForm";
import { useSelector, useDispatch } from "react-redux";
import { updateAboutMeSection } from "../../../store/FetchActions/put-actions";
import { addAboutMeSection } from "../../../store/FetchActions/post-actions";
import { removeSection } from "../../../store/FetchActions/delete-actions";

const AboutMeActions = (props) => {
  const dispatch = useDispatch();
  const aboutMe = useSelector((state) => state.aboutme.aboutMeContent);

  let initialValues,
    objectToEdit,
    edit = false;

  if (props.id) {
    edit = true;
    objectToEdit = aboutMe.find((item) => item.id === props.id);
    initialValues = {
      baseContent: {
        title: objectToEdit.title,
        part1: objectToEdit.parts[0].text,
        part2: objectToEdit.parts[1].text,
        part3: objectToEdit.parts[2].text,
        part4: objectToEdit.parts[3].text,
        part5: objectToEdit.parts[4].text,
        part6: objectToEdit.parts[5].text,
        part7: objectToEdit.parts[6].text,
        part8: objectToEdit.parts[7].text,
        sideImage: objectToEdit.sideImage,
      },
      sectionGallery: objectToEdit.sectionGallery,
    };
  } else {
    initialValues = {
      baseContent: {
        title: "",
        part1: "",
        part2: "",
        part3: "",
        part4: "",
        part5: "",
        part6: "",
        part7: "",
        part8: "",
        sideImage: "",
      },
      sectionGallery: [],
    };
  }

  const dispatchAction = (updatedObject) => {
    if (objectToEdit) {
      dispatch(updateAboutMeSection(updatedObject, objectToEdit.id));
    } else {
      dispatch(addAboutMeSection(updatedObject));
    }
  };

  const removeSectionHandler = () => {
    dispatch(removeSection("aboutme", objectToEdit.id));
  };

  return (
    <AboutMeActionsForm
      initialValues={initialValues}
      edit={edit}
      dispatchAction={dispatchAction}
      removeSectionHandler={removeSectionHandler}
    />
  );
};

export default AboutMeActions;
