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
      <button>Add Tasks</button>


      </div>
    )
  }


}