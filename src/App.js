import React from 'react';
import './App.css';
import ToDoList from './ToDoList/ToDoList';
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
      <ToDoList todos={this.state.todos} todos={this.state.todos}></ToDoList>
      </div>
      );
    }

    componentDidMount = () => {
      const todos = localStorage.getItem('todos');
      if(todos){
        const savedTodos = JSON.parse(todos);
        this.setState({ todos : savedTodos });
      } else {
        console.log('No todos');
      }
    }

    addTodo = async (todo) => {
      await this.setState({todos: [...this.state.todos,{
        text: todo,
        completed: false
      }] });
      localStorage.setItem('todos',JSON.stringify(this.state.todos));
      console.log(localStorage.getItem('todos'));
  }
    updateTodo = (todo) =>{
      const newTodos = this.state.todos.map(_todo => {
        if(todo === _todo)
          return {
            text: todo.text,
            completed: !todo.completed
          }
          else
            return _todo
      });
      this.setState({todos: newTodos});
      console.log(newTodos);
    }
}

export default App;