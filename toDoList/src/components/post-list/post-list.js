import React from "react";

import PostListItem from "../post-list-item";

import "./post-list.css";

const PostList = (props ) => {
   return (

    <ul className="app-list list-group" >

      <PostListItem label="Going to learn React" important/>
      <PostListItem label="Going to learn Redux"/>
      <PostListItem label="Going to learn Next.js"/>
      <PostListItem label="Going to learn Node.js"/>

    </ul>
   )
}

export default PostList;