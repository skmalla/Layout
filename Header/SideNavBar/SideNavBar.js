import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import Contents from "./Content/Content";
import "./SideNavBar.css";

const $ = require("jquery");

class SideNavBar extends Component {
  state = {
    appList: [],
    subAppList: [],
    subListOpen: false,
    urlMapping: [],
    fullAppList: [],
    i: 0,
    menuExpand: true,
    addedRoutePath: [],
    currentUrl: "",
  };

  componentDidMount() {
    try {
      //localStorage.setItem("apiURL","http://125.99.153.138:4055/GRCNextGateway/");
      localStorage.setItem("apiURL", "http://localhost:8081/");
      //localStorage.setItem("apiURL","");
      this.getCurrentURL();
      this.callAppListApi(false);
      this.sideMenuSet();

      $(document).ready(function () {
        var navUL = document.getElementsByClassName("sidebar");
        var navLink = document.getElementsByClassName("normalLink");
        for (var i = 0; i < navLink.length; i++) {
          navLink[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
          });
        }

        $(document).on("click", ".dropdown-btn", function () {
          this.classList.toggle("activeSubMenu");
          var dropdownContent = this.nextElementSibling;
          if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
          } else {
            dropdownContent.style.display = "block";
          }
        });
      });
    } catch (error) {
      alert("Error");
    }

    this.forceUpdate();
  }

  callAppListApi = async (backClick) => {
    this.subListOpen = false;
    const requestOptions = {
      method: "GET",
      credentials: "include",
    };

    //var response = await fetch(localStorage.getItem("apiURL")+'flowable-task/app/rest/runtime/app-definitions', requestOptions);
    var response = await fetch(
      localStorage.getItem("apiURL") + "GRCNextBPMN/getAppDefinitions",
      requestOptions
    );
    if (!response.ok) {
      alert("Server Down");
    } else if (response.status === 200) {
      var body = await response.json();
      this.appList = body["data"];
      this.urlMapping = [];
      for (var i = 0; i < this.appList.length; i++) {
        var applicationObject = this.appList[i];
        for (var j = 0; j < applicationObject["data"].length; j++) {
          this.urlMapping.push(applicationObject["data"][j]);
        }
      }
      //console.log(this.urlMapping);
      if (!backClick) {
        var lastMapping = window.location.href.split("/");
        console.log(lastMapping[lastMapping.length - 1]);

        var urlCalled = lastMapping[lastMapping.length - 1];
        this.currentUrl = urlCalled;
        this.fullAppList = this.appList;

        //boolean differPage = true;
        for (var i = 0; i < this.fullAppList.length; i++) {
          var applicationObject = this.fullAppList[i];
          for (var j = 0; j < applicationObject["data"].length; j++) {
            var app = applicationObject["data"][j];

            if (
              app["defaultAppId"] == null &&
              app["appDefinitionKey"] != null &&
              app["appDefinitionKey"] != undefined
            ) {
              if (app["appDefinitionKey"] == urlCalled) {
                this.subListOpen = true;
                this.appList = applicationObject["data"];
                //this.urlMapping= applicationObject["data"];
                //differPage=false;
                break;
              }
            }
          }
        }
      }
      this.forceUpdate();
    }
  };

  afterClick = (json) => {
    this.getCurrentURL();
    if (
      (this.currentUrl == "processBuilder" ||
        this.currentUrl == "formRenderer" ||
        this.currentUrl == "formBuilder") &&
      $("#newSideBar").attr("class").includes("collapse_Small")
    ) {
      this.menuExpand = false;
    }
    console.log(this.menuExpand);
    console.log(json);
    this.subListOpen = true;
    this.subAppList = json;
    this.appList = json["data"];
    //this.urlMapping = this.appList=json["data"];
    this.forceUpdate();
  };

  backClick = () => {
    this.callAppListApi(true);
  };

  menuClick = () => {
    $("#menuIcon").toggleClass("marginBar");
    $(".sidebar").toggleClass("collapse_Small");

    $(".normalLink span").toggleClass("hideMenuText");
    $(".padding_container").toggleClass("collapse_Large");
    if (!$("#newSideBar").attr("class").includes("collapse_Small")) {
      this.menuExpand = true;
      if (this.subListOpen) $("#backIcon").css("display", "flex");
    } else {
      this.menuExpand = false;
    }
    this.forceUpdate();
  };

  sideMenuSet = () => {
    this.getCurrentURL();
    if (
      this.currentUrl == "processBuilder" ||
      this.currentUrl == "formRenderer" ||
      this.currentUrl == "formBuilder"
    ) {
      this.menuExpand = false;
      this.forceUpdate();
    }
  };

  getCurrentURL = () => {
    var lastMapping = window.location.href.split("/");
    console.log(lastMapping[lastMapping.length - 1]);

    var urlCalled = lastMapping[lastMapping.length - 1];
    this.currentUrl = urlCalled;
    this.forceUpdate();
  };

  render() {
    return (
      <>
        {/*<Auth>*/}
        <Router>
          <Contents
            appList={this.state.appList}
            subAppList={this.state.subAppList}
            subListOpen={this.state.subListOpen}
            urlMapping={this.state.urlMapping}
            fullAppList={this.state.fullAppList}
            i={this.state.i}
            menuExpand={this.state.menuExpand}
            addedRoutePath={this.state.addedRoutePath}
            currentUrl={this.state.currentUrl}
            menuClick={this.menuClick}
          />
        </Router>
        {/*</Auth>*/}
      </>
    );
  }
}

export default SideNavBar;
