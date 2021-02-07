import React, { Component } from "react";
import Drawboard from "../images/drawboard.svg";
import DrawboardLogo from "../images/Drawboard-logo.svg";
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import "../SlideOne.css";
class SlideOne extends Component {
  render() {
    return (
      <div className="tabs">
        <div className="tab-left">
          <div className="tab-left-parent">
            <div className="tab-header">
              <p>Achieved</p>
              <div className="tab-count">
                <img src={Drawboard}></img>
              </div>
            </div>
            <div className="tab-footer">
              <h2 className="tab-headings">ROI with Chargebee.</h2>
              <div className="read-story hidden">
                <div className="read-story-link">Read Story →</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-right">
          <div className="tab-right-top">
            <p>
              “Chargebee has all the concepts of metered billing, flat and
              tiered pricing. If we decided to change the way we want to bill or
              the price structure, it would be accounted for, excuse the pun.”
            </p>
          </div>
          <div className="tab-right-bottom">
            <div className="tab-rbleft">
              <p className="rbleft-name"> Nathan Field</p>
              <div className="tab-rbrole">
                <p>Marketing</p>
              </div>
            </div>
            <div className="tab-rbright">
              <img src={DrawboardLogo}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SlideOne;
