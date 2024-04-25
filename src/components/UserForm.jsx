import { useReducer } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { handleUser, initialState } from "../Context/Reducer";

const UserForm = () => {
  const [formData, dispatch] = useReducer(handleUser, initialState);

  // const handleChange = (field, value) => {
  //   // Check if the field is part of the address
  //   if (field.startsWith("address.")) {
  //     console.log(value);
  //     const addressField = field.split(".")[1]; // Get the address field (e.g., street, city, zip)
  //     dispatch({
  //       type: "Add_New_User",
  //       field: {
  //         ...formData,
  //         address: { ...formData.address, [addressField]: value },
  //       },
  //     });
  //   } else {
  //     console.log(value);
  //     dispatch({ type: "Add_New_User", [field]: value });
  //   }
  // };

  const handleChange = (field, value) => {
    console.log("Field:", field);
    console.log("Value:", value);
    dispatch({ type: "Add_New_User", field, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="user-fullName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please Enter Your Full Name"
              value={formData.fullName || ""}
              onChange={(e) => handleChange("fullName", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="user-userName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please Enter Your user name"
              value={formData.userName || ""}
              onChange={(e) => handleChange("userName", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="user-email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={formData.email || ""}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Text>Enter Your address</InputGroup.Text>
              <Form.Control
                placeholder="street"
                aria-label="street"
                id="user-address-street"
                value={formData.address.street || ""}
                onChange={(e) => handleChange("address.street", e.target.value)}
              />
              <Form.Control
                placeholder="city"
                aria-label="city"
                id="user-address-city"
                value={formData.address.city || ""}
                onChange={(e) => handleChange("address.city", e.target.value)}
              />
              <Form.Control
                placeholder="zip-code"
                aria-label="zip-code"
                id="user-address-zip"
                value={formData.address.zip || ""}
                onChange={(e) => handleChange("address.zip", e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="user-mobNo">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="555-555-0121"
              value={formData.mobileNumber || ""}
              onChange={(e) => handleChange("mobileNumber", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="user-link">
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              placeholder="www.abc.com"
              value={formData.website || ""}
              onChange={(e) => handleChange("website", e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default UserForm;
