import React from 'react';
// import Components
import Todo from './Todo';


const ToDoList=({todos,setTodos,filteredTodos})=>{
 console.log(todos)
    return (
        <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo)=>(
          <Todo key={todo.id} text = {todo.text} todos={todos} setTodos={setTodos} todo={todo}/>
          ))}
        </ul>
      </div>
    );
};

export default ToDoList;  