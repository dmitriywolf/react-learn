import React, {Component} from 'react';
import AppHeader from "../app-header/app-header";
import SearchPanel from '../search-panel/search-panel';
import TaskFilter from '../task-filter/task-filter';
import TasksList from "../task-list/tasks-list";
import AddTask from '../add-task/add-task';
import "./app.css";

export default class App extends Component {
  maxId = 100;

  state = {
    tasksArr: [
      this.createTaskItem('Изучить React + Redux'),
      this.createTaskItem('Изучить Node.js'),
      this.createTaskItem('Изучить Express.js'),
      this.createTaskItem('И наконец MongoDB')
    ],
    searchText: '',
    filter: 'all'  // all, active, done, important
  };

  // Функция создания элемента 
  createTaskItem(text) {
    return {
      id: this.maxId++,
      text,
      important: false,
      done: false
    }
  }

  itemDeleted = (id) => {
    this.setState(({tasksArr}) => {
      // индекс элемента который собираемся удалять
      const index = tasksArr.findIndex((el) => el.id === id);

      // массив до нужного элемента
      const before = tasksArr.slice(0, index);
      // массив после нужного элемента
      const after = tasksArr.slice(index + 1);
      // объединяем в новыый массив и получаем новый стейт
      const newArr = [...before, ...after];
      return {
        tasksArr: newArr
      };

    });
  };

  itemAdd = (text) => {
    // создаем новый элемент 
    const newItem = this.createTaskItem(text);

    this.setState(({tasksArr}) => {
      // создаем новый массив который состоит из старого + новый элемент
      const newArr = [
        ...tasksArr, newItem
      ];
      return {
        tasksArr: newArr
      };
    });
  };

  // фцнкция переключения значения свойств
  toggleProp(array, id, prop) {
    const index = array.findIndex((el) => el.id === id);

    const oldItem = array[index];
    const newItem = {...oldItem, [prop]: !oldItem[prop]};

    return [
      ...array.slice(0, index),
      newItem,
      ...array.slice(index + 1)
    ];
  };

  onDone = (id) => {
    this.setState(({tasksArr}) => {
      return {
        tasksArr: this.toggleProp(tasksArr, id, 'done')
      }
    });
  };

  onImportant = (id) => {
    this.setState(({tasksArr}) => {
      return {
        tasksArr: this.toggleProp(tasksArr, id, 'important')
      }
    });
  };

  search(items, search) {
    if (search.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.text.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  onSearch = (searchText) => {
    this.setState({searchText});
  };

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      case "important":
        return items.filter((item) => item.important);
      default:
        return items;
    }
  };

  onFilterChange = (filter) => {
    this.setState({filter});
  };


  render() {
    const {tasksArr, searchText, filter} = this.state;

    const visibleItems = this.filter(this.search(tasksArr, searchText), filter);

    const doneCount = tasksArr.filter((el) => el.done).length;
    const todoCount = tasksArr.length - doneCount;

    return (
        <div className="app">
          <AppHeader todo={todoCount} done={doneCount}/>
          <div>
            <SearchPanel onSearch={this.onSearch}/>
            <TaskFilter filter={filter} onFilterChange={this.onFilterChange}/>
          </div>
          <TasksList
              tasks={visibleItems}
              itemDeleted={this.itemDeleted}
              onDone={this.onDone}
              onImportant={this.onImportant}
          />
          <AddTask addItem={this.itemAdd}/>
        </div>
    );
  };
}


