import React from 'react';
import ReactDOM  from 'react-dom';


const root = document.getElementById('root');

//JSX
const element = (
  <div>
    <h1>My TODO list</h1>

    <input placeholder="search"/>

  </div>
);

//Обычный код без JSX
// const element = React.createElement(
//   'h1',
//   null,
//   'First Element'
// );



ReactDOM.render(
  element,
  root
);




