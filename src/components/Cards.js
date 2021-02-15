import React, { Component } from "react";
import "../Cards.css";
import DoneIcon from "@material-ui/icons/Check";
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import Button from "@material-ui/core/Button";
import first from "../images/first.svg";
class Cards extends Component {
  render() {
    return (
      <div className="card-image">
        <div className="card-content">
          <p className="top-head">No more spreadsheets errors</p>
          {/* 14px */}
          <h2>Automate Recurring Billing</h2>
          {/* 18px */}
          <p className="para">
            Scale your SaaS through 480+ recurring billing scenarios that
            automate who you bill, when, and how. No humans, no spreadsheets, no
            missed payments!
          </p>
          <div className="checks">
            {/* 16px */}

            <p className="features">
              <DoneIcon className="done-icon" />
              Billing Schedules
            </p>
            <p className="features">
              <DoneIcon className="done-icon" />
              Proration & Invoicing
            </p>
          </div>
          <div className="checks">
            <p className="features">
              <DoneIcon className="done-icon" />
              Tax management
            </p>
            <p className="features">
              <DoneIcon className="done-icon" />
              Payment Methods
            </p>
          </div>

          <a className="button link-icon">Learn More</a>
        </div>
        <img src={first} className="image" />
      </div>
    );
  }
}
export default Cards;
