import React from 'react';

import './todo-list-item.css';


export default class TodoListItem  extends React.Component {

  // onLabelClick = ()=> {
  //   this.setState( ({done} ) => {
  //     return {
  //       done: !done
  //     }
  //   });
  // };

  // onMarkInportant = () => {
  //   this.setState( ( {important} ) => {
  //     return {
  //       important: !important
  //     }
  //   });
  // }

  render() {
    
    const { label, onDeleted, onToggleImportant, onTogleDone, important, done } = this.props;

    let className = 'todo-list-item';
    if(done) {
      className += ' done';
    }

   if(important) {
     className += ' important';
   }
  
    return (
      <span className={className}>
        <span
          className="todo-list-item-label"
          onClick={ this.onLabelClick }>
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick = { onTogleDone }>
          <i className="fa fa-exclamation" />
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick = { onToggleImportant } >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
