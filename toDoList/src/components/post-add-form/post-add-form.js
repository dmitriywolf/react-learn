import React from "react";
import "./post-add-form.css";



const PostAddForm = ({onAddItem}) => {
  return ( 
    <div className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="Напишите свою следующую задачу"
        className="form-control from-new-post-label"
      />
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={ () => onAddItem("hello Item") }>
        Добавить</button>
    </div>
  );


}

export default PostAddForm;