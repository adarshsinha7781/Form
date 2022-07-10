import React, { useEffect } from 'react';
import './Checkbox.css';
import { useState } from 'react';

const userData =[
  { name:"Adarsh"},
  { name:"Sinha"},
  { name:"Deepak"},
];

export default function Check() {
  const [users,setUsers] = useState([]);
  useEffect(() =>{
    setUsers(userData);
  } , []);

  return (
    <>
    <div className='container my-4' style={{width:400}}>
      <form className='form'>
        <h3>Select Users</h3>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" />
          <label className = "form-check-label ms-2">All Select</label>
        </div>
        { users.map((user) =>(
          <div className='form-check'>
            <input type="checkbox" className='form-check-input' />
            <label className='form-check-label ms-2'>{user.name}</label>
          </div>
        ))}
      </form>
    </div>
    </>
  )
}
