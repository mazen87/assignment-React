import { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    userName : 'Arnold',
    contenu : 'this is some text for you ! ',
    numLettres: 0,
    textInput: ''
  }

  changeUserName = (event) => {
    this.setState({
      userName : event.target.value,
      contenu : 'this is some text for you ! '
    })
  }

  LettersLengthHandler = (event) => {
    const words = event.target.value;
    console.log(words);
    let number = {...this.state.numLettres};
    let numLettres = words.length;
    number = numLettres;
    this.setState({numLettres: number,textInput:words});
    
}

  deleteCharHandler = (charIndex) => {
    console.log(charIndex);
        let chars = [...this.state.textInput];
        chars.splice(charIndex, 1);
        const words = chars.join('');
        console.log(words);
      this.setState({
        textInput:words
      })
  }
  

  
  render() {
    let elements = null;
    if(this.state.textInput !== ''){
      let chars = [...this.state.textInput];
      elements = (
        <div>
          { 
            chars.map((char,charIndex)=>{
              return <CharComponent char={char}  charDelete={() =>this.deleteCharHandler(charIndex)}/>
            })
          }
        </div>
        )
    }
  return (

    <div className="App">
      <header> <h1>Assignment - React </h1></header>
      <UserInput userName={this.state.userName} changed={this.changeUserName}/>
      <UserOutput userName={this.state.userName} contenu={this.state.contenu}  />
      <UserOutput userName='Arnold' contenu={this.state.contenu}  />
        <div>
          <input type="text" onChange={(event)=>this.LettersLengthHandler(event) } value={this.state.textInput} />
          <p>{this.state.numLettres}</p>
          <p>{this.state.textInput}</p>
          <ValidationComponent inputLength={this.state.numLettres} />
        </div>

          {elements}

     
    </div>
     );
  };
}

export default App;
