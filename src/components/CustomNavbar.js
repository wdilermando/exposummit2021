import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar className="bg-expo" expand="lg" fixed="top">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="links-menu">
          <Nav.Link href="#home">PÁGINA INICIAL</Nav.Link>
          <Nav.Link href="#home">MAPA DO EVENTO</Nav.Link>
          <Nav.Link href="#home">PROGRAMAÇÃO</Nav.Link>
          <Nav.Link href="#home">INSCRIÇÕES</Nav.Link>
          <Nav.Link href="#home">CONTATO</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
