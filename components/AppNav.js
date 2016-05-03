import React from 'react'
import {
  Nav,
  Navbar,
  NavItem,
} from 'react-bootstrap';

const AppNav = () => (
  <Navbar inverse className="container">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React Playground</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Home</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Hello!</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default AppNav
