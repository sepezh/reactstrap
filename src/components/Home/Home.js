import React, { Component } from "react";
import "./Home.css";
import SiteCarousel from "../SiteCarousel";
import PostBrowser from "../PostBrowser";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SiteCarousel />
        <PostBrowser />
      </div>
    );
  }
}

export default Home;
