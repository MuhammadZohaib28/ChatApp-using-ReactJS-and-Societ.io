import React, { useState } from "react";
import "./header.css";
import searchIcon from "../../images/search.png";
import notification from "../../images/notification.png";
import dropdown from "../../images/dropdown.png";
import profilepicture from "../../images/profilepicture.jpg";
import Search from "../search/Search";

const Header = () => {
  const [search, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(!search);
  };

  return (
    <>
      <header>
        {
          <div className="search" onClick={handleSearch}>
            <img
              src={searchIcon}
              alt="search icon"
              className="icon searchIcon"
            />
            <label>Search User</label>
          </div>
        }

        <h1>Chat App Task</h1>

        <div className="notification">
          <img
            src={notification}
            alt="notification icon"
            className="icon notificationIcon"
          />
          <img
            src={profilepicture}
            alt="profile picture"
            className="icon profilePictureIcon"
          />
          <img
            src={dropdown}
            alt="drop down icon"
            className="icon dropdownIcon"
          />
        </div>
      </header>
      {search && <Search />}
    </>
  );
};

export default Header;
