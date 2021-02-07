import React, { Component } from "react";
import "../Cards.css";
import DoneIcon from "@material-ui/icons/Check";
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import Button from "@material-ui/core/Button";
import second from "../images/second.svg";
class SecondRow extends Component {
  render() {
    return (
      <div className="card-image">
        <img src={second} className="image" />
        <div className="card-content">
          <p className="top-head">No more developer dependency</p>
          {/* 14px */}
          <h2>Smarter Subscription Management</h2>
          {/* 18px */}
          <p className="para">
            Experiment rapidly with pricing structures, product catalogs, and
            subscription lifecycles with a business-user-first experience.
          </p>
          <div className="checks">
            {/* 16px */}

            <p className="features">
              <DoneIcon className="done-icon" />
              Price modeling
            </p>
            <p className="features">
              <DoneIcon className="done-icon" />
              Product Catalog
            </p>
          </div>
          <div className="checks">
            <p className="features">
              <DoneIcon className="done-icon" />
              Trial management
            </p>
            <p className="features">
              <DoneIcon className="done-icon" />
              Lifecycle automation
            </p>
          </div>

          <a className="button">
            <span>Learn More</span>
            <ArrowForwardSharpIcon className="arrow-icon" />
          </a>
        </div>
      </div>
    );
  }
}
export default SecondRow;
