import React, {Component} from "react";

import Header from '../header';
import SearchPanel from '../search-panel';
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

// import "./app.css";
import styled from "styled-components";


const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`



export default class App extends Component {

  constructor (props){
    super(props);

    this.state = {
      data : [
        {label: "Going to learn React", important: false, id: "1wefwefw"},
        {label: "Going to learn Redux", important: true, id: "1wefwef"},
        {label: "Going to learn Next.js", id: "1fwfwf"},
        {label: "Going to learn Node.js", id: 14}
      ]

    };

    this.deleteItem = this.deleteItem.bind(this);

  }

  deleteItem(id) {
    this.setState(  ({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      
      const before = data.slice(0, index);
      const after = data.slice(index+1);

      const newArr = [...before, ...after];

      return {
        data: newArr
      }
    });
  }

 
render(){

  return ( 
    <AppBlock>
      <Header/>
  
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
  
      <PostList 
      posts={this.state.data}
      onDelete={this.deleteItem}
      />
  
      <PostAddForm/>
      
    </AppBlock>
    )
}



}
