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



  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        { name: 'Matus', age: '25' },
        { name: event.target.value, age: '17' },
        { name: 'John', age: '22' }
      ]
    });
  }

  deletePersonHandler=(personIndex)=>{
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons:persons});

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

          {this.state.persons.map((person, index) => {
            return ( <Person
              name={person.name}
              age={person.age} 
              click={()=>this.deletePersonHandler(index)}
              />
              )
            })
          }
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
