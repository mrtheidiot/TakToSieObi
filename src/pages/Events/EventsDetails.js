import React from "react";
import classes from "./EventsDetails.module.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EventsDetails = () => {
  const params = useParams();
  const events = useSelector((state) => state.events.eventsContent);
  const event = events.find((event) => (event.link === params.eventlink));
  console.log(event)

  return (
    <div>
      <p>{event.title}</p>
      <p>{event.date}</p>
      <p>{event.time}</p>
      <p>{event.location}</p>
      <p>{event.descriptionLong}</p>
    </div>
  );
};

export default EventsDetails;
