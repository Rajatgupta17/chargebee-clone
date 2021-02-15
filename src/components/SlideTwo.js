import React, { Component } from "react";
import Hrs from "../images/hrs105.svg";
import Fishburners from "../images/fishburners.png";
import "../Slidetwo.css";
class SlideTwo extends Component {
  render() {
    return (
      <div className="tabs-t">
        <div className="tab-left-t">
          <div className="tab-left-parent-t">
            <div className="tab-header-t">
              <p>Saved</p>
              <div className="tab-count-t">
                <img src={Hrs} width="200px" height="59px"></img>
              </div>
            </div>
            <div className="tab-footer-t">
              <h2 className="tab-headings-t">in manual accounting</h2>
              <div className="read-story-t hidden-t">
                <div className="read-story-link-t">Read Story →</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-right-t">
          <div className="tab-right-top-t">
            <p>
              “Our finance and accounting teams now save up to 105 hours of
              manual accounting every month. We now have more time to do
              financial analysis and make strategic business decisions.”
            </p>
          </div>
          <div className="tab-right-bottom-t">
            <div className="tab-rbleft-t">
              <p className="rbleft-name-t"> Ayush Patel</p>
              <div className="tab-rbrole-t">
                <p>Finance</p>
              </div>
            </div>
            <div className="tab-rbright-t">
              <img src={Fishburners}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SlideTwo;
