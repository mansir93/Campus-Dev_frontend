import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/Home/Home";

import "./App.css";
function App() {
  // const person = process.env.REACT_APP_MY_NAME || "Aziz";
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
