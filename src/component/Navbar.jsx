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
          <div className="d-flex align-items-center">
            <Navbar.Brand href="/">Warkop Ku</Navbar.Brand>
            {isDesktop && (
              <Nav className="ms-auto">
                <CartDropdown />
              </Nav>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
