import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Header = () => {
  return (
    <header className="header" style={{ marginBottom: "1rem" }}>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">React Hooks Demo</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/functional">
                Functional Component
              </Nav.Link>
              <Nav.Link as={NavLink} to="/class">
                Class Component
              </Nav.Link>
              <Nav.Link as={NavLink} to="/lifecycle">
                Lifecycle
              </Nav.Link>
              <Nav.Link as={NavLink} to="/hooks/useState">
                useState
              </Nav.Link>
              <Nav.Link as={NavLink} to="/hooks/useEffect">
                useEffect
              </Nav.Link>
              <Nav.Link as={NavLink} to="/hooks/useRef">
                useRef
              </Nav.Link>
              <Nav.Link as={NavLink} to="/hooks/useContext">
                useContext
              </Nav.Link>
              <Nav.Link as={NavLink} to="/hooks/useReducer">
                useReducer
              </Nav.Link>
              <Nav.Link as={NavLink} to="/hooks/useMemoAndCallback">
                useMemo & useCallback
              </Nav.Link>
              <Nav.Link as={NavLink} to="/hooks/useImperativeHandle">
                useImperativeHandle
              </Nav.Link>
              <Nav.Link as={NavLink} to="/custom/counter">
                Custom Counter
              </Nav.Link>
              <Nav.Link as={NavLink} to="/custom/post-list">
                Post List
              </Nav.Link>
              <Nav.Link as={NavLink} to="/custom/debounced-input">
                Debounced Input
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;