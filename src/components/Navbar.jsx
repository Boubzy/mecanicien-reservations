import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/mechanic-dashboard">Mecanicien</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Accueil</Nav.Link>
        <Nav.Link as={Link} to="/login">Connexion</Nav.Link>
        <Nav.Link as={Link} to="/register">Inscription</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
