import React from "react";

import Header from '../header';
import SearchPanel from '../search-panel';
import PostStatusFilter from "../post-status-filter";





const App = () => {
  return ( 
  <div classNmae="app">
    <Header/>

    <div className="search-panel d-flex">
      <SearchPanel/>
      <PostStatusFilter/>
    </div>
    
  </div>
  )
}

export default App;