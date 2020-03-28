import React from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  return (
    <div className="App"> 
      <div className='Card'>
       <UserCard/> 
      </div>
      <div className='Card'>
       <UserCard/> 
      </div>
      <div className='Card'>
       <UserCard/> 
      </div>
    </div>
  );
}

export default App;