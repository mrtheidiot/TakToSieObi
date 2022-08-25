import React from "react";
import EventsActionsForm from "./EventsActionsForm";
import { useDispatch, useSelector } from "react-redux";
import { removeSection } from "../../../store/FetchActions/delete-actions";
import { updateEvent } from "../../../store/FetchActions/put-actions";
import { addEvent } from "../../../store/FetchActions/post-actions";

const EventsActions = (props) => {
  const dispatch = useDispatch();
  const eventsContent = useSelector((state) => state.events.eventsContent);

  let elementToEdit,
    initialValues,
    edit = false;

  if (props.id) {
    edit = true;
    elementToEdit = eventsContent.find((event) => event.id === props.id);
    initialValues = {
      title: elementToEdit.title,
      date: elementToEdit.date,
      time: elementToEdit.time,
      location: elementToEdit.location,
      description: elementToEdit.description,
      eventImage: elementToEdit.eventImage,
    };
  } else {
    initialValues = {
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      eventImage: "",
    };
  }

  const removeSectionHandler = () => {
    dispatch(removeSection("events", elementToEdit.id));
  };

  const dispatchAction = (section) => {
    if (elementToEdit) {
      dispatch(updateEvent(section, elementToEdit.id));
    } else {
      dispatch(addEvent(section));
    }
  };
  return (
    <EventsActionsForm
      edit={edit}
      initialValues={initialValues}
      dispatchAction={dispatchAction}
      removeSectionHandler={removeSectionHandler}
    />
  );
};

export default EventsActions;
