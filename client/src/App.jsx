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
