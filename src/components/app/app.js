import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {

    const todoData = [
      {id: 1, label: 'Drink Coffe', important: true},
      {id: 2, label: 'Drink tea', important: false},
      {id: 3, label: 'Drink milk', important: true},
      {id: 4, label: 'Drink water', important: false},
    ];
    
      return (
        <div className="todo-app">
        <AppHeader toDo={1} done={3}/>
        <div className="top-panel d-flex">
          <SearchPanel/>
          <ItemStatusFilter/>
        </div>
        
        <TodoList todos={todoData}/>
      </div>
      );
    };

    export default App;