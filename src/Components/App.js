import React from 'react';
import axios from 'axios';
import './App.css';
import PersonList from './Person/PersonList';
import PersonSingle from './Person/PersonSingle';
import PersonForm from './Person/PersonForm';

//Installing axios, that helps to call our API with simple syntax
//we're going to bind our function'updateCurrentPerson' to our class
class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      persons: [],
      currentPerson: {},
    };
    this.updateCurrentPerson = this.updateCurrentPerson.bind (this);
  }

//after we get result from API then we're going to update our persons
  componentDidMount () {
    const url = 'http://localhost:8000/persons';
    axios.get (url)
      .then (Response => {
        this.setState ({
          persons: Response.data
        })
      })
      .catch(error => {
        if (!error.response) {
            // network error
            this.errorStatus = 'Error: Network Error';
        } else {
            this.errorStatus = error.response.data.message;
        }
      })
  };

  //we call a function to update our current person when we click on current person
  updateCurrentPerson (item) {
    this.setState ({
      currentPerson: item,
    })
  }

  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col s12">Menu</div>
        </div>
        <div className="row">
          <div className="col s3">
            <PersonList
              persons={this.state.persons}
              updateCurrentPerson={this.updateCurrentPerson}
            />
          </div>
          <div className="col s9"><PersonSingle /></div>
        </div>
        <div className="row">
          <div className="col s12"><PersonForm /></div>
        </div>
      </div>
    );
  }
}

export default App;
