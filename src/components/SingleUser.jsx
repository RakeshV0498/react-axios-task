import PropTypes from "prop-types";
import { Button, Card, ListGroup } from "react-bootstrap";
import { CiLocationOn, CiMobile3 } from "react-icons/ci";
import {
  FaAddressCard,
  FaChrome,
  FaCity,
  FaStreetView,
  FaUser,
} from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";
import { deleteUser } from "../API/crud";
import { useNavigate } from "react-router-dom";

const SingleUser = ({ user }) => {
  const navigate = useNavigate();

  // const handleEdit = async (userId) => {
  //   try {
  //     const response = await editUser(userId, { name: "Rakesh" });
  //     console.log(response);
  //   } catch (error) {
  //     console.error("Error deleting user:", error);
  //   }
  //   window.location.reload();
  // };

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      alert(`Deleted ${user.name} from the portal`);
      console.log("User Deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
    window.location.reload();
  };

  return (
    <>
      <Card className="user-card">
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle>
            <FaUser fontSize="20px" style={{ marginRight: "10px" }} />
            {user.username}
          </Card.Subtitle>
          <Card.Text>
            <IoMailOpenSharp fontSize="20px" style={{ marginRight: "10px" }} />{" "}
            {user.email}
          </Card.Text>
        </Card.Body>
        <ListGroup style={{ padding: "15px", margin: "10px" }}>
          <ListGroup.displayName>
            <FaAddressCard fontSize="40px" style={{ marginRight: "10px" }} />{" "}
            <strong>Address</strong>
          </ListGroup.displayName>
          <ListGroup.Item>
            <FaStreetView fontSize="20px" style={{ marginRight: "10px" }} />
            {user.street}
          </ListGroup.Item>
          <ListGroup.Item>
            <FaCity fontSize="20px" style={{ marginRight: "10px" }} />
            {user.city}
          </ListGroup.Item>
          <ListGroup.Item>
            <CiLocationOn fontSize="20px" style={{ marginRight: "10px" }} />
            {user.zipcode}
          </ListGroup.Item>
          <ListGroup.Item>
            <CiMobile3 fontSize="20px" style={{ marginRight: "10px" }} />
            {user.phone}
          </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href={user.website}>
            {" "}
            <FaChrome fontSize="20px" style={{ marginRight: "10px" }} />
            Visit Me!
          </Card.Link>
        </Card.Body>
        <Card.Body className="btn-container">
          <Button
            variant="primary"
            onClick={() => {
              navigate(`/create?edit=true&userID=${user.id}`, {
                state: { user },
              });
            }}
          >
            Edit
          </Button>
          <Button variant="danger" onClick={() => handleDelete(user.id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

SingleUser.propTypes = {
  user: PropTypes.object,
};

export default SingleUser;
