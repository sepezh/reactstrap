import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import GamenetLocator from "./components/GamenetLocator";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TestPlayForm from "./components/TestPlayForm";

const API_URL = "http://localhost:3001";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gameData: null };
  }

  componentDidMount() {
    axios
      .get(`${API_URL}/games`)
      .then(res => {
        console.log(res.data);
        this.setState({ gameData: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.gameData) {
      return (
        <Router>
          <div className="App">
            <TopNav gameData={this.state.gameData} />
            <div className="contentArea">
              <Route
                exact
                path="/"
                render={props => (
                  <Home {...props} gameData={this.state.gameData} />
                )}
              />
              <Route path="/find-a-gamenet" component={GamenetLocator} />
              <Route path="/schedule-test-play" component={TestPlayForm} />
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
