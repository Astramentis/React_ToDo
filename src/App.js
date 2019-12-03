import React from 'react';
import './App.css';
import ToDoList from './ToDoList/ToDoList';
import ToDoItem from './ToDoItem/ToDoItem';

class App extends React.Component{

  render(){
    return(
      <div>
      <ToDoList></ToDoList>
      <ToDoItem></ToDoItem>
      </div>
      );
  }

}

export default App;