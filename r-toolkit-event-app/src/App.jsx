import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

import axios from "axios";
import "./App.css";
import Navbar from "./Components/Navbar";
import Eventlist from "./Components/Eventlist";
import Searchbar from "./Components/Searchbar";
import Home from "./Home";
import Listings from "./Listings";

function App() {
  return (
    <>
      <nav className="pagenav">
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/listings">Explore what's on</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/listings" element={<Listings />}></Route>
      </Routes>
    </>
  );
}

export default App;
