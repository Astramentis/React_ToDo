import React from 'react';
import './App.css';
import ToDoList from './ToDoList/ToDoList';
import ToDoItem from './ToDoItem/ToDoItem';
import AddTodo from './AddTodo/AddTodo';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      todos: []
    };
  }

  render(){
    return(
      <div>
      <ToDoList></ToDoList>
      <ToDoItem></ToDoItem>
      <AddTodo></AddTodo>
      </div>
      );
    }

    componentDidMount = () => {
      const todos = localStorage.getItem('todos');
      if(todos){
        console.log('Has todos', todos);
      } else {
        console.log('');
      }
    }

}

export default App;