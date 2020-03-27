import React, { Component } from "react";
import "./Home.css";
import SiteCarousel from "../SiteCarousel";
import GameBrowser from "../GameBrowser";

class Home extends Component {
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
