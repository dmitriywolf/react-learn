import React, {Component} from 'react';
import "./task-filter.css";

export default class TaskFilter extends Component {

  btns = [
    {name: 'all', label: "All"},
    {name: 'active', label: "Active"},
    {name: 'important', label: "Important"},
    {name: 'done', label: "Done"},
  ];

  render() {

    const {filter, onFilterChange} = this.props;

    const btns = this.btns.map(({name, label}) => {

      const isActive = filter === name;
      const claz = isActive ? 'active' : '';

      return (
          <button
              className={`task-filter-btn btn btn-outline-dark ${claz}`}
              type="button"
              key={name}
              onClick={() => onFilterChange(name)}>
            {label}
          </button>
      )
    });


    return (
        <div className="task-filter btn-group">
          {btns}
        </div>
    );
  }

}

