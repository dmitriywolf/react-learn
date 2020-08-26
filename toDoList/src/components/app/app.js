import React from "react";

import Header from '../header';
import SearchPanel from '../search-panel';
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";


const App = () => {
  return ( 
  <div classNmae="app">
    <Header/>

    <div className="search-panel d-flex">
      <SearchPanel/>
      <PostStatusFilter/>
    </div>

    <PostList/>

    <PostAddForm/>
    
  </div>
  )
}

export default App;