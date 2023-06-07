import React, { useState } from "react";
import { MdOutlineTaskAlt } from "react-icons/md";
import NewTodo from "./components/NewTodo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const onNewTodo(value) = () => {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        title: value,
        checked: false,
      },
    ]);
  }
  const onToggle = (todo) => {
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
  };

  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">To do List</h1>
      </header>
      <section className="main">
        <NewTodo onNewTodo = {onNewTodo}/>

        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span
                className={["todo", todo.checked ? "checked" : ""].join(" ")}
                onClick={() => onToggle(todo)}
                onKeyPress={() => onToggle(todo)}
                role="button"
                tabIndex={0}
              >
                {todo.title}
              </span>
              <button
                className="remove"
                type="button"
                onClick={() => onRemove(todo)}
              >
                <MdOutlineTaskAlt size={28} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
