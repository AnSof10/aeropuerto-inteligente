import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BuscarVuelo from "./pages/BuscarVuelo";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/buscar" element={<BuscarVuelo />} />
        <Route path="/" element={<Navigate to="/buscar" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
