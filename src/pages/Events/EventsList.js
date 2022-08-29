import { useSelector } from "react-redux";
import EventsSection from "./EventsSection";
import Banner from "../../components/Banner/Banner";
import AddOrEdit from "../../components/Overlays/ActionsOverlay/AddOrEdit";
import EventsActions from "./EventsActions/EventsActions";

import classes from "./EventsList.module.css";

const EventsList = () => {
  const eventsContent = useSelector((state) => state.events.eventsContent);
  const editMode = useSelector((state) => state.ui.editMode);

  return (
    <>
      <Banner id={1} />
      <div className={classes.wrapper} data-testid="events-list">
        {eventsContent.map((event, index) => (
          <div
            key={event.id}
            className="position_relative"
            data-aos={editMode ? "" : "fade-in"}
          >
            <EventsSection
              id={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              descriptionShort={event.descriptionShort}
              descriptionLong={event.descriptionLong}
              eventImage={event.eventImage}
              index={index}
              link={event.link}
            />
            {editMode && (
              <AddOrEdit edit={true}>
                <EventsActions id={event.id} />
              </AddOrEdit>
            )}
          </div>
        ))}
        {editMode && (
          <AddOrEdit edit={false}>
            <EventsActions />
          </AddOrEdit>
        )}
      </div>
    </>
  );
};

export default EventsList;
