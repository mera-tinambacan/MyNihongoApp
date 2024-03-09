import { Navbar, Nav, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AppNavBar = () => {

  return (
    <Row>
      <Col>
      <Navbar bg="warning" expand="lg" className="navbar mb-2">
        <Navbar.Brand as={NavLink} to="/" className="navBrand px-5">日本語 勉強</Navbar.Brand>
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
        </Navbar.Collapse>
    </Navbar>
      </Col>
    </Row>
    
  );
};

export default AppNavBar;