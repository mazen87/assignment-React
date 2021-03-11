import React from 'react';

const CharComponent = (props) => {
   const style = {
        disply: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin:'16px',
        border : '1px solid black'
    }
    return (
     <div style={style} onClick={props.charDelete}>{props.char}</div>
    );
}

export default CharComponent;