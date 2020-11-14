import React from 'react';

import TaskItem from '../task-item/'
import "./tasks-list.css";


export default class TasksList extends React.Component {
  render() {

    const {tasks, itemDeleted, onDone, onImportant} = this.props;

    const elements = tasks.map((item) => {

      const {id, ...itemProps} = item;

      return (
          <li key={id}>
            <TaskItem
                {...itemProps}
                delItem={() => itemDeleted(id)}
                onDone={() => onDone(id)}
                onImportant={() => onImportant(id)}
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