import React from "react";
import "./App.css";
import Body from "./Body";
import styled from 'styled-components';


const BackGround = styled.div`
    background-color: black;
    height: 900px;
`
const Heading = styled.h1`
    font-size: 1.0rem; 
    color: white;
`


function App() {
  return (
    <BackGround className="App">
      <Heading>NASA Photo of the Day!</Heading>
      <Body />
    </BackGround>
  );
}

export default App;
