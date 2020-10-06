import React, {Component} from 'react';

export default class AddTask extends Component {
  constructor(props){
    super();

  }


  render() {



    return (
      <div>

      <input type="text" 
       placeholder="type to create task" />
      <button className="btn btn-outline-dark" type="submit">Add Tasks</button>


      </div>
    )
  }


}