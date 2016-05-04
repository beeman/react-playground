import React from 'react'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, NavItem } from 'react-bootstrap'

const AppNav = () => (
  <Navbar inverse className="container">
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          React Playground
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/home">
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/count">
          <NavItem eventKey={2}>Count</NavItem>
        </LinkContainer>
        <LinkContainer to="/github">
          <NavItem eventKey={3}>Github</NavItem>
        </LinkContainer>
        <LinkContainer to="/store">
          <NavItem eventKey={4}>Store</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <LinkContainer to="/about">
          <NavItem eventKey={1}>About</NavItem>
        </LinkContainer>
        <LinkContainer to="/contact">
          <NavItem eventKey={2}>Contact</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default AppNav
