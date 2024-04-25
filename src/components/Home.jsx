import { readAllData } from "../API/crud";

const Home = () => {
  console.log(readAllData());
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
