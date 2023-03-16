import React from "react";
import newId from "./newId";

function Todo(){
  
  const [newTodo, setNewTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  function addTodo(){
    
    if(!newTodo){
      alert("Please write a todo");
      return;
    }

    const todo = {
      id: newId(),
      value: newTodo
    }
    setTodos(prevState => [...prevState, todo]);
    setNewTodo("");
  }

  function deleteTodo(id){
      const newTodos = todos.filter(todo => todo.id !== id);
      setTodos(newTodos);
  }
  
  return(
    <>
      <div className="todo-app">
        <input
          type="text"
          placeholder="write here"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
        />
        <button onClick={() => addTodo()}>Add</button>
        <ul>
          {todos.map(todo =>{
            return(
              <li key={todo.id}>{todo.value} <button onClick={()=>deleteTodo(todo.id)}>X</button></li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Todo;