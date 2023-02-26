import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams ,Link} from "react-router-dom";

const EditColor = () => {
  
  const { id } = useParams();
  const [user, setUser] = useState({
    color: "",
    colorcode: "",
    sequence: ""
  });

  const { color,colorcode,sequence } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(` http://localhost:4000/posts/${id}`, user);
    setUser({
        color:'',
        colorcode:'',
        sequence:'',
       
    });
  };

  const loadUser = async () => {
    const result = await axios.get(` http://localhost:4000/posts/${id}`);
    setUser(result.data);
  };
  return (
    
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Color</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your COlor"
              name="name"
              value={color}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="color-box">

<input
  type="text"
  className="form-control form-control-lg"
  placeholder="Enter Your Colorcode"
  name="colorcode"
  value={colorcode}
  onChange={e => onInputChange(e)}
/>
</div>
<div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Sequence"
              name="sequence"
              value={sequence}
              onChange={e => onInputChange(e)}
            />
          </div>
          
         
          <button className="btn btn-warning btn-block">UpdateColor</button>
        </form>
        <Link className="btn btn-primary" to="/">
        back to List
      </Link>
      </div>
    </div>
  );
};

export default EditColor;