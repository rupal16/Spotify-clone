import React from "react";
import Sidebar from "./Sidebar";
import Body from "./Body";

import "./Player.css";
import Footer from "./Footer";

function Player() {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>

      <Footer />
    </div>
  );
}

export default Player;
