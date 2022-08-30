import { Link } from "react-router-dom";

import classes from "./EventsSection.module.css";

const EventsSection = (props) => {
  const backgroundSelector = props.index % 2;

  const background =
    backgroundSelector === 1
      ? `${classes.wrapper} ${classes.backgroundDark}`
      : `${classes.wrapper} ${classes.backgroundLight}`;

  return (
    <div className={background} data-testid="events-section">
      <Link to={`/wydarzenia/${props.link}`} className={classes.container}>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${props.eventImage})` }}
        >
          {props.date}
        </div>
        <div className={classes.content}>
          <h1 className={classes.title}>{props.title}</h1>
          <p>
            Termin: {props.date} {props.time}, Miejsce: {props.location}
          </p>
          <p className={classes.description_short}>{props.descriptionShort}</p>
        </div>
      </Link>
    </div>
  );
};

export default EventsSection;
