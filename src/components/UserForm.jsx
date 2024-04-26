/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { useContext, useEffect } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";

import { createUser, readAllData } from "../API/crud";
import { userContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const {
    state: { formData },
    dispatch,
  } = useContext(userContext);

  const navigate = useNavigate();

  const handleChange = (field, value) => {
    dispatch({ type: "Add_New_User", field, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createUser(formData);
      console.log("Data Posted successfully:", result);
      const newData = await readAllData();
      dispatch({
        type: "FETCH_USERS_SUCCESS",
        payload: newData,
      });
    } catch (error) {
      console.error("Failed to post data:", error);
    }

    dispatch({ type: "Reset_Form" });
    navigate("/");
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
              value={formData.name || ""}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="user-userName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please Enter Your user name"
              value={formData.username || ""}
              onChange={(e) => handleChange("username", e.target.value)}
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
                value={formData.street || ""}
                onChange={(e) => handleChange("street", e.target.value)}
              />
              <Form.Control
                placeholder="city"
                aria-label="city"
                id="user-address-city"
                value={formData.city || ""}
                onChange={(e) => handleChange("city", e.target.value)}
              />
              <Form.Control
                placeholder="zip-code"
                aria-label="zip-code"
                id="user-address-zip"
                value={formData.zipcode || ""}
                onChange={(e) => handleChange("zipcode", e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="user-mobNo">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="555-555-0121"
              value={formData.phone || ""}
              onChange={(e) => handleChange("phone", e.target.value)}
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
