import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { selectLiked, selectEvents } from "./features/eventSlice";
import { useSelector } from "react-redux";
import EventListing from "./EventListing";

const Favourites = () => {
  const events = useSelector(selectEvents);
  const listOfLiked = useSelector(selectLiked);

  if (!events) {
    return <p>Please add to faves</p>;
  }
  const favouritedResults = events.filter((event) => {
    if (listOfLiked.includes(event.event_id)) {
      return true;
    }
  });

  return (
    <>
      <h1>Favourites</h1>
      <div>
        <EventListing eventlisting={favouritedResults} />
      </div>
    </>
  );
};

export default Favourites;
