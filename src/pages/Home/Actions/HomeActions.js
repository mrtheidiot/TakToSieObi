import HomeActionsForm from "./HomeActionsForm";
import { useDispatch, useSelector } from "react-redux";
import { updateHomeSection } from "../../../store/FetchActions/put-actions";
import { addHomeSection } from "../../../store/FetchActions/post-actions";
import { removeSection } from "../../../store/FetchActions/delete-actions";

const HomeActions = (props) => {
  const dispatch = useDispatch();
  const homePageContent = useSelector((state) => state.home.homePageContent);

  let elementToEdit,
    initialValues,
    edit = false;

  if (props.id) {
    edit = true;
    elementToEdit = homePageContent.find((item) => item.id === props.id);
    initialValues = {
      baseContent: {
        part1: elementToEdit.part1,
        part2: elementToEdit.part2,
        part3: elementToEdit.part3,
      },
      buttons: elementToEdit.buttons,
    };
  } else {
    initialValues = {
      baseContent: { part1: "", part2: "", part3: "" },
      buttons: [],
    };
  }

  const removeSectionHandler = () => {
    dispatch(removeSection("home", elementToEdit.id));
  };

  const dispatchAction = (section) => {
    if (elementToEdit) {
      dispatch(updateHomeSection(section, elementToEdit.id));
    } else {
      dispatch(addHomeSection(section));
    }
  };

  return (
    <HomeActionsForm
      edit={edit}
      initialValues={initialValues}
      dispatchAction={dispatchAction}
      removeSectionHandler={removeSectionHandler}
    />
  );
};

export default HomeActions;
