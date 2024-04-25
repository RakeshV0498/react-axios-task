import { useContext } from "react";
import { userContext } from "../Context/Context";
import { Container } from "react-bootstrap";

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
    <Container>
      {users.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </Container>
  );
};

export default Home;
