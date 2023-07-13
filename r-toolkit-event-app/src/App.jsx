import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import title from "./Components/images/Plugged_in.png";
import axios from "axios";

import EventItem from "./Components/EventItem";
import Searchbar from "./Components/Searchbar";
import Home from "./Home";
import Listings from "./Listings";
import About from "./About";
import Favourites from "./Favourites";
import EventDetails from "./Components/EventDetails";
import titleplug from "./Components/images/title.png";

function App() {
  return (
    <>
      <header>
        <img src={titleplug} />
      </header>
      <div className="navbarContainer">
        <header className="headerTitle">{/* <img src={title} /> */}</header>
        <nav className="navbarLinks">
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/listings">Explore what's on</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/favourites">Favourites</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/listings" element={<Listings />}></Route>
        <Route exact path="/favourites" element={<Favourites />}></Route>
        <Route
          exact
          path="/eventDetails/:eventId"
          element={<EventDetails />}></Route>
      </Routes>
      <footer className="footerContainer">Copyright 2023 Plugged in</footer>
    </>
  );
}

export default App;
