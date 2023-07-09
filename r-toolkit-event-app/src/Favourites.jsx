import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { selectLiked, selectEvents } from "./features/eventSlice";
import { useSelector } from "react-redux";

const Favourites = () => {
  const events = useSelector(selectEvents);
  const liked = useSelector(selectLiked);
  const likedlist = { ...liked };
  const eventslist = { ...events };
  console.log(liked);
  console.log(events);
  console.log(likedlist);
  console.log(eventslist);
  console.log(eventslist[0].event_id);
  //   console.log(JSON.stringify(events));

  const favourites = [];

  //   for (const i in events) {
  //     // console.log(i.event_id);
  //     events.forEach((element) => {
  //       console.log(i);
  //       console.log(i.event_id);
  //   if (obj.event_id.includes(liked)) {
  //     console.log(true);
  //     favourites.push(element);
  //   }
  // });
  //     });
  //   }

  //   for (const element in events) {
  //     events.forEach((element) => {
  //       console.log(element.event_id);
  //       if (element.event_id.includes(liked)) {
  //         console.log(true);
  //         favourites.push(element.event_id);
  //       }
  //     });
  //   }

  for (const element in events) {
    events.forEach((element) => {
      console.log(element.event_id);
      if (element.event_id === likedlist) {
        console.log(true);
        favourites.push(events);
      }
    });
  }

  console.log(favourites);
  //       if (likedlist.includes(event_id)) {
  //         console.log(true);
  //       }
  //     });
  //   }
  //   const favouriteslist = events.find((event) => {
  //     return event.event_id === liked;
  //   });

  //   console.log(favouriteslist);
  //   const compareList = (events, liked) => {
  //     return JSON.stringify(events) === JSON.stringify(liked);
  //   };
  //getting back false, need deep comparison
  //   console.log(compareList(events, liked));

  return (
    <>
      <h1>Favourites</h1>
    </>
  );
};

export default Favourites;
