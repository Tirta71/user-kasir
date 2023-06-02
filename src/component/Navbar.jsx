import React from "react";
import { useMediaQuery } from "react-responsive";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartDropdown from "./CartDropdown";

export default function NavbarKu() {
  const isDesktop = useMediaQuery({ minDeviceWidth: 992 });

  return (
    <div>
      {isDesktop && (
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">Warkop Ku</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <CartDropdown />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </div>
  );
}
