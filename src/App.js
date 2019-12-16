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
      <AddTodo addTodoFn={this.addTodo}></AddTodo>
      <ToDoList todos={this.state.todos}></ToDoList>
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

    addTodo = async (todo) => {
      await this.setState({todos: [...this.state.todos,todo]});
      localStorage.setItem('todos',JSON.stringify(this.state.todos));
      console.log('saved');
  }
}

export default App;