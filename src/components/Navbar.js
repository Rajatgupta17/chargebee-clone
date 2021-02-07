import React, { Component } from "react";
import "../Navbar.css";
import { shadows } from "@material-ui/system";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
class Navbar extends Component {
  render() {
    return (
      <div className="root">
        <AppBar position="static" className="nav" elevation={0}>
          <div className="nav-inside">
            <div className="brand">
              <img src="https://www.chargebee.com/static/resources/brand/chargebee-logo-black.svg" />
            </div>

            <div className="list">
              <div className="title" href="#">
                Products
              </div>
              <div className="title" href="#">
                Pricing
              </div>
              <div className="title" href="#">
                Solutions
              </div>
              <div className="title" href="#">
                Customers
              </div>
              <div className="title" href="#">
                Resources
              </div>
            </div>
            <div className="nav-right">
              <a className=" button-demo-nav">
                Schedule a Demo
                <ArrowForwardSharpIcon className="arrow-icon-demo" />
              </a>
            </div>
          </div>
        </AppBar>
      </div>
    );
  }
}
export default Navbar;
