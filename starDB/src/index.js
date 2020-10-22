import React from 'react';
import ReactDOM from 'react-dom';


import SwapiService from './services/swapi-service'
import App from './components/app';



ReactDOM.render (
  <App/>,
  document.querySelector('#root')
)

// const swapi = new SwapiService();
// swapi.getPerson(3)
// .then( people => console.log(people.name))
