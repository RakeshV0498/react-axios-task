import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { CiMobile3 } from "react-icons/ci";
import { FaAddressCard } from "react-icons/fa";

const SingleUser = ({ user }) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle>{user.username}</Card.Subtitle>
          <Card.Text>Email: {user.email}</Card.Text>
          <Card.Text>
            <FaAddressCard fontSize="20px" />
            {user.address.street},{user.address.city},{user.address.zipcode}
          </Card.Text>
          <Card.Text>
            <CiMobile3 fontSize="20px" />
            {user.phone}
          </Card.Text>
          <Card.Link href={user.website}>Visit Me!</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

SingleUser.propTypes = {
  user: PropTypes.object,
};

export default SingleUser;
