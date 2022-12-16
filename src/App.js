import React, {useState,useEffect} from 'react';
import './App.css';
import Form from './Components/Form';
import ToDoList from './Components/ToDoList';

function App() {
  //States
  const[inputText, setInputText] = useState(""); 
  const[todos, setTodos] = useState([]);
  const[status, setStatus]= useState("all");
  const[filteredTodos, setFilteredTodos]= useState([]);
//useEffect
useEffect(()=>{

  const filterHandler =()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed===true));
        break;
        case'uncompleted':
        setFilteredTodos(todos.filter(todo=>todo.completed===false));
        break;
        default:
        setFilteredTodos(todos);
        break;
    }
  }
  
  filterHandler();
},[todos,status ]);

  return (
    <div className="App">
      <header>
      <h1>Ebenezer's Todo List</h1>
    </header>
    <Form
     setInputText={setInputText} 
     todos={todos} 
     setTodos={setTodos}
      inputText={inputText}
       setStatus={setStatus}
       filteredTodos={filteredTodos}
       />

    <ToDoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
