import React from 'react';
import './App.css';
import PersonList from './Person/PersonList';
import PersonSingle from './Person/PersonSingle';
import PersonForm from './Person/PersonForm';

function App () {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s12">Menu</div>
      </div>
      <div className="row">
        <div className="col s3"><PersonList /></div>
        <div className="col s9"><PersonSingle /></div>
      </div>
      <div className="row">
        <div className="col s12"><PersonForm /></div>
      </div>;

    </div>
  );
}

export default App;
