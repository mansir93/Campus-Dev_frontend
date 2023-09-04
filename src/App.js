import "./App.css";
import Navbar from './Components/Navbar'
import Login from "./Pages/Login";

function App() {
  const person = process.env.REACT_APP_MY_NAME || "Aziz";
  return (
    // <div>
    //   Hello {person}
      
    // </div>
    <div>

      <Navbar/>
      <Login/>
    </div>
  
  );
}

export default App;
