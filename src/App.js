import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import axios from "axios";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

// 전역 배경색 (body)
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const { REACT_APP_BACKEND_URL } = process.env;

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const getTodos = () => {
    axios
      .get(`${REACT_APP_BACKEND_URL}/todos`)
      .then((res) => setTodos(res.data));
  };

  useEffect(() => {
    getTodos();
  }, [newTodo]);

  const handleNewTodo = (event) => {
    event.preventDefault();
    if (!newTodo) {
      return;
    }

    const data = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
      todo: newTodo,
      done: false,
    };

    axios.post(`${REACT_APP_BACKEND_URL}/todos`, data);
    setNewTodo("");
  };

  const handleDelete = (todo) => {
    axios
      .delete(`${REACT_APP_BACKEND_URL}/todos/${todo.id}`)
      .then((res) => {
        const newTodos = todos.filter((el) => el.id !== todo.id);
        setTodos(newTodos);
      })
      .catch((err) => console.log(err));
  };

  const handleChangeDone = (todo) => {
    axios
      .put(`${REACT_APP_BACKEND_URL}/todos/${todo.id}`, {
        ...todo,
        done: !todo.done,
      })
      .then((res) => {
        const newTodos = todos.map((el) => {
          if (el.id !== todo.id) {
            return el;
          } else {
            return res.data;
          }
        });
        setTodos(newTodos);
      });
  };

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todos={todos} />
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleChangeDone={handleChangeDone}
        />
        <TodoCreate
          handleNewTodo={handleNewTodo}
          newTodo={newTodo}
          setNewTodo={setNewTodo}
        />
      </TodoTemplate>
    </>
  );
}

export default App;
