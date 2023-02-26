import React, { useState } from "react";
import axios from 'axios'

import UserForm from "./colorForm";

const AddColor = () => {
 
  const [colour, setColour] = useState({
    color: "",
    colorcode: "",
    sequence: "" 
    
  });

 
  const onInputChange = e => {
    setColour({ ...colour, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(" http://localhost:4000/posts", colour);
    setColour({
        color:'',
        colorcode:'',
        sequence:'',
       
    });
  };
  return (
   
    <UserForm user={colour} onInputChange={onInputChange}onSubmit={onSubmit}/>
  );
};

export default AddColor;