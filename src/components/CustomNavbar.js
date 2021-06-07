import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar className="bg-expo" expand="lg" variant="dark" fixed="top">
      <Navbar.Brand
        href="#home"
        className="d-block d-sm-block d-md-block d-xl-none d-lg-none"
      >
        Expo Imóvel - Summit 2021
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav className="links-menu">
          <Nav.Link href="/#main" rel="noopener">
            PÁGINA INICIAL
          </Nav.Link>
          <Nav.Link href="/#map" rel="noopener">
            MAPA DO EVENTO
          </Nav.Link>
          <Nav.Link href="/#schedule" rel="noopener">
            PROGRAMAÇÃO
          </Nav.Link>
          <Nav.Link href="/#subscription" rel="noopener">
            INSCRIÇÕES
          </Nav.Link>
          <Nav.Link href="/#contact" rel="noopener">
            CONTATO
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
