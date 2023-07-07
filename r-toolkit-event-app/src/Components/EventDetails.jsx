import React, { Component } from "react";
import { useSelector } from "react-redux";
import { selectDetailsID, selectEvents } from "../features/eventSlice";
import { useParams } from "react-router-dom";
function EventDetails() {
  const events = useSelector(selectEvents);
  const detailsID = useSelector(selectDetailsID);
  //   const { eventId } = useParams();
  //   console.log(eventId, events);
  const event = events.find((event) => {
    return event.event_id === detailsID;
  });

  console.log(event);
  return (
    <>
      <h1>{event.name}</h1>
      <p>{/* {event.place.name} {event.place.address} {event.place.town} */}</p>
      <p>{event.images.url}</p>
      <p>{event.descriptions}</p>
      <p>{event.website}</p>
    </>
  );
}

export default EventDetails;
