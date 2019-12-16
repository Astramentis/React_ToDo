import React from 'react';

class AddTodo extends React.Component{
    render (){
        return(
        <div className = 'AddTodoContainer'>
            <form>  
                <input onChange = {(e)=> this.updateInput(e)} type = 'text'></input>
            </form>
        </div>)
    }
    updateInput = (e) => {
        console.log(e);
    }

}

export default AddTodo;