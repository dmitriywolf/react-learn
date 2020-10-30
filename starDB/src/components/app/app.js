import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipsPage }  from '../pages';

import { BrowserRouter as Router, Route} from 'react-router-dom';

import './app.css';

export default class App extends Component {
  
  swapiService = new SwapiService();

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>

          <Router>
            <div className="stardb-app">

              <Header />
              <RandomPlanet updateInterval={5000}/>

                <Route path="/people" component={PeoplePage}/> 
                <Route path="/planets" component={PlanetsPage}/> 
                <Route path="/starships" component={StarshipsPage}/> 
                
              
            </div>

          </Router>
         
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
