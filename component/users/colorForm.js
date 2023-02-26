import React from "react";
const UserForm=({user,onInputChange,onSubmit})=>{
    const{color,colorcode,sequence}=user;
    return(
<div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Color</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
             className="form-control form-control-lg"
             placeholder="Enter Your Color Name"
              type="text"
              name="color"
              value={color}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="color-box">

            <input
            className="form-control form-control-lg"
            placeholder="Enter Your Color Code"
              type="text"
              name="colorcode"
              value={colorcode}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
            className="form-control form-control-lg"
            placeholder="Enter Sequence"
              type="number"
              name="sequence"
              value={sequence}
              onChange={e => onInputChange(e)}
            />
          </div>
         
          
          <button className="btn btn-primary btn-block">AddColor</button>
        </form>
      </div>
    </div>
    );
}
export default UserForm;