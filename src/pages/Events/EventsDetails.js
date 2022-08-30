import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Banner from "../../components/Banner/Banner";
import Output from "../../UI/Output/Output";

import classes from "./EventsDetails.module.css";

// initialValues are present, because reloading the page causes the browser to throw error due to not loaded Router scripts

const initialValues = {
  title: "",
  date: "",
  time: "",
  location: "",
  descriptionShort: "",
  descriptionLong: "",
  eventImage: "",
  link: "",
};

const EventsDetails = () => {
  const params = useParams();
  const events = useSelector((state) => state.events.eventsContent);
  let event = events.find((event) => event.link === params.eventlink);

  if (!event) event = initialValues;

  return (
    <>
      <Banner id={3} />
      <div className={classes.wrapper} data-testid="events-details">
        <h3>{event.title}</h3>
        <p>
          Termin: <b>{event.date}</b> {event.time}
        </p>
        <p> Gdzie: {event.location}</p>
        <p className={classes.descriptionShort}>{event.descriptionShort}</p>
        <div className={classes.output}>
          {event.descriptionLong.split("/br/").map((text, index) => (
            <div key={index}>
              <Output text={text} />
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EventsDetails;
