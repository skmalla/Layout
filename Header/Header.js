import React, { Component } from "react";
import TopNavBar from "./TopNavBar/TopNavBar";
import SideNavBar from "./SideNavBar/SideNavBar";

class Header extends Component {
  render() {
    return (
      <div>
        <TopNavBar />
        <SideNavBar />
      </div>
    );
  }
}

export default Header;
