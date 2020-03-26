import React, { Component } from "react";
import "./TopNav.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { Link } from "react-router-dom";

class TopNav extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const gameSelections = this.props.gameData.map(item => {
      return (
        <DropdownItem key={item.detailKey}>
          <Link to={{ pathname: "/detail/" + item.detailKey }}>
            {item.name}
          </Link>
        </DropdownItem>
      );
    }, this);

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Posting The Best Games</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-item" href="/">
                  <i className="fas fa-home"></i> Home
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="nav-item">
                  <i className="fas fa-comments"></i> Games
                </DropdownToggle>
                <DropdownMenu right>{gameSelections}</DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/find-a-gamenet" className="nav-item">
                  <i className="fas fa-search"></i> Find A Gamenet
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/writ-and-post" className="nav-item">
                  <i className="fas fa-comment-dots"></i> Add A Game
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNav;
