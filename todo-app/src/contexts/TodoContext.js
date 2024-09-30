import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Buy groceries",
      completed: false,
    },
    {
      id: 2,
      title: "Clean the house",
      completed: false,
    },
  ]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};
