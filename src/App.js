import "./App.css";
import Navbar from './Components/Navbar'

function App() {
  const person = process.env.REACT_APP_MY_NAME || "Aziz";
  return (
    // <div>
    //   Hello {person}
      
    // </div>
    <div>

      <Navbar/>
    </div>
  
  );
}

export default App;
