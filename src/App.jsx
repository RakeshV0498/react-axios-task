import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" exact element={<h1>Home</h1>}></Route>
          <Route path="/users" exact element={<h1>Users</h1>}></Route>
          <Route path="/users/:userId" element={<h1>User</h1>}></Route>
          <Route path="/create" element={<h1>Create User</h1>}></Route>
          <Route path="*" element={<h1>Page Not found</h1>}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
