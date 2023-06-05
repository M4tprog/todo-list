/* eslint-disable no-console */
import React, { useState } from "react";
import { MdOutlineTaskAlt } from "react-icons/md";
// import { RiTaskFill } from "react-icons/ri";

export default function App() {
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;

  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const erase = () => {
    setValue("");
  };

  const submit = () => {
    console.log(value);
    setTodos([
      ...todos,
      { id: new Date().getTime(), title: value, checked: true },
    ]);
    erase();
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">To do List</h1>
      </header>
      <section className="main">
        <input
          type="text"
          name=""
          id=""
          className="new-todo"
          placeholder="O que precisa ser feito?"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span className="todo">{todo.title}</span>
              <button className="remove" type="button">
                <MdOutlineTaskAlt size={28} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
