import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import Row from '../row';

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="stardb-app">
            <Header />

            {planet}

            <Row left={<PersonList/>} right={<PersonDetails itemId={20}/>} />
            <Row left={<PlanetList/>} right={<PlanetDetails itemId={5}/>} />
            <Row left={<StarshipList/>} right={<StarshipDetails itemId={9}/>} />
            
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
