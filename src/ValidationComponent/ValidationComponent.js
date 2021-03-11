import React from 'react';

const ValidationComponent = (props) => {
   let numLettres = 0;
   numLettres = props.inputLength;
   let message = '' ;
   if(numLettres > 5 && numLettres !== 0 ) {
      message = "Text long enough";
   } else if (numLettres<=5 && numLettres !== 0  ){
      message = "Text too short";
   }else {
      message = " ";
   }
 return (
    <p> {message} </p>
 );
}

export default ValidationComponent;