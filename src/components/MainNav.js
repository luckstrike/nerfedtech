import React from 'react';
import { Navbar,Nav,NavDropdown,Button,Form, FormControl } from 'react-bootstrap';

export default class MainNav extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">NerfedTech</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}