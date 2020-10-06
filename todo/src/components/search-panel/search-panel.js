import React, {Component} from 'react';
import "./search-panel.css";

export default class SearchPanel extends Component {

  constructor() {
    super();
  }

  render(){

    return(
      <div className="search-panel input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">Search:</span>
        </div>
        <input  className="form-control" type="text" placeholder="type to search" />
      </div>
    );
  }
}