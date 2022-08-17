import React from "react";
import { createGlobalStyle } from "styled-components";

// 전역 배경색 (body)
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>안녕하세요.</div>
    </>
  );
}

export default App;
