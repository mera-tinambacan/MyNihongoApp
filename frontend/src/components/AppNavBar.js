import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AppNavBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container className="navbarContainer">
        <Navbar.Brand as={NavLink} to="/">日本語 勉強</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="navLink">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/vocabKanji" className="navLink">
              Vocab & Kanji
            </Nav.Link>
            <Nav.Link as={NavLink} to="/notes" className="navLink">
              Notes
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavBar;