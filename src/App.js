import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

   const [personState, setPersonsState] = useState({
      persons: [
        { name: 'Matus', age: '25' },
        { name: 'John', age: '17' },
        { name: 'Emma', age: '21' }
      ],
      otherState:'some other value'
    });

    console.log(personState);

   const switchNameHandler = () => {
      //console.log('Was clicked !');
      //DON'T DO THIS:  this.state.persons[0].name = 'Igor';
      setPersonsState({
        persons: [
          { name: 'Emma', age: '25' },
          { name: 'Matus', age: '17' },
          { name: 'John', age: '30' }
        ]
      });
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is working...</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age} >My Hobbies: Coding</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age} />
      </div>
    );
  }

export default app;



