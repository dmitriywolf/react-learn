import React from 'react';
import ReactDOM  from 'react-dom';
import { Simulate } from 'react-dom/test-utils';

//Корневой элемент
const root = document.getElementById('root');


//Функциональный компонент TodoList 
const TodoList = () => {

  const items = ['Learn React','Create awesome app'];

  return (
    <ul>
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  );
};

//Функциональный компонент AppHeader
const AppHeader = () => {
  return (
    <h1>My TODO list</h1>
  );
};

//Коспонент поисковая панель
const SearchPanel = () => {
  const searchText = 'Type here to search';

  const searchStyle = {
    fontSize: '20px'
  }

  return (
    <input 
    style = {searchStyle}
    placeholder={searchText}/>
  );
};


//Главный компонент App
const App = () => {
  return (
    <div>
    <AppHeader/>
    <SearchPanel/>
    <TodoList/>
  </div>
  );
};


ReactDOM.render(
  <App/>,
  root
);




