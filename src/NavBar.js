import React, { Component } from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';


class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      readability: true
    };
  }

  render() {
    return (
      <div>
        <Navbar color="light" light>
          <NavbarBrand href="/">LANGLY</NavbarBrand>
            <Nav navbar>
              { this.state.readability ? (
                <NavItem>
                  Readability: C2
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