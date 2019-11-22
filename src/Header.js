import React from 'react';
import { Link } from "react-router-dom";
import { Button, Navbar, NavDropdown, Nav, Form } from 'react-bootstrap';


const Header = (props) => {
    return (
        (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">Mec-Ballerup</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/">OEE</Nav.Link>
                        <NavDropdown title="Monitor" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/">TODO</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/M7">M7</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/">TODO</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/">TODO</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <Nav.Link as={Link} to="/">Login</Nav.Link>
                    </Nav>
                    

                </Navbar.Collapse>
            </Navbar>
        )
    );
}
export default Header;

