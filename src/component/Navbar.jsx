import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartDropdown from "./CartDropdown";
import { useMediaQuery } from "react-responsive";

export default function NavbarKu() {
  const isDesktop = useMediaQuery({ minWidth: 992 });

  return (
    <div>
      <Navbar variant="dark" bg="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">Warkop Ku</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-dark-example" />
          <Navbar.Collapse id="navbar-dark-example">
            {isDesktop && (
              <Nav>
                <CartDropdown />
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
