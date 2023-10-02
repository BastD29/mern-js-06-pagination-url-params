import React from "react";
import PaginationTest1 from "./components/PaginationTest1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginationTest2 from "./components/PaginationTest2";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginationTest2 />} />
      </Routes>
    </BrowserRouter>
  );
}
