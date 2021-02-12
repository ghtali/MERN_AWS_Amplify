import React from 'react';
import axios from 'axios';

//Adding class component with constructor
class PersonForm extends React.Component {
  submitPerson(event) {
    event.preventDefault();
    axios.post('http://localhost:8000/persons',{
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      phone: this.refs.phone.value,
      email: this.refs.email.value
    })
    //we're doing promises
    .then((response)=>{
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render () {
    return (
      <div className="row">
        <h2 className="center">Add a new person</h2>
        <form className="col s12" onSubmit={this.submitPerson.bind (this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="firstName" ref="firstName" type="text" />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="lastName" ref="lastName" type="text" />
              <label htmlFor="lastName">First Name</label>
            </div>;
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="phone" ref="phone" type="text" />
              <label htmlFor="phone">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="email" ref="email" type="text" />
              <label htmlFor="email">First Name</label>
            </div>;
          </div>;
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Add Person
            <i class="material-icons right">send</i>
          </button>;
        </form>
      </div>
    );
  }
}

export default PersonForm;
