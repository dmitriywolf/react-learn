import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';



export default class App extends Component {

  state = {
    todoData: [
      {id: 1, label: 'Drink Coffe', important: true},
      {id: 2, label: 'Drink tea', important: false},
      {id: 3, label: 'Drink milk', important: true},
      {id: 4, label: 'Drink water', important: false},
      {id: 5, label: 'Drink vodka', important: false},
      {id: 6, label: 'Drink bear', important: false},
    ]
  };

  deleteItem = (id) => {
    this.setState( ( { todoData } ) => {

      const idx = todoData.findIndex( (el) => el.id === id );
      
      const newArray = [
        ... todoData.slice( 0, idx ),
        ... todoData.slice( idx + 1 )
      ];

      return {
        todoData: newArray
      };

    });
  };
    
  render() {
    return (
      <div className="todo-app">
      <AppHeader toDo={1} done={3}/>
      <div className="top-panel d-flex">
        <SearchPanel/>
        <ItemStatusFilter/>
      </div>
      
      <TodoList 
        todos = {this.state.todoData}
        onDeleted = { this.deleteItem }
        />
    </div>
    );
  };
  

}
