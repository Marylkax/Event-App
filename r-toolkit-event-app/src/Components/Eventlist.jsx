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
  // const [screenMode, setScreenMode] = useState(0);
  // const liked = useSelector(selectLiked);
  const dispatch = useDispatch();

  let dateend = item.schedules[0].end_ts;
  let datetoconvert = new Date(dateend);
  console.log(dateend);
  //how to show dates in right format?
  // const onnavClick = (e) => {
  //   e.preventDefault();
  //   setScreenMode({ screenMode: Number(e.target.id) });
  // };
  return (
    <>
      <div className="eventinfocard">
        <div className="eventdetails">
          <p>{item.name}</p>
          <p>{datetoconvert.toLocaleDateString("en-GB")}</p>
          {/* <p>{item.event_id}</p> */}
          <div
            className="likeButton"
            style={{ color: liked ? "white" : "red " }}
            onClick={() => setLiked(!liked)}

            // onClick={onLikeButton}
            // // onClick={()=>dispatch(liked(item.name))}
            // onClick={()=> onLikeToggle(item.events_id)}
          >
            &#10084;
          </div>

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

        <div className="eventimage">
          {item.images[0] && item.images[0].url ? (
            <img src={item.images[0].url} />
          ) : (
            <img src={backdrop} />
          )}
        </div>
      </div>
      {/* <Routes>
        <Route path="/details" element={<Eventdetails/>}></Route>
      </Routes> */}
    </>
  );
};

export default Eventlist;
