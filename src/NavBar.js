import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';


class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar color="light" light>
          <NavbarBrand href="/">LANGLY</NavbarBrand>
            <Nav navbar>
              { this.props.readability ? (
                <NavItem>
                  Readability: {this.props.readability}
                </NavItem>
              ) : (
                <NavItem>

                </NavItem>
              ) }
            </Nav>
        </Navbar>
      </div>
  );
}

  state = {};
}

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;