import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./Components/Navbar";
import Eventlist from "./Components/Eventlist";
import Searchbar from "./Components/Searchbar";

import "./App.css";

function Listings() {
  const [events, setEvents] = useState();
  const getEventData = async () => {
    try {
      const apiKey = ``;
      const headers = { Authorization: `Bearer ${apiKey}` };
      const dataThistleAPI = `https://api.datathistle.com/v1/events`;

      const { data } = await axios.get(dataThistleAPI, { headers });

      // console.log(data.results);

      setEvents(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEventData();
  }, []);

  if (!events) return <p>Loading.</p>;

  return (
    <>
      <Navbar />

      {events.map((item) => {
        return <Eventlist item={item} key={item.event_id} />;
      })}
    </>
  );
}

export default Listings;
