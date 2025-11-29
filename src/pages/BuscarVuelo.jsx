import { useNavigate } from "react-router-dom";
import "../App.css";

export default function BuscarVuelo() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <img src="/GAP_logo.jpg" className="logo" />
      <h2 className="title">Validación de Vuelo</h2>

      <input className="input" placeholder="Número de vuelo" />
      <input className="input" placeholder="Apellido" />

      <button className="button" onClick={() => navigate("/camara")}>
        Continuar
      </button>
    </div>
  );
}
