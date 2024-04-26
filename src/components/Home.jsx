import { useContext } from "react";
import { userContext } from "../Context/Context";
import { Container } from "react-bootstrap";
import SingleUser from "./SingleUser";
import "./styles.css";
import { Link } from "react-router-dom";

const Home = () => {
  const { state } = useContext(userContext);

  const { users, loading, error } = state;

  if (loading) {
    return (
      <>
        <Container className="msg">
          <h1>Loading...</h1>
        </Container>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Container className="error-msg">
          <h1>{error.message}</h1>
        </Container>
      </>
    );
  }

  return (
    <Container className="user-container">
      {users.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <SingleUser key={user.id} user={user} />
        </Link>
      ))}
    </Container>
  );
};

export default Home;
