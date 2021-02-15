import React, { Component } from "react";
import "../Navbar.css";
import { shadows } from "@material-ui/system";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import LockIcon from "@material-ui/icons/Lock";
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
              <div className="title" id="prod" href="#">
                Products
              </div>
              <div className="title" id="price" href="#">
                Pricing
              </div>
              <div className="title" id="sol" href="#">
                Solutions
              </div>
              <div className="title" id="cus" href="#">
                Customers
              </div>
              <div className="title" id="res" href="#">
                Resources
              </div>
            </div>
            <div className="nav-right">
              <div className="nav-rightlog">
                <a className="nav-login">
                  <LockIcon className="lock-icon" />
                  Log in
                </a>
              </div>
              <a className=" button-demo-nav">Schedule a Demo</a>
            </div>
          </div>
        </AppBar>
      </div>
    );
  }
}
export default Navbar;
