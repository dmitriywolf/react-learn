import React, {Component} from 'react';

export default class TaskItem extends Component {
  constructor(props) {
    super();
  }

  render() {

    const { text, important=false } = this.props;

    const spanStyle = {
      color: important ? "red" : "black"
    }

    return  <span style={spanStyle}>{text}</span>
  }
};
