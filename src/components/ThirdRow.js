import React, { Component } from "react";
import "../Cards.css";
import DoneIcon from "@material-ui/icons/Check";
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import Button from "@material-ui/core/Button";
import third from "../images/third.svg";
class ThirdRow extends Component {
  render() {
    return (
      <div className="card-image">
        <div className="card-content">
          <p className="top-head">No more lost opportunities</p>
          {/* 14px */}
          <h2>Streamline Revenue Operations</h2>
          {/* 18px */}
          <p className="para">
            Plug revenue leaks by aligning GTM & Finance. Uncover growth
            opportunities across processes, geographies, and business models.
          </p>
          <div className="checks">
            {/* 16px */}

            <p className="features">
              <DoneIcon className="done-icon" />
              SaaS Analytics
            </p>
            <p className="features">
              <DoneIcon className="done-icon" />
              Quote-to-cash
            </p>
          </div>
          <div className="checks">
            <p className="features">
              <DoneIcon className="done-icon" />
              Order-to-revenue
            </p>
            <p className="features">
              <DoneIcon className="done-icon" />
              Revenue Recognition
            </p>
          </div>

          <a className="button">
            <span>Learn More</span>
            <ArrowForwardSharpIcon className="arrow-icon" />
          </a>
        </div>
        <img src={third} className="image" />
      </div>
    );
  }
}
export default ThirdRow;
