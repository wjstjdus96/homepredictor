import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Result from "./pages/Result/Result";
import { GlobalStyles } from "./styles/GlobalStyles";

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
