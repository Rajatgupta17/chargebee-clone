import React, { Component } from "react";
import "../Slidethree.css";
import Percentage from "../images/perc15.svg";
import Harvestr from "../images/harvestr.png";
class SlideThree extends Component {
  render() {
    return (
      <div className="tabs-th">
        <div className="tab-left-th">
          <div className="tab-left-parent-th">
            <div className="tab-header-th">
              <p>Grew MRP by</p>
              <div className="tab-count-th">
                <img src={Percentage}></img>
              </div>
            </div>
            <div className="tab-footer-th">
              <h2 className="tab-headings-th">
                and expanded globally from Europe
              </h2>
              <div className="read-story-t hidden-th">
                <div className="read-story-link-th">Read Story →</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-right-th">
          <div className="tab-right-top-th">
            <p>
              “As a European company selling in Europe but also outside of
              Europe, it was critical for us to be able to have two currencies -
              euros and dollars. VAT was another aspect we really wanted to be
              automated. This was a gamechanger with Chargebee. ”
            </p>
          </div>
          <div className="tab-right-bottom-th">
            <div className="tab-rbleft-th">
              <p className="rbleft-name-th"> Valentin Huang</p>
              <div className="tab-rbrole-th">
                <p>Co-founder</p>
              </div>
            </div>
            <div className="tab-rbright-th">
              <img src={Harvestr}></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SlideThree;
