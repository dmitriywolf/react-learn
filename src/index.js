import React from 'react';
import ReactDOM  from 'react-dom';


const root = document.getElementById('root');


//const element = <h1>First Element</h1>;

const element = React.createElement(
  'h1',
  null,
  'First Element'
);



ReactDOM.render(
  element,
  root
);




