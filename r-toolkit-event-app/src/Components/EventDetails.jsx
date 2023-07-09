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
  console.log(eventId, events, event);
  console.log(event.tags[0]);
  console.log(event.images[0]);
  console.log(event.website);

  return (
    <>
      <div className="cardcontainer">
        <h1>{event.name}</h1>

        {event.images[0].url && event.images[0] ? (
          <img src={event.images[0].url} />
        ) : (
          <img src={backdrop} />
        )}
        {/* <img src={event.images[0].url} /> */}
        <p>{event.descriptions[0].description}</p>
        <p>{event.website}</p>
      </div>
    </>
  );
}

export default EventDetails;
