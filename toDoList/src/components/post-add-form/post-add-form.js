import React, {Component} from "react";
import "./post-add-form.css";

export default class PostAddForm extends Component {
  constructor(props){
    super(props);
    this.onValueChange = this.onValueChange.bind(this);


  }


  onValueChange(e){
    console.log(e.target.value)
  }


  render(){
    const {onAddItem} = this.props;

    return (
      <form className="bottom-panel d-flex">
        <input
          type="text"
          placeholder="Напишите свою следующую задачу"
          className="form-control from-new-post-label"
          onChange={this.onValueChange}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={ () => onAddItem("hello Item") }>
          Добавить
        </button>
      </form>
    )
  }

}
