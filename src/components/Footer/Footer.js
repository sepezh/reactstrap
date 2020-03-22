import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <a href="/schedule-test-flight">
          Schedule a Test Flight! No pilot's license requared
        </a>
      </footer>
    );
  }
}

export default Footer;
