import React from 'react';

import TaskItem from '../task-item/'
import "./tasks-list.css";



export default class TasksList extends React.Component {
  constructor(props) {
    super();

  }


  render() {

    const { tasks } = this.props;

    const elements = tasks.map( (item) => {
      return (
        <li key={item.id}>
          <TaskItem 
            text={item.text}
            important={item.important}
            />
        </li>
      );
    });
  
    return (
      <ul className="tasks-list"> 
        {elements}
      </ul>
    )
  }
}