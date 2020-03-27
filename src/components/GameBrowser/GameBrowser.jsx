import React, { Component } from "react";
import "./GameBrowser.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  NavLink
} from "reactstrap";
import Numeral from "numeral";

class GameBrowser extends Component {
  render() {
    const gameSelection = this.props.gameData.map(item => {
      return (
        <Col
          md={Math.ceil(12 / this.props.gameData.length)}
          key={item.detailKey + "pb"}
        >
          <Card>
            <CardImg
              top
              width="100%"
              src={item.thumbnail}
              alt={item.altText}
            ></CardImg>
            <CardBody>
              <CardTitle>{item.name}</CardTitle>
              <CardSubtitle>{item.genre}</CardSubtitle>
              <CardText>Start at {Numeral(item.msrp).format("$0,0")}</CardText>
              <NavLink href={"/detail/" + item.detailKey}>Details</NavLink>
              <NavLink href="/build-and-price">Add a feedback</NavLink>
              <NavLink href="/find-a-gamenet">Gamenet Near You</NavLink>
            </CardBody>
          </Card>
        </Col>
      );
    });
    return (
      <div className="gameBrowser">
        <Container>
          <Row>{gameSelection}</Row>
        </Container>
      </div>
    );
  }
}

export default GameBrowser;
