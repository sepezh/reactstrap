import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import TopNav from "./components/TopNav";
import Home from "./components/Home";

const API_URL = "http://localhost:3001";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todoData: null };
  }

  componentDidMount() {
    axios
      .get(`${API_URL}/todos`)
      .then(res => {
        console.log(res.data);
        this.setState({ todoData: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.todoData) {
      return (
        <div className="App">
          <TopNav />
          <Home />
        </div>
      );
    } else {
      return <h4>Loading Data ...</h4>;
    }
  }
}

export default App;
