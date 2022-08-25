import React from "react";
import classes from "./EventsList.module.css";
import { useSelector } from "react-redux";
import EventsSection from "./EventsSection";
import Banner from "../../components/Banner/Banner";
import AddOrEdit from "../../components/Overlays/ActionsOverlay/AddOrEdit";
import EventsActions from "./EventsActions/EventsActions";

const EventsList = () => {
  const eventsContent = useSelector((state) => state.events.eventsContent);
  const editMode = useSelector((state) => state.ui.editMode);

  return (
    <>
      <Banner id={1} />
      <div className={classes.wrapper}>
        {eventsContent.map((event) => (
          <div
            key={event.id}
            className="position_relative"
            data-aos={editMode ? "" : "fade-up"}
          >
            <EventsSection
              id={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              eventImage={event.eventImage}
            />
            {editMode && (
              <AddOrEdit edit={true}>
                <EventsActions id={event.id} />
              </AddOrEdit>
            )}
          </div>
        ))}
        <AddOrEdit edit={false}>
          <EventsActions />
        </AddOrEdit>
      </div>
    </>
  );
};

export default EventsList;
