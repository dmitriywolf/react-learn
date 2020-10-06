import React, { Component } from 'react';

import AppHeader from "../app-header/app-header";
import SearchPanel from '../search-panel/search-panel';
import TaskFilter from '../task-filter/task-filter';
import TasksList from "../task-list/tasks-list";
import AddTask from '../add-task/add-task';

import "./app.css";


export default class App extends Component {


 render() {

  const tasksArr = [
    {id: 1, text: 'Изучить React + Redux', important: true}, 
    {id: 2, text: 'Изучить Node.js', important: true}, 
    {id: 3, text: 'Изучить Express.js', important: false}, 
    {id: 4, text: 'И наконец MongoDB', important: false}
  ];

  return (

    <div className="app">

      <AppHeader todo="3" done="1"/>

      <div>
         <SearchPanel/>
         <TaskFilter/>
      </div>
      
      <TasksList tasks={tasksArr}/>
      <AddTask/>
    </div>
  );

 };
}


