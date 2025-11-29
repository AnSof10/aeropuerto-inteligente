import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BuscarVuelo from "./pages/BuscarVuelo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BuscarVuelo />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
