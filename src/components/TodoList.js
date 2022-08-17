import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList({ todos, handleChangeDone, handleDelete }) {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          done={todo.done}
          handleChangeDone={handleChangeDone}
          handleDelete={handleDelete}
        ></TodoItem>
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
