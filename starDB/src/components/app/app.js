import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage }  from '../pages';

import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import './app.css';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {
  
  swapiService = new SwapiService();

  state = {
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  render() {

    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>

          <Router>
            <div className="stardb-app">

              <Header />
              <RandomPlanet updateInterval={5000}/>

              <Switch>
                <Route path="/" render={ () => <h2>Welcome to Star Wars Data Base</h2>} exact={true}/>
                {/* <Route path="/people" render={ () => <h2>People</h2>} exact/> */}
                <Route path="/people/:id?" component={PeoplePage}/> 
                
                <Route path="/planets" component={PlanetsPage}/> 
             
                <Route path="/starships" exact component={StarshipsPage}/> 
                <Route path="/starships/:id" render={({ match }) => { 
                  const {id} = match.params;
                  return  <StarshipDetails itemId={id} />   
                }}/>

                <Route path="/login" 
                  render={ () => (
                    <LoginPage isLoggedIn={isLoggedIn}
                    onLogin={ this.onLogin }/>
                )}/> 

                <Route path="/secret" 
                  render={ () => ( <SecretPage isLoggedIn={isLoggedIn}/>)}/> 

                <Route render={ () => <h2>Sorry... Page no found!</h2>}    />
              </Switch>
              
            </div>

          </Router>
         
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
