import { Form, InputGroup } from "react-bootstrap";

const UserForm = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="user-fullName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Please Enter Your Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="user-userName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Please Enter Your user name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="user-email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group>
          <InputGroup className="mb-3">
            <InputGroup.Text>Enter Your address</InputGroup.Text>
            <Form.Control
              placeholder="street"
              aria-label="street"
              id="user-address-street"
            />
            <Form.Control
              placeholder="city"
              aria-label="city"
              id="user-address-city"
            />
            <Form.Control
              placeholder="zip-code"
              aria-label="zip-code"
              id="user-address-zip"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="user-mobNo">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="text" placeholder="555-555-0121" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="user-link">
          <Form.Label>Website</Form.Label>
          <Form.Control type="text" placeholder="www.abc.com" />
        </Form.Group>
      </Form>
    </>
  );
};

export default UserForm;
