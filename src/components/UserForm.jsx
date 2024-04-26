/* eslint-disable react-refresh/only-export-components */
import { useEffect, useReducer } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { handleUser, initialState } from "../Context/Reducer";
import { createUser, readAllData } from "../API/crud";

const UserForm = () => {
  const [formData, dispatch] = useReducer(handleUser, initialState);

  const handleChange = (field, value) => {
    dispatch({ type: "Add_New_User", field, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const result = await createUser(formData);
      console.log("Data Posted successfully:", result);
      const newData = await readAllData();
      console.log(newData);
      dispatch({
        type: "FETCH_USERS_SUCCESS",
        payload: newData,
      });
    } catch (error) {
      console.error("Failed to post data:", error);
    }

    dispatch({ type: "Reset_Form" });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await readAllData();
        dispatch({
          type: "FETCH_USERS_SUCCESS",
          payload: users,
        });
      } catch (error) {
        dispatch({ type: "FETCH_USERS_ERROR", payload: error });
      }
    };
    fetchData();
  }, []);

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
