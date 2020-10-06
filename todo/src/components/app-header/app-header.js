import React from 'react';
import "./app-header.css";


export default class AppHeader extends React.Component {
  constructor(props) {
    super();
  }

  render(){

    const { todo, done } = this.props;

    return (
      <div className="app-header">
        <h1 className="app-header__title">Task List</h1>
        <h2 className="app-header__info">  {todo} more to do, {done} done</h2>
      </div>
    )
  }


}