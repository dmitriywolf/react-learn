import React, {Component} from "react";

import "./add-item.css";


export default class AddItem extends Component {


  state = {
    label: ""
  };

  onLabelChange = (e) => {
     this.setState({
       label: e.target.value
     });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label)
    this.setState({
      label: ""
    })
  }

  render (){

    const { onAddItem } = this.props;

    return (

      <form className="item-add-form d-flex"
            onSubmit={this.onSubmit}>

        <input className="form-control" 
          type="text" 
          placeholder="New Task"
          onChange={this.onLabelChange}
          value={this.state.label}
          />
  
        <button 
          className="btn btn-outline-secondary"
          >
          Add Item
        </button>
      </form>
    )
  }
 
};

