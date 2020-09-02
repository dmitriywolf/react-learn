import React from "react";

import Header from '../header';
import SearchPanel from '../search-panel';
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";


const App = () => {

  let data = [
    {label: "Going to learn React", important: false, id: "1wefwefw"},
    {label: "Going to learn Redux", important: true, id: "1wefwef"},
    {label: "Going to learn Next.js", id: "1fwfwf"},
    {label: "Going to learn Node.js", id: 14}
  ];


  return ( 
  <div className="app">
    <Header/>

    <div className="search-panel d-flex">
      <SearchPanel/>
      <PostStatusFilter/>
    </div>

    <PostList posts={data}/>

    <PostAddForm/>
    
  </div>
  )
}

export default App;