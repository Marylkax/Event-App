import React, { Component } from "react";
import backdrop from "./images/backdrop.png";
const Eventlist = (props) => {
  const { item } = props;

  // console.log(props);
  // console.log(item.images[0].url);
  let dateend = item.schedules[0].end_ts;
  //how to show dates in right format?
  return (
    <>
      <div className="eventinfocard">
        <div className="eventdetails">
          <p>{item.name}</p>
          <p>{dateend.toLocaleString()}</p>
        </div>
        {/* <img src={item.images[0].url} /> */}
        {/* {item.images[0].url === true && <img src={item.images[0].url} />} */}
        <div className="eventimage">
          <img className="eventclip" src={backdrop} />
        </div>
      </div>
    </>
  );
};

//image tried to do conditionals
export default Eventlist;
