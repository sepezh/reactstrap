import React, { Component } from "react";
import "./Home.css";
import SiteCarousel from "../SiteCarousel";
import GameBrowser from "../GameBrowser";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.gameData) {
      return (
        <div>
          <SiteCarousel gameData={this.props.gameData} />
          <GameBrowser gameData={this.props.gameData} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Home;
