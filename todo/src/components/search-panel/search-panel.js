import React, {Component} from 'react';
import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    searchText: ""
  };

  onSearch = (e) => {
    const searchText = e.target.value;
    this.setState( {searchText} );
    this.props.onSearch( searchText );
  };

  render(){

    return(
      <div className="search-panel input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">Search:</span>
        </div>
        <input className="form-control" type="text" placeholder="type to search"  value={this.state.searchText} 
        onChange={this.onSearch}/>
      </div>
    );
  }
}