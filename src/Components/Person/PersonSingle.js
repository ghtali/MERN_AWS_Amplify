import React from 'react';

//created stateless function component
const PersonSingle = (props) => {
  return (
      <div className="row">
    <div className="col s12">
      <div className="card">
        <div className="card-image">
          <img src="employee.png" alt=""/>
          <span className="card-title">
          {props.person.firstName} {props.person.lastName}
          </span>
        </div>
        <div className="card-content">
          <p>
            Phone: {props.person.phone} - Email: {props.person.email}
            Techniques: {props.person.techniques} - Strength: {props.person.strength}
            Speed: {props.person.speed} - Ability: {props.person.ability}
          </p>
        </div>
        <div className="card-action">
          Team: {props.person.team}
        </div>
      </div>
    </div>
  </div>
  );
};
export default PersonSingle;
