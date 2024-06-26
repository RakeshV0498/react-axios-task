import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import UserForm from "./components/UserForm";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/create" element={<UserForm />}></Route>
          <Route path="*" element={<h1>Page Not found</h1>}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
