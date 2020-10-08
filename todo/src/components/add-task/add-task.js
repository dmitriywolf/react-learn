import React, {Component} from 'react';

export default class AddTask extends Component {
  constructor(props){
    super();
  }

  render() {

    const { addItem } = this.props;

    return (
      <div className="add-task input-group">

        <input className="form-control"
          type="text" 
          placeholder="type to create task" />

          <div className="input-group-prepend"> 
            <button className="btn btn-outline-dark" 
               type="button"
               onClick={ addItem }>
              Add Task
           </button>
          </div>
        
      </div>
    );
  }
}