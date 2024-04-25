import PropTypes from "prop-types";
import { Card, ListGroup } from "react-bootstrap";
import { CiLocationOn, CiMobile3 } from "react-icons/ci";
import { FaAddressCard, FaChrome, FaCity, FaStreetView } from "react-icons/fa";

const SingleUser = ({ user }) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle>{user.username}</Card.Subtitle>
          <Card.Text>Email: {user.email}</Card.Text>
        </Card.Body>

        <ListGroup style={{ padding: "15px", margin: "10px" }}>
          <ListGroup.displayName>
            <FaAddressCard fontSize="40px" style={{ marginRight: "10px" }} />{" "}
            <strong>Address</strong>
          </ListGroup.displayName>
          <ListGroup.Item>
            <FaStreetView fontSize="20px" style={{ marginRight: "10px" }} />
            {user.address.street}
          </ListGroup.Item>
          <ListGroup.Item>
            <FaCity fontSize="20px" style={{ marginRight: "10px" }} />
            {user.address.city}
          </ListGroup.Item>
          <ListGroup.Item>
            <CiLocationOn fontSize="20px" style={{ marginRight: "10px" }} />
            {user.address.zipcode}
          </ListGroup.Item>
          <ListGroup.Item>
            <CiMobile3 fontSize="20px" />
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
      </Card>
    </>
  );
};

SingleUser.propTypes = {
  user: PropTypes.object,
};

export default SingleUser;
