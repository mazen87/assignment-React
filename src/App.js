import { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    userName : 'Arnold',
    contenu : 'this is some text for you ! '
  }

  changeUserName = (event) => {
    this.setState({
      userName : event.target.value,
      contenu : 'this is some text for you ! '
    })
  }

  
  render() {
    
  return (

    <div className="App">
      <header> <h1>Assignment - React </h1></header>

      <UserInput userName={this.state.userName} changed={this.changeUserName}/>
      <UserOutput userName={this.state.userName} contenu={this.state.contenu}  />
      <UserOutput userName='Arnold' contenu={this.state.contenu}  />

     
    </div>
     );
  };
}

export default App;
