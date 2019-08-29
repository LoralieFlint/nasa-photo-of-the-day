import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from 'reactstrap';
import styled from 'styled-components';

const CustomH1 = styled.h1`
    color: white;
    font-weight: bold;
    font-size: 1rem; 
`
const PTag = styled.p`
    color: white;
    font-size: 0.5rem;
`
const CustomImg = styled.img`
    width: 60%;
    height: 300px;
    border-radius: 25px;
`
const ExplainP = styled.p`
    color: white;
    width: 90%;
    margin: auto;
    fontSize: 1rem;
    font-size: 0.5rem;

`


const Picture = () => {
  const [picUrl, setPicUrl] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [explain, setExplain] = useState("");

  useEffect(() => {
    function getPhoto() {
      axios
        .get(
          "https://api.nasa.gov/planetary/apod?api_key=0nKUDokVcgYZoO5IErS9haXg4L4iMORNEcvOM9Sw"
        )
        .then(res => {
          console.log(res.data);
          setPicUrl(res.data.url);
          setDate(res.data.date);
          setTitle(res.data.title);
          setExplain(res.data.explanation);
        })

        .catch(err => console.log(err));
    }
    getPhoto();
  }, []);

  return (
    <div>
      <PTag>{date}</PTag>
      <CustomImg
        src={picUrl}
        alt="Nasa astronomy pic of the day"></CustomImg>
      <CustomH1>{title}</CustomH1>
      <ExplainP>{explain}</ExplainP>;
      </div>

  );
};
export default Picture;
