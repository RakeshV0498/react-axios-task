import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" sticky="top">
        <Container>
          <Navbar.Brand>
            <Link to="/">Admin Pod</Link>
          </Navbar.Brand>
          <Nav>
            <Button variant="primary">
              <Link to="/create">Create an Account</Link>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
