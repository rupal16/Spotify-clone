import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import "./Header.css";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs or" type="text" />
      </div>
      <div className="header__right">
        <Avatar src="" alt="RJ" />
        <h4>Rupal Jain</h4>
      </div>
    </div>
  );
}

export default Header;
