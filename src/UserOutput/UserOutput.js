import React from 'react';


const UserOutPut = (props) => {
    const style = {
        color : 'white',
        backgroundColor: 'gray',
        width: '70%',
        boxShadow: 'solid 2px 5px gray',
        margin: ' 15px auto',
        padding: '4px',
        border: 'solid 2px black'
      }
    return (
   <div style={style}>     
        <p> Hello {props.userName} </p>
        <p> {props.contenu} </p>
   </div> 
    );
};

export default UserOutPut;