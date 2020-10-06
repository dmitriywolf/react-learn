import React, {Component} from 'react';
import "./task-item.css";

export default class TaskItem extends Component {

  constructor(props) {
    super();

    this.state = {
      done: false,
      important: false
    }


    this. onLabelClick = () => {
      this.setState( (state) => {
        return {
          done: !state.done
        }
      });
    };

    this.onImportant = () => {
      this.setState( (state) => {
        return {
          important: !state.important
        }
      });
    };

  }

 

  render() {
    const { text } = this.props;
    const { done, important } = this.state;

    let textClassNames = "task-item__text";

    if( done ) {
      textClassNames += " done";
    }

    if ( important ) {
      textClassNames += " important";
    }

    

    return(
      <div className="task-item">

        <span className={textClassNames}>
          {text}
        </span>

        <span>
           <button className="task-item__btn btn btn-outline-success" type="button" onClick={this.onLabelClick}>
            &#10003;
          </button>
          <button className="task-item__btn btn btn-outline-warning" type="button" onClick={this.onImportant}>
            !
          </button>
          <button className="task-item__btn btn btn-outline-danger" type="button">
            X
          </button>
        </span>
      </div>
    );
  };
};
