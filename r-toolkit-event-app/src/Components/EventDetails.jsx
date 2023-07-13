import React, { Component } from "react";
import { useSelector } from "react-redux";
import { selectDetailsID, selectEvents } from "../features/eventSlice";
import { useParams } from "react-router-dom";
import backdrop from "./images/backdrop.png";

function EventDetails() {
  const events = useSelector(selectEvents);
  const detailsID = useSelector(selectDetailsID);
  const { eventId } = useParams();

  const event = events.find((event) => {
    return event.event_id === detailsID;
  });

  return (
    <>
      <div className="cardContainer">
        <h1>{event.name}</h1>

        {event.images[0].url && event.images[0] ? (
          <img src={event.images[0].url} />
        ) : (
          <img src={backdrop} />
        )}
        <p>{event.descriptions[0].description}</p>
        <p>{event.website}</p>
      </div>
    </>
  );
}

export default EventDetails;
