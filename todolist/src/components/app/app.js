import React, {Component} from "react";

import AppHeader from "../app-header";
import ToDoList from "../todo-list/";
import SearchBox from "../search-box";
import ItemStatusFilter from "../item-status-filter";
import AddItem from "../add-item";

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    toDoData: [
      this.createToDoItem('Learn React'),
      this.createToDoItem('Learn Redux'),
      this.createToDoItem('Learn Node.js'),
      this.createToDoItem('Learn Express.js')
    ]
  };

  createToDoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(  ( { toDoData } ) => {
        const indx = toDoData.findIndex( (el) => el.id === id);

        const before = toDoData.slice(0, indx);
        const after = toDoData.slice(indx + 1 );

        const newArr = [...before, ...after];

        return {
          toDoData: newArr
        };
    });
  };

  addItem = (text) => {
    
   const newItem = this.createToDoItem(text);

   this.setState( ( { toDoData } )=> {
    
    const newArr = [
      ...toDoData,
      newItem
    ]

    return {
      toDoData: newArr
    }

   })
  };

  toggleProperty(arr, id, propName) {
    const indx = arr.findIndex( (el) => el.id === id);

      const oldItem = arr[indx];
      const newItem = { ...oldItem, [propName]: !oldItem[propName]}

      return [
        ...arr.slice(0, indx),
        newItem,
        ...arr.slice(indx+1)
      ];
  }

  onToggleDone = (id) => {
    this.setState( ( {toDoData} ) => {
      return {
        toDoData: this.toggleProperty(toDoData, id, 'done')
      }
    });
  };


  onToggleImportant = (id) => {
    this.setState( ( {toDoData} ) => {
      return {
        toDoData: this.toggleProperty(toDoData, id, 'important')
      }
    });
  }

 
  render(){

    const { toDoData} = this.state;

  const doneCount = toDoData.filter( (el) => el.done).length;
  const todoCount = toDoData.length - doneCount;

   return (
     <div className="todo-app">
       <AppHeader toDo={todoCount} done={doneCount}/>

       <div className="top-panel d-flex">
         <SearchBox />
         <ItemStatusFilter />
       </div>

       <ToDoList 
         todos={this.state.toDoData}
         onDeleted={ this.deleteItem}
         onToggleImportant={this.onToggleImportant}
         onToggleDone={this.onToggleDone}
       />
       <AddItem
        onAddItem={ this.addItem }
       />
     </div>
   )
  }
}