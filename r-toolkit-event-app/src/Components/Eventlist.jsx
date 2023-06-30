import React, { Component, useState } from "react";
import backdrop from "./images/backdrop.png";
const Eventlist = (props) => {
  const { item } = props;

  const [liked, setLiked] = useState(true);

  
  let dateend = item.schedules[0].end_ts;
  //how to show dates in right format?
  return (
    <>
      <div className="eventinfocard">
        <div className="eventdetails">
          <p>{item.name}</p>
          <p>{dateend.toLocaleString()}</p>
          <button
            style={{ color: liked ? "grey" : "pink" }}
            onClick={() => setLiked(!liked)}
          >
            &#10084;
          </button>
          {/* Turn liked into favourites page/list, to show list of favourites */}
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
