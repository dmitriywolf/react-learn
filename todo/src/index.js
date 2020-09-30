import React from 'react';
import ReactDOM from 'react-dom';
import "./main.scss";

const App = () => {
  return (
    <h1>This is webpack reactapp</h1>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);