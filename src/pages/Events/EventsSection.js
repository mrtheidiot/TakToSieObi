import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./EventsSection.module.css";

const EventsSection = (props) => {
  const [showDescription, setShowDescription] = useState(false);
  const backgroundSelector = props.index % 2;

  const background =
    backgroundSelector === 0
      ? `${classes.wrapper} ${classes.backgroundDark}`
      : `${classes.wrapper} ${classes.backgroundLight}`;

  return (
    <div className={background}>
      <Link to="/wydarzenia" className={classes.container}>
        <div
          className={classes.image}
          style={{ backgroundImage: `url(${props.eventImage})` }}
        >
          {props.date}
        </div>
        <h1 className={classes.title}>{props.title}</h1>
        <p className={classes.description_short}>
          Szkolenie z zakresu podstawowego posłuszeństwa dla psów w różnym wieku
          i różnych ras w Wolinie.
        </p>
      </Link>
    </div>
  );
};

export default EventsSection;
