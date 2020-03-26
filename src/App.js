import React from "react";
import UserCard from "./components/UserCard";
import UserCard2 from "./components/UserCard2";
import UserCard3 from "./components/UserCard3";
import "./App.css";

function App() {
  return (
    <div className="App"> 
      <div className='Card'>
       <UserCard/> 
      </div>
      <div className='Card'>
       <UserCard2/> 
      </div>  
      <div className='Card'>
       <UserCard3/> 
      </div>  
    </div>
  );
}

export default App;