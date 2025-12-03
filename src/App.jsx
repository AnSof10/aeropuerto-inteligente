import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import BuscarVuelo from "./pages/BuscarVuelo.jsx";
import RFID from "./pages/RFID.jsx";
import Camara from "./pages/Camara.jsx";
import AgregarUsuario from "./pages/AgregarUsuario.jsx";
import RFIDAgregar from "./pages/RFIDAgregar.jsx";
import CamaraAgregar from "./pages/CamaraAgregar.jsx";
import UsuarioAgregado from "./pages/UsuarioAgregado.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/buscar-vuelo" element={<BuscarVuelo />} />
        <Route path="/rfid" element={<RFID />} />
        <Route path="/camara" element={<Camara />} />
        <Route path="/rfid-agregar" element={<RFIDAgregar />} />
        <Route path="/camara-agregar" element={<CamaraAgregar />} />
        <Route path="/usuario-agregado" element={<UsuarioAgregado />} />
        <Route path="/agregar-usuario" element={<AgregarUsuario />} />
      </Routes>
    </Router>
  );
}
