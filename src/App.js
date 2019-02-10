import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id:'sdas0', name: 'Matus', age: '25' },
      { id:'sdas1', name: 'John', age: '17' },
      { id:'sdas2', name: 'Emma', age: '21' }
    ],
    otherState: 'some other walue',
    showPersons:false
  }



  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p=>{
      return id === p.id;
    })

    const person = {...this.state.persons[personIndex]};

    //const person = Object.asign({},this.state.persons[personIndex])

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons:persons});
  }

  deletePersonHandler=(personIndex)=>{
   // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});

  }

  togglePersonsHandler=()=>{
      const doesShow= this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  render() {

    const styleBtn={
      backgroundColor:'green',
      color:'white',
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
              key={person.id}
              name={person.name}
              age={person.age} 
              click={()=>this.deletePersonHandler(index)}
              changed={(event) => this.nameChangeHandler(event,person.id)}
              />
              )
            })
          }
        </div>
      );
      styleBtn.backgroundColor='red'
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
