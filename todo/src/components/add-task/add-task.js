import React, {Component} from 'react';

export default class AddTask extends Component {
  constructor(props){
    super();
  }

  render() {

    return (
      <div className="add-task input-group">

        <input className="form-control"
          type="text" 
          placeholder="type to create task" />

          <div className="input-group-prepend"> 
            <button className="btn btn-outline-dark" 
               type="submit">
              Add Task
           </button>
          </div>
        
      </div>
    );
  }
}