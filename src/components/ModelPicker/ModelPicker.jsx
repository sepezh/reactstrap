import React from "react";
import "./ModelPicker.css";
import ModelPickerCollapse from "../ModelPickerCollapse/ModelPickerCollapse";
import { Row, Col } from "reactstrap";
class ModelPicker extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm="12">
            {this.props.vehicleData.map(function(game, i) {
              return (
                <ModelPickerCollapse
                  key={"model-picker-" + game.detailKey}
                  selectedGame={game}
                  selectGame={this.props.selectGame}
                />
              );
            }, this)}
          </Col>
        </Row>
      </div>
    );
  }
}

export default ModelPicker;
