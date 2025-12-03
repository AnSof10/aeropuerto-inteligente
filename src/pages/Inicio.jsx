// src/pages/Inicio.jsx
import { useNavigate } from "react-router-dom";
import "../App.css";

const logo = "/GAP_logo.jpg";

export default function Inicio() {
  const navigate = useNavigate();

  function irAgregarUsuario() {
    navigate("/agregar-usuario");
  }

  function irVerificarUsuario() {
    navigate("/buscar-vuelo");
  }

  return (
    <div className="container">
      <img src={logo} alt="Grupo Aeroportuario del Pacífico" className="logo" />

      <h2 className="title">Control de embarque</h2>

      <p
        style={{
          fontSize: "16px",
          color: "#555",
          marginBottom: "24px",
        }}
      >
        Selecciona una opción para continuar.
      </p>

      <button className="button" onClick={irAgregarUsuario}>
        Agregar usuario
      </button>

      <button
        className="button"
        style={{ marginTop: "12px" }}
        onClick={irVerificarUsuario}
      >
        Verificar usuario
      </button>
    </div>
  );
}
