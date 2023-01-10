import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-bootstrap';


function navbar() {


  return (
    <Navbar  variant='dark' expand="lg" className='colornegro'>
      <Container>
        <Navbar.Brand href="/" >
            <img
            style={{height: 55, marginRight: 10, marginBottom: 5}}
              src="imagenes/Logotipo Criptoword fondo negro.png"
              alt="Criptoword"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink href='/'>Inicio</NavLink>
            <NavLink href="/nosotros">¿Quienes somos?</NavLink>
            <NavLink href="/contacto">Contacta con nosotros</NavLink>
            <NavDropdown title="Nuestros servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="/mineria">Mineria</NavDropdown.Item>

              <NavDropdown.Item href="/NFT">NFT</NavDropdown.Item>
              <NavDropdown.Divider />

            </NavDropdown>
            <Nav.Link href="/FAQ">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
