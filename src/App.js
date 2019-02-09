import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Matus', age: '25' },
      { name: 'John', age: '17' },
      { name: 'Emma', age: '21' }
    ],
    otherState:'some other value'
  }

  switchNameHandler = () => {
    //console.log('Was clicked !');
    //DON'T DO THIS:  this.state.persons[0].name = 'Igor';
    this.setState({
      persons: [
        { name: 'Emma', age: '25' },
        { name: 'Matus', age: '17' },
        { name: 'John', age: '30' }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is working...</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Coding</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
