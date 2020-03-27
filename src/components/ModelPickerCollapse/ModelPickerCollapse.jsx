import React from "react";
import "./ModelPickerCollapse.css";
import {
  Collapse,
  Media,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Numeral from "numeral";

class ModelPickerCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    const game = this.props.selectedGame;
    return (
      <div className="clickableMedia">
        <Media>
          <Media left href="#">
            <Media
              object
              className="gameImage"
              src={game.thumbnail}
              alt={game.model}
            />
          </Media>
          <Media body>
            <Media heading>{game.model}</Media>
            <div>
              {game.tagline} <br /> <br />
              <span>Start at {Numeral(game.msrp).format("$0,0")}</span>
              <br />
              <span>
                <i className="fas fa-gas-pump"></i>
                {game.options.engines[0].nmpg} NMPG
              </span>
            </div>
          </Media>
        </Media>
        <Nav>
          <NavItem>
            <NavLink onClick={this.toggle}>
              {this.state.collapse ? "See Less" : "See More"}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              data-model={game.detailKey}
              data-msrp={game.msrp}
              onClick={this.props.selectGame}
            >
              Select
            </NavLink>
          </NavItem>
        </Nav>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>{game.description}</CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default ModelPickerCollapse;
