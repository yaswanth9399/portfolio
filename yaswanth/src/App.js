import React from 'react';
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import './App.css';
function App() {
  return (   
    <div className="App">  
    <NavBar/>
    <div>
    <Home/>
    </div>
      
    </div>
  );
}

export default App;
