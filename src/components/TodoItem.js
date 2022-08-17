import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
  // TodoItemBlock 위에 커서가 있을때 Remove 컴포넌트를 보여주세요.
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, todo, handleDelete, handleChangeDone }) {
  const newTodo = { id, todo, done };

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={() => handleChangeDone(newTodo)}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{todo}</Text>
      <Remove>
        <MdDelete onClick={() => handleDelete(newTodo)}></MdDelete>
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;
