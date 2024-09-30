import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Todos from "./components/Todos";
import { TodoProvider } from "./contexts/TodoContext";

export default function App() {
  return (
    <>
      <TodoProvider>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="*" element={<Login />} />
        </Routes>
        {/* <Todos/> */}
      </TodoProvider>
    </>
  );
}
