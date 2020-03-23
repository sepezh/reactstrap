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
    const CommentSelections = this.props.commentData.map((item) => {
      return <DropdownItem key={item.detailKey}>
        <Link to={{pathname: "/detail/" + item.detailKey}}>
          {item.model}
        </Link>
      </DropdownItem>
    }, this);

    return (
      <div>
        <Navbar color="light" light>
          <NavbarBrand href="/">Posting customer feedback</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">
                  <i className="fas fa-home"></i> Home
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <i className="fas fa-comments"></i> Feedbacks
                </DropdownToggle>
                <DropdownMenu right>
                  {CommentSelections}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/find-a-comment">
                  <i className="fas fa-search"></i> Find A Comment
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/writ-and-post">
                  <i className="fas fa-comment-dots"></i> Writ A Comment
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
