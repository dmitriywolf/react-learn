import React, {Component} from 'react';
import "./task-item.css";

export default class TaskItem extends Component {
  constructor(props) {
    super();
  }

  render() {

    const { text, important=false } = this.props;

    const spanStyle = {
      color: important ? "grey" : "black",
      fontWeight: important ? "bold" : "normal"
    }

    return(
      <div className="task-item">
        <span style={spanStyle}>
          {text}
        </span>
        <span className="btn-group">
          <button className="btn btn-outline-danger task-item-btn" type="button">Delete</button>
          <button className="btn btn-outline-info task-item-btn" type="button ">Important</button>
        </span>
      </div>
    );
  };
};
