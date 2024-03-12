import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AppNavBar = () => {
  return (
    <Navbar expand="lg" className="navbar mb-2">
      <Container className='mx-5'>
        <Navbar.Brand as={NavLink} to="/" className="navBrand">
          日本語 勉強
        </Navbar.Brand>
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
      </Container>
    </Navbar>
  );
};

export default AppNavBar;
