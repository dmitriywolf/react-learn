import React from "react";
import "./post-add-form.css";



const PostAddForm = () => {
  return ( 
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="Напишите свою следующую задачу"
        className="form-control from-new-post-label"
      />
      <button
        type="submit"
        className="btn btn-outline--secondary">
        Добавить</button>
    </form>
  );


}

export default PostAddForm;