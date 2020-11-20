import React, { Component } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";

const timeoutLength = 300;

class User extends Component {
  state = {
    anchorEl: null,
    mouseOverButton: false,
    mouseOverMenu: false,
  };

  handleClick = (event) => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ mouseOverButton: false, mouseOverMenu: false });
  };

  enterButton = () => {
    this.setState({ mouseOverButton: true });
  };

  leaveButton = () => {
    setTimeout(() => {
      this.setState({ mouseOverButton: false });
    }, timeoutLength);
  };

  enterMenu = () => {
    this.setState({ mouseOverMenu: true });
  };

  leaveMenu = () => {
    setTimeout(() => {
      this.setState({ mouseOverMenu: false });
    }, timeoutLength);
  };

  logout = async () => {
    let requestBody = {
      method: "GET",
      credentials: "include",
    };

    var response = await fetch(
      localStorage.getItem("apiURL") + "flowable-task/app/logout",
      requestBody
    );

    if (!response.ok) {
      alert("not able to logout");
    } else if (response.status === 200) {
      window.location.href = "/GRCNext/";
    }
  };

  render() {
    const open = this.state.mouseOverButton || this.state.mouseOverMenu;

    return (
      <div>
        <FontAwesomeIcon
          aria-owns={this.state.open ? "simple-menu" : null}
          aria-haspopup='true'
          onClick={this.handleClick}
          onMouseEnter={this.enterButton}
          onMouseLeave={this.leaveButton}
          icon={faPortrait}
          title='User'
          className='font_color ml-4 cursor-pointer font-size'
        />

        <Menu
          id='simple-menu'
          anchorEl={this.state.anchorEl}
          open={open}
          onClose={this.handleClose}
          MenuListProps={{
            onMouseEnter: this.enterMenu,
            onMouseLeave: this.leaveMenu,
          }}
        >
          <MenuItem onClick={this.handleClose}>Profile Name</MenuItem>
          <MenuItem onClick={this.handleClose}>Account Settings</MenuItem>
          <MenuItem onClick={this.handleClose}>
            Take a Tour of Application
          </MenuItem>
          <MenuItem onClick={this.logout}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default User;
