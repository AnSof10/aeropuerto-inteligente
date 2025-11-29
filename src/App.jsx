import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuscarVuelo from "./pages/BuscarVuelo";
import RFID from "./pages/RFID";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuscarVuelo />} />
        <Route path="/rfid" element={<RFID />} />
      </Routes>
    </Router>
  );
}

export default App;
