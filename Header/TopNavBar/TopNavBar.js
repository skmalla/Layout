import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import GrcNextLogo from "./GrcNextLogo/GrcNextLogo";
import { Link } from "react-router-dom";
import NavLists from "./NavLists/NavLists";
import "./TopNavBar.css";

class TopNavbar extends Component {
  state = {
    showMenu: false,
    showSettingMenu: false,
  };

  showMenu = (event) => {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  };

  closeMenu = (event) => {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  };

  showSettingMenu = (event) => {
    event.preventDefault();

    this.setState({ showSettingMenu: true }, () => {
      document.addEventListener("click", this.closeSettingMenu);
    });
  };

  closeSettingMenu = (event) => {
    if (!this.dropdownSettingMenu.contains(event.target)) {
      this.setState({ showSettingMenu: false }, () => {
        document.removeEventListener("click", this.closeSettingMenu);
      });
    }
  };

  render() {
    return (
      <div>
        <Navbar className='fixed-top navHeight'>
          <Link tag={Link} to='/dashBoard' title='Home'>
            <GrcNextLogo />
          </Link>
          <NavLists
            showMenu={this.state.showMenu}
            showSettingMenu={this.state.showSettingMenu}
          />
        </Navbar>
      </div>
    );
  }
}

export default TopNavbar;
