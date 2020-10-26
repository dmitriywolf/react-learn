import React from 'react';

import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends React.Component {
  state={
    slectedPerson: 5
  };

  onPersonSelected = (id)=> {
    this.setState( {
      slectedPerson: id
    })
  };

  render(){
    return (
    <div>
      <AppHeader />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.slectedPerson}/>
        </div>
      </div>
    </div>


    );
  };
}

