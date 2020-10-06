import React, {Component} from 'react';

export default class TaskFilter extends Component {
  constructor() {
   super();
  }

  render(){
    return (
      <div>
      <button className="btn btn-outline-dark active" type="button" >All</button>
      <button className="btn btn-outline-dark" type="button">Active</button>
      <button className="btn btn-outline-dark" type="button">Done</button>
    </div>
    );
  }

}

