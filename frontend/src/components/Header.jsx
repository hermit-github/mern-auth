import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FaSignInAlt, FaSignOutAlt,FaClipboardList } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        Hello
        <Container>
          <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            MERN Auth
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => navigate("/login")}>
                <FaSignInAlt /> Sign In
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/register")}>
                <FaClipboardList /> Sign Up
              </Nav.Link>
              {/* <Nav.Link onClick={() => navigate("/")}>
                <FaSignOutAlt /> Logout
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
