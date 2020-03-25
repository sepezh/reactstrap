import React, { Component } from "react";
import "./GamenetLocator.css";
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

class GamenetLocator extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", gamenets: null };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClearClicked = this.onClearClicked.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${API_URL}/gamenets`)
      .then(res => {
        this.setState({ gamenets: res.data });
      })
      .catch(err => console.log(err));
  }

  handleInputChange(eventData) {
    this.setState({ searchTerm: eventData.target.value });
  }

  onClearClicked(eventData) {
    eventData.preventDefault();
    this.setState({ searchTerm: "" });
  }
  render() {
    if (this.state.gamenets) {
      let searchBar = (
        <div>
          <h1>
            Over {this.state.gamenets.length} Authorized Gamenet Nationwide
          </h1>
          <Row>
            <Col sm={12} md={{ size: 6, offset: 3 }}>
              <Form>
                <FormGroup>
                  <InputGroup>
                    <Input
                      type="text"
                      onChange={this.handleInputChange}
                      value={this.state.searchTerm}
                      name="user_addres"
                      placeholder="We're probably nearby. What state are you in?"
                    />
                    <InputGroupAddon addonType="append">
                      <Button onClick={this.onClearClicked}>X</Button>
                    </InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </div>
      );
      return <div>{searchBar}</div>;
    } else {
      return null;
    }
  }
}

export default GamenetLocator;
