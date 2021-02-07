import React, { Component } from "react";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideThree from "./SlideThree";
import "../Carousel.css";
export default class Carousel extends Component {
  render() {
    return (
      <div>
        <div className="bg-purple">
          <h6 className="list1 active">Rethink pricing</h6>
          <h6 className="list2">Automate FinOps</h6>
          <h6 className="list3">Go Global</h6>
        </div>
        <div>
          <SlideOne />
        </div>
        <div>
          <SlideTwo />
        </div>
        <div>
          <SlideThree />
        </div>
      </div>
    );
  }
}
