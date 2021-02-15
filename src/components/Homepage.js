import React, { Component } from "react";
import "../Homepage.css";
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import Button from "react-bootstrap/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ImageIcon from "../image.svg";
import Slick from "./Slick";
import Cards from "./Cards";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";
import DemoCarousel from "./Carousel";
import ScrollableTabsButtonAuto from "./Tabs";
import Footer from "./Footer";
class Homepage extends Component {
  render() {
    return (
      <div classname="home">
        <div className="home-part">
          <h1 className="main-heading mh-1">
            Subscription Billing & Revenue Operations
          </h1>
          <h1 className="main-heading">for Fast-growth B2B SaaS</h1>
          <p className="small-para">
            Get the operational sophistication to achieve, sustain,
          </p>
          <p className="small-para">and scale recurring revenue.</p>
          <div className="inline-buttons">
            <a className="button button-demo ">Schedule a Demo</a>
            <a className="button button-demo-b2 " style={{ fontSize: "18px" }}>
              Sign up for free
            </a>
          </div>
        </div>
        <div>
          <object type="image/svg+xml" data={ImageIcon}>
            svg-animation
          </object>
        </div>
        <div className="slider">
          <p>Thousands of Scaling SaaS Businesses Love Us</p>
        </div>
        <Slick className="slick-slider" />
        <Cards />
        <SecondRow />
        <ThirdRow />
        <FourthRow />
        <ScrollableTabsButtonAuto />
        <Footer />
      </div>
    );
  }
}
export default Homepage;
