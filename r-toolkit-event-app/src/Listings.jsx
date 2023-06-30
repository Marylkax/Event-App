import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./Components/Navbar";
import Eventlist from "./Components/Eventlist";
import Eventdatalist from "./Eventdatalist";
import Searchbar from "./Components/Searchbar";
import { useDispatch, useSelector } from "react-redux";
import { setEvents, selectEvents, setSearch, selectSearch, selectLocation, setLocation } from "./features/counter/counterSlice"


function Listings() {
  const events = useSelector(selectEvents);
  const search = useSelector(selectSearch);
  const location = useSelector(selectLocation);

  const dispatch = useDispatch();
  const getEventData = async () => {
    try {
      const apiKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMGIwM2JhMGYtMTQ3Ni00YWYyLWJmNTMtZDIwNThkODk4ZWIzIiwia2V5X2lkIjoiMGFhMDgxYzUtNDYwNC00ODIzLWJlMjMtOWM1MjU4NDdjM2MxIiwiaWF0IjoxNjg3MzgxNDk4fQ.KX7aPPUBrpjn0ytfcnHIoNwHKLYm5Vyl3RGbnIsSejU`;
      const headers = { Authorization: `Bearer ${apiKey}` };
      const dataThistleAPI = `https://api.datathistle.com/v1/events?location=${location}&name=${search}`;
console.log(dataThistleAPI)
      const { data } = await axios.get(dataThistleAPI, { headers });
dispatch(setEvents(data))
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    getEventData();
  }, [location, search]);

  const chooseLocation =  (e) => {
  dispatch(setLocation(e.target.value));
};


  const onSearchInput = (e) => {
    console.log(e.target.value)
   dispatch(setSearch(e.target.value)) ;
  };
  // search not working/ no console log??? nothing going to the console. difference between e.value/ e.target.value?

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
      <Navbar />
      <input type="text" onInput={onSearchInput} />
      <select onChange={chooseLocation}>
      <option value="Birmingham" >Birmingham</option>
      <option value="Leeds" >Leeds</option>
      <option value="Manchester" >Manchester</option>
      <option value="Cardiff" >Cardiff</option>
        <option value="London" >London</option>
      </select>
      <Eventdatalist eventlisting={events}/>
     
    </>
  );
}

export default Listings;
