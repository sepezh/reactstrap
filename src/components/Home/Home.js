import React, { Component } from "react";
import "./Home.css";
import SiteCarousel from "../SiteCarousel";
import PostBrowser from "../PostBrowser";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.gameData) {
      return (
        <div>
          <SiteCarousel gameData={this.props.gameData} />
          <PostBrowser />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Home;
