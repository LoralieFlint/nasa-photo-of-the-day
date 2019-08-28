import React from "react";
import "./App.css";
import  Body  from "./Body";
// import  TodayDate  from "./TodayDate";



function App() {
  return (
    <div style={{ "backgroundColor": "black", "height": "900px" }} className="App">
      <h1 style={{ "fontSize": "1.0rem", "color": "white" }}>
      NASA Photo of the Day!
      </h1>
      {/* <TodayDate /> */}
      <Body />    
    </div>
    
  );
}

export default App;
