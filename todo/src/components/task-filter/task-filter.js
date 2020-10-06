import React, {Component} from 'react';
import "./task-filter.css";

export default class TaskFilter extends Component {
  constructor() {
   super();
  }

  render(){
    return (
      <div className="task-filter btn-group">
        <button className="task-filter-btn btn btn btn-outline-dark active" type="button" >All</button>
        <button className="task-filter-btn btn btn-outline-dark" type="button">Active</button>
        <button className="task-filter-btn btn btn-outline-dark" type="button">Done</button>
      </div>
    );
  }

}

