import React from 'react';

import AppHeader from '../app-header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';

import './app.css';

export default class App extends React.Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  // onPersonSelected = (id)=> {
  //   this.setState( {
  //     slectedPerson: id
  //   })
  // };

  render(){

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    return (
    <div className="stardb-app">
        <AppHeader />
        { planet }

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lg"
            onClick={this.toggleRandomPlanet}>
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>
        <PeoplePage />
      </div>
    );
  };
}

