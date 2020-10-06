import React, {Component} from 'react';

export default class TaskItem extends Component {
  constructor(props) {
    super();
  }

  render() {

    const { text, important=false } = this.props;

    const spanStyle = {
      color: important ? "red" : "black",
      fontWeight: important ? "bold" : "normal"
    }

    return(
      <span>
        <span style={spanStyle}>
          {text}
        </span>
        <button className="btn btn-outline-danger" type="button">
          Delete
        </button>
        <button className="btn btn-outline-info" type="button">
          Important
        </button>



      </span>
    );
  };
};
