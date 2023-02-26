import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const SpecificColorList = () => {
  const [color, setColor] = useState({
    color: "",
    colorcode: "",
       sequence: ""
   
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(` http://localhost:4000/posts/${id}`);
    setColor(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to List
      </Link>
      <hr />
      <ul className="list-group w-50"> 
        <li className="list-group-item">color: {color.color}</li>
        <li className="list-group-item" style={{fontSize:0,backgroundColor:color.colorcode}}>colorCode: {color.colorcode}</li>
        <li className="list-group-item">Sequence: {color.sequence}</li>
      </ul>
    </div>
  );
};

export default SpecificColorList;