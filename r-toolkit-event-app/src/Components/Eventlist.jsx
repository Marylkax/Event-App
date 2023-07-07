import React, { Component, useState } from "react";
import backdrop from "./images/backdrop.png";
import { useDispatch, useSelector } from "react-redux";
import { setLiked, selectLiked, setDetailsId } from "./../features/eventSlice";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Eventdetails from "./EventDetails";

const Eventlist = (props) => {
  const { item } = props;
  const navigate = useNavigate();
  const [liked, setLiked] = useState(true);
  const [screenMode, setScreenMode] = useState(0);
  // const liked = useSelector(selectLiked);
  const dispatch = useDispatch();

  let dateend = item.schedules[0].end_ts;
  //how to show dates in right format?
  const onnavClick = (e) => {
    e.preventDefault();
    setScreenMode({ screenMode: Number(e.target.id) });
  };
  return (
    <>
      <div className="eventinfocard">
        <div className="eventdetails">
          <p>{item.name}</p>
          <p>{dateend.toLocaleString()}</p>
          <p>{item.event_id}</p>
          <button
            style={{ color: liked ? "black" : "white" }}
            onClick={() => setLiked(!liked)}
            // onClick={onLikeButton}
            // // onClick={()=>dispatch(liked(item.name))}
            // onClick={()=> onLikeToggle(item.events_id)}
          >
            &#10084;
          </button>

          <p
            onClick={(e) => {
              dispatch(setDetailsId(e.target.id));
              navigate(`/eventDetails/${e.target.id}`);
            }}
            id={item.event_id}
          >
            Details
          </p>

          {/* Turn liked into favourites page/list, to show list of favourites */}
        </div>
        {/* <Link to ="/details">Details</Link> */}
        {/* <img src={item.images[0].url} /> */}
        {/* {item.images[0].url === true && <img src={item.images[0].url} />} */}
        <div className="eventimage">
          <img className="eventclip" src={backdrop} />
        </div>
      </div>
      {/* <Routes>
        <Route path="/details" element={<Eventdetails/>}></Route>
      </Routes> */}
    </>
  );
};

export default Eventlist;
