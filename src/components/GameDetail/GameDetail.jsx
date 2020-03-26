import React, { Component } from "react";
import "./GameDetail.css";
import { Row, Col } from "reactstrap";

class GameDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { gameData: {}, selectedGame: "" };
  }
  render() {
    const { selectedGame } = this.props.match.params;
    const selectedGameData = this.props.gameData.filter(
      game => game.detailKey === selectedGame
    )[0];

    return (
      <div>
        <Row>
          <Col>
            <img
              className="detailImage"
              src={selectedGameData.thumbnail}
              alt=""
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>
              {selectedGameData.yearOfRelease} {selectedGameData.genre}
            </h1>
            <h2>{selectedGameData.caption}</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={{ size: 6, offset: 3 }}>
            <p>{selectedGameData.description}</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GameDetail;
