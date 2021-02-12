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
    axios
      .get (url)
      .then (Response => {
        this.setState ({
          persons: Response.data,
        });
      })
      .catch (error => {
        if (!error.response) {
          // network error
          this.errorStatus = 'Error: Network Error';
        } else {
          this.errorStatus = error.response.data.message;
        }
      });
  }

  //we call a function to update our current person when we click on current person
  updateCurrentPerson (item) {
    this.setState ({
      currentPerson: item,
    });
  }
  //Adding Materlize Navbar
  render () {
    return (
      <div className="container-fluid">
        <div className="row">
          <nav>
            <div class="nav-wrapper">
              <a href="#" class="brand-logo">Logo</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
              </ul>
            </div>
          </nav>;

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
