import React, {Component} from 'react';

export default class AddTask extends Component {
  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {

    return (
        <form className="add-task input-group"
              onSubmit={this.onSubmit}>

          <input className="form-control"
                 type="text"
                 placeholder="type to create task"
                 onChange={this.onLabelChange}
                 value={this.state.label}/>

          <div className="input-group-prepend">
            <button className="btn btn-outline-dark"
                    type="submit"
            >
              Add Task
            </button>
          </div>

        </form>
    );
  }
}