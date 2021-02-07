import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import doodle from "../images/doodle.png";
import envoy from "../images/envoy.png";
import freedom from "../images/freedom.jpg";
import freshworks from "../images/freshworks.png";
import knewton from "../images/knewton.png";
import okta from "../images/okta.png";
import percona from "../images/percona.jpg";
import study from "../images/study.png";
class Slick extends Component {
  render() {
    var settings = {
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div className="art-board">
        <Slider {...settings}>
          <div>
            <img height="50px" width="133px" src={doodle} alt="Not available" />
          </div>
          <div>
            <img height="50px" width="133px" src={envoy} alt="Not available" />
          </div>
          <div>
            <img height="50px" width="133px" src={freedom} />
          </div>
          <div>
            <img height="50px" width="133px" src={freshworks} />
          </div>
          <div>
            <img height="50px" width="133px" src={knewton} />
          </div>
          <div>
            <img height="50px" width="133px" src={okta} />
          </div>
          <div>
            <img height="50px" width="133px" src={percona} />
          </div>
          <div>
            <img height="50px" width="133px" src={study} />
          </div>
        </Slider>
      </div>
    );
  }
}
export default Slick;
