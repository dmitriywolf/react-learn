import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';

import './app.css';



export default class App extends Component {

  maxId = 100;

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
        ...todoData.slice( 0, idx ),
        ...todoData.slice( idx + 1 )
      ];

      return {
        todoData: newArray
      };

    });
  };

  addItem = ( text ) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };

    this.setState( ( {todoData} ) => {

      const newArr = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArr
      };
        
    });

  };

  onToggleImportant = (id) => {
    console.log('Toggle important ', id);
  };

  onTogleDone = (id) => {
    console.log('Toggle Done ', id);
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
        todos = { this.state.todoData}
        onDeleted = { this.deleteItem }
        onToggleImportant = { this.onToggleImportant }
        onTogleDone = { this.onTogleDone }
      />

      <AddItem onAddItem = { this.addItem }/>
    </div>
    );
  };
  

}
