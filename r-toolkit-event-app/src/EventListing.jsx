import { useState } from "react";
import { useDispatch } from "react-redux";
import EventItem from "./Components/EventItem";

const EventListing = (props) => {
  const { eventListing } = props;

  return eventListing.map((item) => {
    return <EventItem item={item} key={item.event_id} />;
  });
};

export default EventListing;
