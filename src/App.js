import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
//import HelloMessage from "./HelloMessage";

//import Timer from "./Timer";
//import TodoApp from "./TodoApp";
import Table from "./tania_ex/Table";
import Form from "./tania_ex/Form";

class App extends Component {
    state = {
        characters : []
    };
  render() {
      const { characters } = this.state;
      return (
        //<HelloMessage name="Taylor" />
        //<Timer />
          <div>
              <Table characterData = { characters } removeCharacter={this.removeCharacter}/>
              <Form handleSubmit ={this.handleSubmit} />
          </div>
    );
  }

  removeCharacter = index => {
      const { characters } = this.state;

      this.setState({
          characters: characters.filter((character, i)=> {
              return i !== index
          }),
      })
  };

  handleSubmit = character => {
      this.setState({character: [...this.state.characters, character] })
  }
}

export default App;
