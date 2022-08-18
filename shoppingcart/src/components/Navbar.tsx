import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav>
          <Nav.link to="/" as={NavLink}>
            Home
          </Nav.link>
        </Nav>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
