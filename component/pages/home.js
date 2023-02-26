import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Hidden } from "@mui/material";
import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
const List = () => {
  const [colors, setColors] = useState([]);
  const [sortOrder ,setSortOrder]=useState("asc");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(" http://localhost:4000/posts");
    setColors(result.data);
  };

  const deleteUser = async id => {
    await axios.delete(` http://localhost:4000/posts/${id}`);
    loadUsers();
  };
const sorColors=(sortOrder)=>{
    setSortOrder(sortOrder);
    let sortedColors=colors.sort((a,b)=>{
        if (sortOrder==="asc"){
        return a.sequence-b.sequence;
    }  else  {
        return b.sequence-a.sequence;
    
    }
   
});
setColors([...sortedColors]);
};

  return (
    <div className="container">
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Sno.</th>
              <th scope="col">Color</th>
              <th scope="col">ColorPalette</th>
              <th style={{ position: 'relative', left: -16 }}>
      <Dropdown style={{ position: 'relative', top: -1, left: 3 }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sequence
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={()=>sorColors("asc")}>Ascending</Dropdown.Item>
          <Dropdown.Item onClick={()=>sorColors("desc")}>Descending</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {colors.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <Link style={{textDecoration:"none",color:"black"}} to={`/users/${user.id}`}>
                <td >{user.color }</td>
                  </Link>
                  {/* <Link style={{textDecoration:"none",color:"black"}} to={`/users/${user.id}`}>
                  <td style={{backgroundColor:user.colorcode}}>{user.colorcode}</td>
                  </Link> */}
                  
                    <td style={{fontSize:0,backgroundColor:user.colorcode,width:35}}>{user.colorcode}</td>
                    
                  <Link style={{textDecoration:"none",color:"black"}} to={`/users/${user.id}`}>
                  <td>{user.sequence}</td>
                  </Link>
                
                
                <td>
                  
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;