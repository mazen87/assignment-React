import React from 'react';
import './UserInput.css';


const UserInput = (props) => {
    return (
    <div className="UserInput">
        <input type= "text"   onChange={props.changed}  value={props.userName}  />
    </div>
    )

};

export default UserInput;