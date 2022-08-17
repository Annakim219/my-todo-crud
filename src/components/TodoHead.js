import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const nowDate = new Date();
const renderDate = () => {
  if (nowDate) {
    const year = nowDate.getFullYear();
    const month = String(Number(nowDate.getMonth()) + 1);
    const date = nowDate.getDate();
    return `${year}년 ${month}월 ${date}일`;
  }
  return "";
};

const renderDay = () => {
  if (nowDate) {
    const dayToKorean = ["월", "화", "수", "목", "금", "토", "일"];
    const day = nowDate.getDay();
    return `${dayToKorean[day]}요일`;
  }
  return "";
};

function TodoHead({ todos }) {
  const countUndone = () => {
    return todos.reduce((acc, cur) => {
      if (cur.done === false) return acc + 1;
      return acc;
    }, 0);
  };

  return (
    <TodoHeadBlock>
      <h1>{renderDate()}</h1>
      <div className="day">{renderDay()}</div>
      <div className="tasks-left">할일 {countUndone()}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
