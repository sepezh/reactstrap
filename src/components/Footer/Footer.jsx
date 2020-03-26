import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <a href="/schedule-test-play">
          Schedule a Test Play! No player's license requared
        </a>
      </footer>
    );
  }
}

export default Footer;
