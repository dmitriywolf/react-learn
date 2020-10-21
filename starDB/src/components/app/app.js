import React from 'react';

import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

const App = () => {
  return (
    <div>
      <AppHeader />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;