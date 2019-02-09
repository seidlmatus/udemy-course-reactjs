import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi, I am a React App</h1>
       <p>This is working...</p>
       <Person name='Matus' age='25'/>
       <Person name='John' age='17'>My Hobbies: Coding</Person>
       <Person name='Emma' age='21'/>
      </div>
    );
  }
}

export default App;
