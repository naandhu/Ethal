import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function SimpleNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Ethal Leggings</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav className="me-auto"> 
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#products">Products</Nav.Link>
          <Nav.Link href="#colors">Colors</Nav.Link>
          <Button variant="primary">Sign Up</Button>{"  "}
          <Button variant="primary">Sign In</Button>{"  "}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SimpleNavbar;

{
  /* <Navbar expand="lg" className="bg-body-tertiary">
<Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Products</Nav.Link>
      <Nav.Link href="#link">Color Pallatte</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */
}
