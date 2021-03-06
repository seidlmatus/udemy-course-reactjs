import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundery from './ErrorBoundery/ErrorBoundery'


class App extends Component {

  state = {
    persons: [
      { id: 'sdas0', name: 'Matus', age: '25' },
      { id: 'sdas1', name: 'John', age: '17' },
      { id: 'sdas2', name: 'Emma', age: '21' }
    ],
    otherState: 'some other walue',
    showPersons: false
  }



  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return id === p.id;
    })

    const person = { ...this.state.persons[personIndex] };

    //const person = Object.asign({},this.state.persons[personIndex])

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    let persons = null;
    let btnClass ='';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return ( <ErrorBoundery  key={person.id}> <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
            </ErrorBoundery>
            )
          })
          }
        </div>
      );
    btnClass = 'red';
    }


    //let classes = ['red','bold'].join(' ');
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p className={classes.join(' ')}>This is working...</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
