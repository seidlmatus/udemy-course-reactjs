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
    otherState: 'some other walue',
    showPersons:false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked !');
    //DON'T DO THIS:  this.state.persons[0].name = 'Igor';
    this.setState({
      persons: [
        { name: newName, age: '25' },
        { name: 'Matus', age: '17' },
        { name: 'John', age: '21' }
      ]
    });
  }

  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        { name: 'Matus', age: '25' },
        { name: event.target.value, age: '17' },
        { name: 'John', age: '22' }
      ]
    });
  }

  togglePersonsHandler=()=>{
      const doesShow= this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {

    const styleBtn={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      couser:'pointer'
    }


    let persons = null;

    if(this.state.showPersons){
      persons=(
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this,'Max')}
            changed={this.nameChangeHandler}>My Hobbies: Coding</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is working...</p>
        <button style={styleBtn} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
