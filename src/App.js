import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

const API_URL = "http://localhost:3001";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { commentData: null };
  }

  componentDidMount() {
    axios
      .get(`${API_URL}/comments`)
      .then(res => {
        console.log(res.data);
        this.setState({ commentData: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.commentData) {
      return (
        <Router>
          <div className="App">
            <TopNav commentData = {this.state.commentData}/>
            <div className="contentAread">
              <Route axact path="/" component={Home} />
            </div>
            <Footer />
          </div>
        </Router>
      );
    } else {
      return <h4>Loading Data ...</h4>;
    }
  }
}

export default App;
