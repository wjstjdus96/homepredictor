import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Result from "./pages/Result/Result";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result/:id" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
