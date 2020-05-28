import React from "react";
import { Container, Navbar } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">CNjokes</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export { AppNavbar };
