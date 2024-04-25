import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>
            <a href="#">MyYSpace</a>
          </Navbar.Brand>
          <Nav>
            <Button variant="primary">Create an Account</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
