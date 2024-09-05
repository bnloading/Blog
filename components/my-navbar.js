import { Container, Row, Col, Navbar, Image, Card, Nav } from "react-bootstrap";
export default () => {
  return (
    <Navbar className="fj-navbar fj navbase" bg="transparent" expand="lg">
      <Navbar.Brand className="fj-navbar-brand">
        <a href="#">Blog App</a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/">
            Негізгі бет
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
