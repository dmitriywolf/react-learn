import React from 'react';
import AppTitle from '../app-title/app-title';


export default class AppHeader extends React.Component {
  constructor(props) {
    super();
  }

  render(){
    return (
      <div>
        <AppTitle/>
        <h2>5 more to do, 1 done</h2>

      </div>
    )
  }


}