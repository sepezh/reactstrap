import React from "react";
import classnames from "classnames";
import "./BuildAndPrice.css";
import ModelPicker from "../ModelPicker";
import PlatformsSelector from "../PlatformsSelector";
import TestPlayForm from "../TestPlayForm";
import BuildAndPriceImageRotator from "../BuildAndPriceImageRotator";
import Numeral from "numeral";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";

class BuildAndPrice extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.selectGame = this.selectGame.bind(this);
    this.selectManufacturer = this.selectManufacturer.bind(this);
    this.selectPlatforms = this.selectPlatforms.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.computePrice = this.computePrice.bind(this);
    this.state = {
      activeTab: "1",
      selectedGame: "jumper",
      userHasSelectedGame: false,
      selectedManufacturer: 0,
      selectedManufacturerName: "White Dwarf",
      userHasSelectedManufacturer: false,
      selectedPlatforms: 0,
      selectedPlatformsName: "Alpha Centauri Mark II",
      userHasSelectedPlatforms: false,
      modal: false,
      done: false,
      msrp: 36000
    };
  }

  selectGame(eventData) {
    const selected = eventData.target.dataset.model;
    const msrp = eventData.target.dataset.msrp;
    this.setState({
      activeTab: "2",
      msrp: msrp,
      selectedGame: selected
    });
  }

  selectManufacturer(eventData) {
    const selected = eventData.target.dataset.manufacturer;
    const selectedManufacturerName = eventData.target.dataset.manufacturerName;
    this.setState({
      activeTab: "3",
      selectedManufacturer: Number(selected),
      selectedManufacturerName: selectedManufacturerName
    });
  }

  selectPlatforms(eventData) {
    const selected = eventData.target.dataset.platforms;
    const platformsName = eventData.target.dataset.platformsName;
    this.setState({
      selectePlatforms: Number(selected),
      selectedPlatformsName: platformsName
    });
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });
  }

  computePrice() {
    return Number(this.state.msrp) + Number(this.state.platformsCost);
  }

  toggle(tab) {
    if (tab !== this.state.activeTab) {
      this.setState({ activeTab: tab });
    }
  }
  render() {
    return (
      <div>
        <h3>Build and Price</h3>
        <BuildAndPriceImageRotator
          gameData={this.props.gameData}
          selectedGame={this.state.selectedGame}
          manufacturerIndex={this.state.selectedManufacturer}
          manufacturerName={this.state.selectedManufacturerName}
          cost={this.computePrice()}
          platformsIndex={this.state.selectedPlatforms}
        />
        <h4>Manufacturer: {this.state.selectedManufacturerName}</h4>
        <h5>Platforms: {this.state.selectedPlatformsName}</h5>
        <h5>
          Price as configured: {Numeral(this.computePrice()).format("$0,0.00")}
        </h5>
        <div className="tabPanel">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Model
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                Manufacturer
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "3" })}
                onClick={() => {
                  this.toggle("3");
                }}
              >
                Powerplant
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <ModelPicker
                    gameData={this.props.gameData}
                    selectedGame={this.props.selectedGame}
                    selectGame={this.selectGame}
                  />
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                <Col sm="12">
                  <PlatformsSelector
                    gameData={this.props.gameData}
                    onPlatformsSelect={this.selectPlatforms}
                    selectedGame={this.state.selectedGame}
                    selectedPlatforms={this.state.selectedPlatforms}
                  />
                </Col>
              </Row>
            </TabPane>
          </TabContent>
          <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>
              Schedule a Test Flight!
            </ModalHeader>
            <ModalBody>
              <TestPlayForm />
            </ModalBody>
            <ModalFooter>
              <Button manufacturer="primary" onClick={this.toggleModal}>
                Done!
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default BuildAndPrice;
