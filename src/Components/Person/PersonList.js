import React from 'react';

//created stateless function component
//Listing our persons component
//to see list of all persons
const PersonList = (props) => {
  return (
    <div>
      <ul className="collection with-header">
        <li className="collection with-header">
          <h4>List of Employees</h4>
        </li>
        {props.persons.map((item) => (
          <a href="#!" className="collection-item" key={item._id}
          onClick={props.updateCurrentPerson.bind(this,item)}>
          {item.firstName} {item.lastName}
          </a>
        ))}
      </ul>
    </div>
  );
}
export default PersonList;
