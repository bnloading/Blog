import { Navbar, Nav } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar className="fj-navbar fj navbase" bg="transparent" expand="lg">
      <Navbar.Brand className="fj-navbar-brand">
        <a href="#">Blog App</a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/">
            Негізгі бет
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
