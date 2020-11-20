import React from "react";
import Settings from "./Settings/Settings";
import Home from "./Home/Home";
import BellNotifications from "./BellNotifications/BellNotifications";
import UserDropdown from "./UserDropdown/User";
import SearchDocument from "./SearchDocument/SearchDocument";
import "./NavLists.css";

const NavLists = () => {
  return (
    <ul className='NavlistItems'>
      <li>
        <Settings />
      </li>
      <li>
        <SearchDocument />
      </li>
      <li>
        <Home />
      </li>
      <li>
        <BellNotifications />
      </li>
      <li>
        <UserDropdown />
      </li>
    </ul>
  );
};

export default NavLists;
