import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function Todos() {
  const {todos} = useContext(TodoContext);
  console.log(todos);
  return (
    <h1>{todos.map((todo)=> (
      <div>
        {todo.title} 
      </div>
    ))}</h1>
  );
}
