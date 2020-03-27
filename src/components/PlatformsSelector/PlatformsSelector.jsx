import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class PelatformsSelector extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const selectedVehicleData = this.props.vehicleData.filter(
      vehicle => vehicle.detailKey === this.props.selectedVehicle
    )[0];

    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Select a Powerplant</DropdownToggle>
        <DropdownMenu>
          {selectedVehicleData.options.pelatforms.map(function(pelatforms, i) {
            return (
              <DropdownItem
                data-pelatforms={i}
                onClick={this.props.onPelatformsSelect}
                key={pelatforms.last(i)}
              >
                {pelatforms.last(i)}
              </DropdownItem>
            );
          }, this)}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default PelatformsSelector;
