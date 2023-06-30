import { useState } from "react";
import { useDispatch } from "react-redux";
import Eventlist from "./Components/Eventlist";

const Eventdatalist = (props) => {
  const { eventlisting } = props

  return eventlisting.map((item) => {
    return <Eventlist item={item} key={item.event_id}/>
})

  };

  export default Eventdatalist;