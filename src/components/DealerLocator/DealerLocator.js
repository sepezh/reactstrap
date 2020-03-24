import React, { Component } from "react";
import "./DealerLocator.css";
import axios from "axios";
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  ListGroup,
  ListGroupItem,
  Badge,
  Table,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

const API_URL = "http://localhost:3001";
class DealerLocator extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", dealership: null };
  }

  componentDidMount() {
    axios
      .get(`${API_URL}/dearelships`)
      .then(res => {
        this.setState({ dearelships: res.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    if (this.state.dearelships) {
      return <h1>dealership locator</h1>;
    } else {
      return null;
    }
  }
}

export default DealerLocator;
