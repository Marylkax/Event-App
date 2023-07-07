import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Eventlist from "./Components/Eventlist";
import Eventdatalist from "./Eventdatalist";
import Searchbar from "./Components/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import {
  setEvents,
  selectEvents,
  setSearch,
  selectSearch,
  selectActivityTag,
  setActivityTag,
} from "./features/eventSlice";

function Listings() {
  const events = useSelector(selectEvents);
  const search = useSelector(selectSearch);
  const activitytag = useSelector(selectActivityTag);

  const dispatch = useDispatch();

  const getEventData = async () => {
    try {
      const apiKey = ;
      const headers = { Authorization: `Bearer ${apiKey}` };
      const dataThistleAPI = `https://api.datathistle.com/v1/events?location=${search}&search?query=${activitytag}`;
      //need to set a default location
      console.log(dataThistleAPI);
      const { data } = await axios.get(dataThistleAPI, { headers });
      dispatch(setEvents(data));
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEventData();
  }, [search, activitytag]);

  const onSearchInput = (e) => {
    console.log(e.target.value);
    dispatch(setSearch(e.target.value));
  };

  const queryClick = (e) => {
    console.log(e.target.value);
    dispatch(setActivityTag(e.target.value));
  };
  //is the api data changing much, maybe better to filter list based on the tags recieved from API data

  // const onLikeButton = (e) =>{
  //   // const likebutton = e.target.value;
  //  dispatch(setLiked(!liked))
  // }

  // const onLikeToggle = (event_id) => {
  //   const indexOf = events.findIndex((event) =>{
  //     return event.event_id === event_id
  //   });
  //  const _events= [...events] ;
  //  _events[indexOf].liked = !events[indexOf].liked;
  //   setEvents(_events)
  // };

  // const onLikeToggleInput = (e) => {
  //   setLiked(e.target.value);
  // }

  if (!events) return <p>Loading.</p>;

  // let eventlisting = [...events];
  // console.log(eventlisting);

  // if (search) {
  //   eventlisting = eventlisting.filter((item) => {
  //     return item.name.toLowerCase().includes(search);
  //   });
  // }

  return (
    <>
      <input
        placeholder="Please enter location"
        type="text"
        onInput={onSearchInput}
      />
      <div className="activitysearchbuttons" onClick={queryClick}>
        <button value="comedy">Comedy</button>
        <button value="art">Art</button>
        <button value="music">Music</button>
        <button value="nature">Nature</button>
      </div>

      <Eventdatalist eventlisting={events} />
    </>
  );
}

export default Listings;
