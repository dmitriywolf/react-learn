import React from 'react';
import "./task-item.css";

const TaskItem = ({text, delItem, onImportant, onDone, done, important}) => {

  let textClassNames = "task-item__text";
  if (done) {
    textClassNames += " done";
  }
  if (important) {
    textClassNames += " important";
  }

  return (
      <div className="task-item">
      <span className={textClassNames}>
        {text}
      </span>
        <span>
         <button className="task-item__btn btn btn-outline-success" type="button" onClick={onDone}>
          &#10003;
        </button>
        <button className="task-item__btn btn btn-outline-warning" type="button" onClick={onImportant}>
          !
        </button>
        <button className="task-item__btn btn btn-outline-danger"
                type="button"
                onClick={delItem}>
          X
        </button>
      </span>
      </div>
  );
};

export default TaskItem;


