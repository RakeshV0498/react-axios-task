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
        </Card.Body>
        <ListGroup>
          <ListGroup.Item>Email: {user.email}</ListGroup.Item>
          <ListGroup.displayName>
            <h4>
              <FaAddressCard fontSize="20px" style={{ marginRight: "10px" }} />{" "}
              Address
            </h4>
            <ListGroup>
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
            </ListGroup>
          </ListGroup.displayName>
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
