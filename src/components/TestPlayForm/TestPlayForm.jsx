import React, { Component } from "react";
import "./TestPlayForm.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Alert
} from "reactstrap";
import Axios from "axios";

const API_URL = "http://localhost:3001";

class TestPlayForm extends Component {
  constructor(props) {
    super(props);
    this.state = { showSuccess: false, showDanger: false };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleInputChange(eventData) {
    const target = eventData.target;
    const value = target.type === "checked" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  onSubmit(eventData) {
    eventData.preventDefault();
    Axios.post(`${API_URL}/mailingList`, {
      customerName: this.state.customerName,
      email: this.state.email,
      budget: this.state.budget,
      phone: this.state.phone
    })
      .then(res => {
        this.setState({ showSuccess: true, showDanger: false });
      })
      .catch(err => {
        this.setState({ showSuccess: false, showDanger: true });
      });
  }

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>Schedule a Test Play</CardTitle>
            <CardSubtitle>No gamer's license required</CardSubtitle>
            <CardText>
              Fill out form fields below to schedule a test play.
            </CardText>
            <Form>
              <FormGroup>
                <Input
                  type="text"
                  onChange={this.handleInputChange}
                  name="customerName"
                  id="customerName"
                  placeholder="What's your name?"
                />
              </FormGroup>
              <br />
              <FormGroup>
                <Input
                  type="text"
                  onChange={this.handleInputChange}
                  name="phone"
                  id="name"
                  placeholder="What's your contact number?"
                />
              </FormGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                <Input
                  type="text"
                  onChange={this.handleInputChange}
                  name="email"
                  id="email"
                  placeholder="What's your email address?"
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input
                  type="text"
                  onChange={this.handleInputChange}
                  name="budget"
                  id="budget"
                  placeholder="Do you have a gudget need?"
                />
              </InputGroup>
              <br />
            </Form>
            <br />
            <Button onClick={this.onSubmit}>Submit</Button>
            <Alert isOpen={this.state.showSuccess} color="success">
              Your data were submitted successfully, Your test play{" "}
            </Alert>
            <Alert isOpen={this.state.showDanger} color="danger">
              Something went horribly wrong!
            </Alert>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default TestPlayForm;
