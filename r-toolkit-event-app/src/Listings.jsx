import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";

import EventItem from "./Components/EventItem";
import Searchbar from "./Components/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import {
  setEvents,
  selectEvents,
  setSearch,
  selectSearch,
  setActivityTag,
  selectActivityTag,
} from "./features/eventSlice";
import EventListing from "./EventListing";

function Listings() {
  const events = useSelector(selectEvents);
  const search = useSelector(selectSearch);
  const activityTag = useSelector(selectActivityTag);

  const dispatch = useDispatch();

  const getEventData = async () => {
    try {
      const apiKey = ``;
      const headers = { Authorization: `Bearer ${apiKey}` };
      const dataThistleAPI = `https://api.datathistle.com/v1/events?location=${search}&search?query=${activityTag}`;
      const { data } = await axios.get(dataThistleAPI, { headers });
      dispatch(setEvents(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEventData();
  }, [search, activityTag]);

  const onSearchInput = (e) => {
    console.log(e.target.value);
    dispatch(setSearch(e.target.value));
  };

  const queryClick = (e) => {
    console.log(e.target.value);
    dispatch(setActivityTag(e.target.value));
  };

  if (!events) return <p>Loading...</p>;

  return (
    <>
      <input
        className="locationSearch"
        placeholder="Please enter location"
        type="text"
        onInput={onSearchInput}
      />
      <div className="activitySearchButtons" onClick={queryClick}>
        <button value="comedy">Comedy</button>
        <button value="art">Art</button>
        <button value="music">Music</button>
        <button value="nature">Nature</button>
      </div>
      <div className="eventListContainer">
        <EventListing eventListing={events} />
      </div>
    </>
  );
}

export default Listings;
