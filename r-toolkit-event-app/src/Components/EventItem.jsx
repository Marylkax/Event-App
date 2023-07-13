import React, { Component, useState } from "react";
import backdrop from "./images/backdrop.png";
import { useDispatch, useSelector } from "react-redux";
import { setLiked, selectLiked, setDetailsId } from "../features/eventSlice";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Eventdetails from "./EventDetails";

const EventItem = (props) => {
  const { item } = props;
  const navigate = useNavigate();
  const listOfLiked = useSelector(selectLiked);
  const dispatch = useDispatch();

  let dateEnd = item.schedules[0].end_ts;
  let datetoconvert = new Date(dateEnd);

  return (
    <>
      <div className="eventInfocard">
        <div className="eventDetails">
          <p>{item.name}</p>
          <p>{datetoconvert.toLocaleDateString("en-GB")}</p>
          <button
            className="likeButton"
            style={{
              color: listOfLiked.includes(item.event_id) ? "blue" : "red ",
            }}
            onClick={(e) => {
              dispatch(setLiked(e.target.id));
            }}
            id={item.event_id}>
            &#10084;
          </button>

          <p
            onClick={(e) => {
              dispatch(setDetailsId(e.target.id));
              navigate(`/eventDetails/${e.target.id}`);
            }}
            id={item.event_id}>
            Details
          </p>
        </div>

        <div className="eventImage">
          {item.images[0] && item.images[0].url ? (
            <img src={item.images[0].url} />
          ) : (
            <img src={backdrop} />
          )}
        </div>
      </div>
    </>
  );
};

export default EventItem;
