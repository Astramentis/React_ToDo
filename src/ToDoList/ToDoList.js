import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';

class ToDoList extends React.Component{
    render (){
       const { todos } = this.props;

       return (
           <div className = 'todoListContainer'>
               {
                   todos.map((_todo, _index) => {
                       return(
                           <ToDoItem updateTodoFn = {this.updateTodo} key = {_index} todo = {_todo}></ToDoItem>
                       )
                   })
            }
           </div>
       );
    }

    updateTodo = (todo) => {
        this.props.updateTodoFn (todo);
    }

}

export default ToDoList;