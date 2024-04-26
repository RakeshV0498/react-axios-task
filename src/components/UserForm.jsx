/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { useContext, useEffect, useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";

import { createUser, editUser, readAllData, readUserData } from "../API/crud";
import { userContext } from "../Context/Context";
import { useNavigate, useSearchParams } from "react-router-dom";

const UserForm = () => {
  const [searchParams] = useSearchParams();
  const [initialUserData, setInitialUserData] = useState(null);

  const {
    state: { formData },
    dispatch,
  } = useContext(userContext);

  const navigate = useNavigate();

  const editMode = searchParams.get("edit") === "true";
  const userId = searchParams.get("userID");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await readUserData(userId);
        console.log(userData);
        setInitialUserData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [userId]);

  useEffect(() => {
    if (initialUserData) {
      console.log(initialUserData);
      dispatch({ type: "Set_Form_Data", formData: initialUserData });
    }
  }, [initialUserData]);

  const handleChange = (field, value) => {
    dispatch({ type: "Add_New_User", field, value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      try {
        const response = await editUser(userId, formData);
        console.log(response);
        alert(`${response.name} has beeen updated`);
      } catch (error) {
        console.error("Failed to update data:", error);
      }
    } else {
      try {
        const result = await createUser(formData);
        console.log("Data Posted successfully:", result);
        alert(`${result.name} has been created`);
      } catch (error) {
        console.error("Failed to post data:", error);
      }
    }
    const newData = await readAllData();
    dispatch({
      type: "FETCH_USERS_SUCCESS",
      payload: newData,
    });
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
        dispatch({
          type: "FETCH_USERS_ERROR",
          payload: error,
        });
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
              required
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="user-userName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please Enter Your user name"
              required
              value={formData.username || ""}
              onChange={(e) => handleChange("username", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="user-email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              required
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
                required
                value={formData.street || ""}
                onChange={(e) => handleChange("street", e.target.value)}
              />
              <Form.Control
                placeholder="city"
                aria-label="city"
                id="user-address-city"
                required
                value={formData.city || ""}
                onChange={(e) => handleChange("city", e.target.value)}
              />
              <Form.Control
                placeholder="zip-code"
                aria-label="zip-code"
                id="user-address-zip"
                required
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
              required
              value={formData.phone || ""}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="user-link">
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              placeholder="www.abc.com"
              required
              value={formData.website || ""}
              onChange={(e) => handleChange("website", e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {searchParams.get("edit") ? "Update" : "Create"}
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default UserForm;
