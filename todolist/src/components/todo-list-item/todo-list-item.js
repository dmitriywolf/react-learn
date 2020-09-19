import React, {Component} from 'react';
import './todo-list-item.css';


export default class TodoListItem extends Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   done: false,
    //   important: false

    // };


    //1 способ
    // this.onLabelClick = this.onLabelClick.bind(this);


    // 2 способ 
    // this.onLabelClick = () => {
    //   console.log( `Done ${this.props.label}`);
    // }
    
  }

  //3 способ поля классов
  onLabelClick = () => {
    this.setState( (state) => {
      return {
        done: !state.done
      }
    })
  }

  onMarkImportant = () => {
    this.setState( (state) => {
      return {
        important: !state.important
      }
    })
  }

  //1 способ
  // onLabelClick(){
  //  console.log( `Done ${this.props.label}`);
  // }

  render(){

    const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

    // const { done, important } = this.state;

    let classNames = "todo-list-item";

    if(done) {
      classNames += " done";
    }

   
    if(important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone}>
          {label}
        </span>

        <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}>
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={ onDeleted }>
          <i className="fa fa-trash-o" />
        </button>
    </span>
    );
  }
}
